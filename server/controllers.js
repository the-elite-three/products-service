const db = require('../db/knex');
const redis = require('redis');
const client = redis.createClient(6379)

module.exports.listQuery = (res, page = 1, count = 5) => {
  const range = [page === 1 ? 1 : (page - 1) * count, page * count]
  const productListRedisKey = `user:list:${page}${count}`
  client.get(productListRedisKey, (err, productList) => {
    if (productList) {
      res.json(JSON.parse(productList))
    } else {
      db('products').whereBetween('id', range)
        .then((query) => {
          client.setex(productListRedisKey, 3600, JSON.stringify(query));
          return query;
        })
        .then((query) => res.json(query))
        .catch((err) => console.error(err))
    }
  })
}

module.exports.productQuery = (param, res) => {
  let data = null;
  const productRedisKey = `user:product:${param}`
  client.get(productRedisKey, (err, product) => {
    if(product) {
      res.json(JSON.parse(product))
    } else {
      db('products').where('id', param)
        .then((query) => data = query[0])
        .then(() => db('features').where('product_id', param))
        .then((query) => query.map((row) => {return { feature: row.feature, value: row.value }}))
        .then((query) => data.features = query)
        .then(() => client.setex(productRedisKey, 3600, JSON.stringify(data)))
        .then(() => res.json(data))
        .catch((err) => console.error(err))
    }
  })
}

module.exports.stylesQuery = (param, res) => {
  const stylesRedisKey = `user:style:${param}`;
  client.get(stylesRedisKey, (err, style) => {
    if (style) {
      res.json(JSON.parse(style))
    } else {
      db('styles').where('productId', param).leftJoin('photos', 'styles.id', '=', 'photos.styleId')
        .leftJoin('skus', 'styles.id', '=', 'skus.styleId')
        .then((query) => reduceStyles(query, param))
        .then((parsed) => {
          client.setex(stylesRedisKey, 3600, JSON.stringify(parsed));
          return parsed;
        })
        .then((parsed) => res.json(parsed))
        .catch((err) => console.error(err))
    }
  })
}

module.exports.relatedQuery = (param, res) => {
  const relatedRedisKey = `user:related:${param}`;
  client.get(relatedRedisKey, (err, related) => {
    if (related) {
      res.json(JSON.parse(related))
    } else {
      db('related').where('current_product_id', param)
        .then((query) => query.map((row) => row.related_product_id))
        .then((relArr) => {
          client.setex(relatedRedisKey, 3600, JSON.stringify(relArr));
          return relArr;
        })
        .then((relArr) => res.json(relArr))
        .catch((err) => console.error(err))
    }
  })
}

const reduceStyles = (data, id) => {
  const parsedData = data.reduce((acc, el) => {
    if (acc[el.styleId]) {
      if (!acc[el.styleId].photos.map((photo) => photo.url).includes(el.url)) {
        acc[el.styleId].photos.push({thumbnail_url: el.thumbnail_url, url: el.url})
      }
      acc[el.styleId].skus[el.size] = el.quantity;
    } else {
        Object.assign(acc, {[el.styleId]: {
          style_id: el.styleId,
          name: el.name, 
          sale_price: el.sale_price, 
          origonal_price: el.origonal_price, 
          default_style: el.default_style
          }})
        acc[el.styleId].photos = [{thumbnail_url: el.thumbnail_url, url: el.url}]
        acc[el.styleId].skus = {[el.size]: el.id}
      }
      return acc;
  }, {})

  return {product_id: id, results: Object.values(parsedData)}
}