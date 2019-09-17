const dataOne = require('../../data/photosOne.json');
const dataTwo = require('../../data/photosTwo.json');


 
exports.seed = knex => knex('photos').del() 
  .then(() => knex.batchInsert('photos', dataOne, 1000)
  .then(() => knex.batchInsert('photos', dataTwo, 1000)))
  .catch((e) => console.error(e))