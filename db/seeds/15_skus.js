const dataSixteen = require('../../data/skusSixteen.json');
const dataSeventeen = require('../../data/skusSeventeen.json');
const dataEighteen = require('../../data/skusEighteen.json');

exports.seed = knex => knex.batchInsert('skus', dataSixteen, 1000)
  .then(() => knex.batchInsert('skus', dataSeventeen, 1000))
  .then(() => knex.batchInsert('skus', dataEighteen, 1000))