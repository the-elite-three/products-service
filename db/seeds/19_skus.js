const dataTwentytwo = require('../../data/skusTwentytwo.json');
const dataTwentythree = require('../../data/skusTwentythree.json');
const dataTwentyfour = require('../../data/skusTwentyfour.json');

exports.seed = knex => knex.batchInsert('skus', dataTwentytwo, 1000)
  .then(() => knex.batchInsert('skus', dataTwentythree, 1000))
  .then(() => knex.batchInsert('skus', dataTwentyfour, 1000))