const dataFive = require('../../data/photosFive.json');
const dataSix = require('../../data/photosSix.json');

exports.seed = knex => knex.batchInsert('photos', dataFive, 1000)
  .then(() => knex.batchInsert('photos', dataSix, 1000))
  .catch((e) => console.error(e));