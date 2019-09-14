const seedFile = require('knex-seed-file');
const knex = require('../knex')
 
exports.seed = function(knex, Promise) {
  knex('features').del()
    .then(() => seedFile(knex, '/Users/johnconnelly/workspace/project-green/products-service/data/features.csv', 'features',
    {
      columnSeparator: ',',
      ignoreFirstLine: true,
      mapTo: ['id', 'product_id', 'feature', 'value']
    }));
};