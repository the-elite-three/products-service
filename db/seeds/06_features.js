const seedFile = require('knex-seed-file');
 
exports.seed = function(knex) {
  knex('features').del()
    .then(() => seedFile(knex, '/Users/johnconnelly/Documents/SDC_data/features.csv', 'features',
    {
      columnSeparator: ',',
      ignoreFirstLine: true,
      mapTo: ['id', 'product_id', 'feature', 'value']
    }));
};