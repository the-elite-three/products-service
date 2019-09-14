const data = require('../../data/related.json')
 
exports.seed = function(knex, Promise) {
  return knex('related').insert(data)
};