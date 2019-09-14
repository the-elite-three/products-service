const seeder = require('knex-csv-seeder').default

exports.seed = seeder({
  table: 'related',
  file: '/Users/johnconnelly/workspace/project-green/products-service/data/related.csv',
  recordsPerQuery: 100,
  encoding: 'utf8',
  parser: {
    delimiter: ',',
    quote: '"'
  }
});