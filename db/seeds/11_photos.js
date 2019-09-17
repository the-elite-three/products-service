const dataEleven = require('../../data/photosEleven.json');
const dataTwelve = require('../../data/photosTwelve.json');

exports.seed = knex => knex.batchInsert('photos', dataEleven, 1000)
  .then(() => knex.batchInsert('photos', dataTwelve, 1000))
  .catch((e) => console.error(e));