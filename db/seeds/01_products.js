const data = require('../../data/product.json')
 
exports.seed = function(knex, Promise) {
  console.log(data[0])
  return knex('products').insert(data)
};
