const dataFour = require('../../data/skusFour.json');
const dataFive = require('../../data/skusFive.json');
const dataSix = require('../../data/skusSix.json');

exports.seed = knex => knex.batchInsert('skus', dataFour, 1000)
  .then(() => knex.batchInsert('skus', dataFive, 1000))
  .then(() => knex.batchInsert('skus', dataSix, 1000))