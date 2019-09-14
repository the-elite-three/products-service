const seedFile = require('knex-seed-file');
const knex = require('../knex');
 
exports.seed = function(knex, Promise) {
  knex('skus').del()
    .then(() => seedFile(knex, '/Users/johnconnelly/workspace/project-green/products-service/data/skus.csv', 'skus',
    {
      columnSeparator: ',',
      ignoreFirstLine: true,
      mapTo: ['id', 'styleId', 'size', 'quantity']
    }));
};
