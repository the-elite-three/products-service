const dataSeven = require('../../data/photosSeven.json');
const dataEight = require('../../data/photosEight.json');

exports.seed = knex => knex.batchInsert('photos', dataSeven, 1000)
  .then(() => knex.batchInsert('photos', dataEight, 1000))
  .catch((e) => console.error(e));