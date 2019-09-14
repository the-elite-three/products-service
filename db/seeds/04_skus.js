const data = require('../../data/skus.json')
 
exports.seed = function(knex, Promise) {
  return knex('skus').insert(data)
};
