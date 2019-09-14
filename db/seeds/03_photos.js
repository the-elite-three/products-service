const data = require('../../data/photos.json')
 
exports.seed = function(knex, Promise) {
  return knex('photos').insert(data)
};