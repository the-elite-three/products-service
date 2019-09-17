const dataThirteen = require('../../data/photosThirteen.json');
const dataFourteen = require('../../data/photosFourteen.json');

exports.seed = knex => knex.batchInsert('photos', dataThirteen, 1000)
  .then(() => knex.batchInsert('photos', dataFourteen, 1000))
  .catch((e) => console.error(e));