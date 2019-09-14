
const seeder = require('knex-csv-seeder').default

exports.seed = seeder({
  table: 'styles',
  file: '/Users/johnconnelly/Documents/SDC_data/styles.csv',
  recordsPerQuery: 100,
  encoding: 'utf8',
  parser: {
    delimiter: ',',
    quote: '"',
    escape: '\\'
  }
});