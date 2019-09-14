const seedFile = require('knex-seed-file');
 
exports.seed = function(knex) {
  knex('products').del()
    .then(() => seedFile(knex, '/Users/johnconnelly/Documents/SDC_data/product.csv', 'products',
    {
      columnSeparator: ',',
      ignoreFirstLine: true,
      mapTo: ['id', 'name', 'slogan', 'description', 'category', 'default_price']
    }));
};
