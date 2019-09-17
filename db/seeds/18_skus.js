const dataNineteen = require('../../data/skusNineteen.json');
const dataTwenty = require('../../data/skusTwenty.json');
const dataTwentyone = require('../../data/skusTwentyone.json');

exports.seed = knex => knex.batchInsert('skus', dataNineteen, 1000)
  .then(() => knex.batchInsert('skus', dataTwenty, 1000))
  .then(() => knex.batchInsert('skus', dataTwentyone, 1000))