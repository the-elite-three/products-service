const dataNine = require('../../data/photosNine.json');
const dataTen = require('../../data/photosTen.json');

exports.seed = knex => knex.batchInsert('photos', dataNine, 1000)
  .then(() => knex.batchInsert('photos', dataTen, 1000))
  .catch((e) => console.error(e));