const dataThirteen = require('../../data/skusThirteen.json');
const dataFourteen = require('../../data/skusFourteen.json');
const dataFifteen = require('../../data/skusFifteen.json');

exports.seed = knex => knex.batchInsert('skus', dataThirteen, 1000)
  .then(() => knex.batchInsert('skus', dataFourteen, 1000))
  .then(() => knex.batchInsert('skus', dataFifteen, 1000))