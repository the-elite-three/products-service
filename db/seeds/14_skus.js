const dataSeven = require('../../data/skusSeven.json');
const dataEight = require('../../data/skusEight.json');
const dataNine = require('../../data/skusNine.json');

exports.seed = knex => knex.batchInsert('skus', dataSeven, 1000)
  .then(() => knex.batchInsert('skus', dataEight, 1000))
  .then(() => knex.batchInsert('skus', dataNine, 1000))