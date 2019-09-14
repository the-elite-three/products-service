const seedFile = require('knex-seed-file');
 
exports.seed = function(knex) {
  knex('features').del()
    .then(() => seedFile(knex, '/Users/johnconnelly/workspace/project-green/products-service/data/features.csv', 'features',
    {
      columnSeparator: ',',
      ignoreFirstLine: true,
      mapTo: ['id', 'product_id', 'feature', 'value']
    }));
};