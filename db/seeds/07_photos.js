const dataThree = require('../../data/photosThree.json');
const dataFour = require('../../data/photosFour.json');

exports.seed = knex => knex.batchInsert('photos', dataThree, 1000)
  .then(() => knex.batchInsert('photos', dataFour, 1000))
  .catch((e) => console.error(e));