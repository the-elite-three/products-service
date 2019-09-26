require('dotenv').config({path: './.env'});

const options = {
  development: {
      client: 'pg',
      connection: `postgres://johnconnelly:${process.env.DBPW}@localhost:5432/products`,
      pool: {
        min: 2,
        max: 100
      },
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
      connection: `${process.env.DATABASE_URL}`,
      pool: {
        min: 2,
        max: 100
      },
      migrations: {
          directory: __dirname + '/db/migrations',
        },
      seeds: {
          directory: __dirname + '/db/seeds',
        },
    },
};

module.exports = options;