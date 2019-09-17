const data = require('../../data/product.json')
 
exports.seed = knex => knex('products').del() 
  .then(() => knex.batchInsert('products', data, 1000)) 
  .catch((e) => console.error(e))
