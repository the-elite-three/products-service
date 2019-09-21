const db = require('../db/knex');

module.exports.listQuery = (res, page = 1, count = 5) => {
  console.log('query', page, count)
  const range = [page === 1 ? 1 : (page - 1) * count, page * count]
  db('products').whereBetween('id', range)
    .then((query) => res.json(query))
}

module.exports.productQuery = (param, res) => {
  let data = null;
  db('products').where('id', param)
    .then((query) => data = query[0])
    .then(() => db('features').where('product_id', param))
    .then((query) => query.map((row) => {return { feature: row.feature, value: row.value }}))
    .then((query) => data.features = query)
    .then(() => res.json(data))
}

module.exports.stylesQuery = (param, res) => {
  let data = null;
  db('styles').where('productId', param).leftJoin('photos', 'styles.id', '=', 'photos.styleId')
    .leftJoin('skus', 'styles.id', '=', 'skus.styleId')
    .then((query) => reduceStyles(query, param))
    .then((parsed) => res.json(parsed))
}

module.exports.relatedQuery = (param, res) => {
  db('related').where('current_product_id', param)
    .then((query) => query.map((row) => row.related_product_id))
    .then((relArr) => res.json(relArr))
}

const reduceStyles = (data, id) => {
  const parsedData = data.reduce((acc, el) => {
    if (acc[el.styleId]) {
      acc[el.styleId].photos.push({thumbnail_url: el.thumbnail_url, url: el.url})
      acc[el.styleId].skus.push({[el.size]: el.id})
    } else {
        Object.assign(acc, {[el.styleId]: {
          style_id: el.styleId,
          name: el.name, 
          sale_price: el.sale_price, 
          origonal_price: el.origonal_price, 
          default_style: el.default_style
          }})
        acc[el.styleId].photos = [{thumbnail_url: el.thumbnail_url, url: el.url}]
        acc[el.styleId].skus = [{[el.size]: el.id}]
      }
      return acc;
  }, {})

  return {product_id: id, results: Object.values(parsedData)}
}