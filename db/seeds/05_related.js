const seedFile = require('knex-seed-file');
 
exports.seed = function(knex) {
  knex('related').del()
    .then(() => seedFile(knex, '/Users/johnconnelly/workspace/project-green/products-service/data/related.csv', 'related',
    {
      columnSeparator: ',',
      ignoreFirstLine: true,
      mapTo: ['id', 'current_product_id', 'related_product_id']
    }));
};