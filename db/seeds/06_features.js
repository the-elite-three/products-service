const seeder = require('knex-csv-seeder').default

exports.seed = seeder({
  table: 'features',
  file: '/Users/johnconnelly/workspace/project-green/products-service/data/features.csv',
  recordsPerQuery: 100,
  encoding: 'utf8',
  parser: {
    delimiter: ',',
    quote: '"'
  }
});