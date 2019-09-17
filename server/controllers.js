const db = require('../db/knex');

module.exports.listQuery = (param, res) => {

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