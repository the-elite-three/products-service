const seedFile = require('knex-seed-file');
 
exports.seed = function(knex) {
  knex('skus').del()
    .then(() => seedFile(knex, '/Users/johnconnelly/Documents/SDC_data/skus.csv', 'skus',
    {
      columnSeparator: ',',
      ignoreFirstLine: true,
      mapTo: ['id', 'styleId', 'size', 'quantity']
    }));
};
