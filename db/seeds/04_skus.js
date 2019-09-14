const seeder = require('knex-csv-seeder').default

exports.seed = seeder({
  table: 'skus',
  file: '/Users/johnconnelly/Documents/SDC_data/skus.csv',
  recordsPerQuery: 100,
  encoding: 'utf8',
  parser: {
    delimiter: ',',
    quote: '"',
    escape: '\\'
  }
});
