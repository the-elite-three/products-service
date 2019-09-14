const data = require('../../data/features.json')
 
exports.seed = function(knex, Promise) {
  return knex('features').insert(data)
};