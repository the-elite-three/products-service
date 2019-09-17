const db = require('../db/knex');

module.exports.listQuery = (param, res) => {

}

module.exports.productQuery = (param, res) => {
  db('products').where('id', param)
    .then((query) => res.json(query))
}

module.exports.stylesQuery = (param, res) => {

}

module.exports.relatedQuery = (param, res) => {

}