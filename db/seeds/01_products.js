
const seeder = require('knex-csv-seeder').default

exports.seed = seeder({
  table: 'products',
  file: '/Users/johnconnelly/Documents/SDC_data/product.csv',
  recordsPerQuery: 100,
  encoding: 'utf8',
  parser: {
    delimiter: ',',
    quote: '"',
    escape: '\\'
  }
});
