const seedFile = require('knex-seed-file');
const knex = require('../knex');
 
exports.seed = function(knex, Promise) {
  knex('photos').del()
    .then(() => seedFile(knex, '/Users/johnconnelly/workspace/project-green/products-service/data/photos.csv', 'photos',
    {
      columnSeparator: ',',
      ignoreFirstLine: true,
      mapTo: ['id', 'styleId', 'url', 'thumbnail_url']
    }));
};
