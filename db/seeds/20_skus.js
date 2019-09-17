const dataTwentyfive = require('../../data/skusTwentyfive.json');
const dataTwentysix = require('../../data/skusTwentysix.json');
const dataTwentyseven = require('../../data/skusTwentyseven.json');

exports.seed = knex => knex.batchInsert('skus', dataTwentyfive, 1000)
  .then(() => knex.batchInsert('skus', dataTwentysix, 1000))
  .then(() => knex.batchInsert('skus', dataTwentyseven, 1000))