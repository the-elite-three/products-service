const seedFile = require('knex-seed-file');
 
exports.seed = function(knex) {
  knex('styles').del()
    .then(() => seedFile(knex, '/Users/johnconnelly/workspace/project-green/products-service/data/styles.csv', 'styles',
    {
      columnSeparator: ',',
      ignoreFirstLine: true,
      mapTo: ['id', 'productId', 'name', 'sale_price', 'origonal_price', 'default_style']
    }));
};