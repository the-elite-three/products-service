const dataOne = require('../../data/skusOne.json');
const dataTwo = require('../../data/skusTwo.json');
const dataThree = require('../../data/skusThree.json');

exports.seed = knex => knex('skus').del() 
  .then(() => knex.batchInsert('skus', dataOne, 1000)
  .then(() => knex.batchInsert('skus', dataTwo, 1000))
  .then(() => knex.batchInsert('skus', dataThree, 1000)))
  .catch((e) => console.error(e))
