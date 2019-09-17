const data = require('../../data/styles.json')

const dataOne = data.slice(0, 1000000);
const dataTwo = data.slice(1000000, 2000000);
const dataThree = data.slice(2000000, 3000000);
const dataFour = data.slice(3000000, 4000000);
const dataFive = data.slice(4000000);
 
exports.seed = knex => knex('styles').del() 
  .then(() => knex.batchInsert('styles', dataOne, 1000)
  .then(() => knex.batchInsert('styles', dataTwo, 1000))
  .then(() => knex.batchInsert('styles', dataThree, 1000))
  .then(() => knex.batchInsert('styles', dataFour, 1000))
  .then(() => knex.batchInsert('styles', dataFive, 1000)))
  .catch((e) => console.error(e))
