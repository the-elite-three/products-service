const dataTen = require('../../data/skusTen.json');
const dataEleven = require('../../data/skusEleven.json');
const dataTwelve = require('../../data/skusTwelve.json');

exports.seed = knex => knex.batchInsert('skus', dataTen, 1000)
  .then(() => knex.batchInsert('skus', dataEleven, 1000))
  .then(() => knex.batchInsert('skus', dataTwelve, 1000))