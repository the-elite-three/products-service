#! /bin/bash
knex migrate:latest
knex seed:run --specific=01_products.js
knex seed:run --specific=02_styles.js
knex seed:run --specific=03_photos.js
knex seed:run --specific=04_photos.js
knex seed:run --specific=05_photos.js
knex seed:run --specific=06_photos.js
knex seed:run --specific=07_photos.js
knex seed:run --specific=08_photos.js
knex seed:run --specific=09_photos.js
knex seed:run --specific=10_skus.js
knex seed:run --specific=11_skus.js
knex seed:run --specific=12_skus.js
knex seed:run --specific=13_skus.js
knex seed:run --specific=14_skus.js
knex seed:run --specific=15_skus.js
knex seed:run --specific=16_skus.js
knex seed:run --specific=17_skus.js
knex seed:run --specific=18_skus.js
knex seed:run --specific=19_related.js
knex seed:run --specific=20_features.js