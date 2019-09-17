const data = require('../../data/related.json')
const dataOne = data.slice(0, 1000000);
const dataTwo = data.slice(1000000, 2000000);
const dataThree = data.slice(2000000, 3000000);
const dataFour = data.slice(3000000, 4000000);
const dataFive = data.slice(4000000);

exports.seed = knex => knex('related').del() 
  .then(() => knex.batchInsert('related', dataOne, 1000)
  .then(() => knex.batchInsert('related', dataTwo, 1000))
  .then(() => knex.batchInsert('related', dataThree, 1000))
  .then(() => knex.batchInsert('related', dataFour, 1000))
  .then(() => knex.batchInsert('related', dataFive, 1000)))
  .catch((e) => console.error(e))