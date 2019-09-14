const seedFile = require('knex-seed-file');
const knex = require('../knex')
 
exports.seed = function(knex, Promise) {
  knex('products').del()
    .then(() => seedFile(knex, '/Users/johnconnelly/workspace/project-green/products-service/data/product.csv', 'products',
    {
      columnSeparator: ',',
      ignoreFirstLine: true,
      mapTo: ['id', 'name', 'slogan', 'description', 'category', 'default_price']
    }));
};
