const data = require('../../data/styles.json')
 
exports.seed = function(knex, Promise) {
  return knex('styles').insert(data)
};

