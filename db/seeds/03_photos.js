

const seeder = require('knex-csv-seeder').default

exports.seed = seeder({
  table: 'photos',
  file: '/Users/johnconnelly/workspace/project-green/products-service/data/photos.csv',
  recordsPerQuery: 100,
  encoding: 'utf8',
  parser: {
    delimiter: ',',
    quote: '"'
  }
});