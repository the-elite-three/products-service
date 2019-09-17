const data = require('../../data/features.json')
const dataOne = data.slice(0, 1000000);
const dataTwo = data.slice(1000000, 2000000);
const dataThree = data.slice(2000000);
 
exports.seed = knex => knex('features').del() 
  .then(() => knex.batchInsert('features', dataOne, 1000)
  .then(() => knex.batchInsert('features', dataTwo, 1000))
  .then(() => knex.batchInsert('features', dataThree, 1000)))
  .catch((e) => console.error(e))