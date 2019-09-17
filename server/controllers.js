const db = require('../db/knex');

module.exports.listQuery = (res, page = 1, count = 5) => {
  console.log('query', page, count)
  const range = [page === 1 ? 1 : (page - 1) * count, page * count]
  db('products').whereBetween('id', range)
    .then((query) => res.json(query))
}

module.exports.productQuery = (param, res) => {
  db('products').where('id', param)
    .then((query) => res.json(query))
}

module.exports.stylesQuery = (param, res) => {
  db('styles').where('productId', param)
    .then((query) => res.json(query))
}

module.exports.relatedQuery = (param, res) => {
  db('related').where('current_product_id', param)
    .then((query) => query.map((row) => row.related_product_id))
    .then((relArr) => res.json(relArr))
}