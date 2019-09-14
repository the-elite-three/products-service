require('dotenv').config({path: './.env'});

const options = {
  development: {
      client: 'pg',
      connection: `postgres://johnconnelly:${DBPW}@localhost:5432/products`,
      migrations: {
          directory: __dirname + '/db/migrations',
        },
      seeds: {
          directory: __dirname + '/db/seeds',
        },
        useNullAsDefault: true
    },
  production: {
      client: 'pg',
      connection: process.env.DATABASE_URL,
      migrations: {
          directory: __dirname + '/db/migrations',
        },
      seeds: {
          directory: __dirname + '/db/seeds/production',
        },
    },
};

module.exports = options;