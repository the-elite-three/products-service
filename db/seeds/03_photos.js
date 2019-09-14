const seedFile = require('knex-seed-file');
 
exports.seed = function(knex) {
  knex('photos').del()
    .then(() => seedFile(knex, '/Users/johnconnelly/workspace/project-green/products-service/data/photos.csv', 'photos',
    {
      columnSeparator: ',',
      ignoreFirstLine: true,
      mapTo: ['id', 'styleId', 'url', 'thumbnail_url']
    }));
};
