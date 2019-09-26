require('newrelic')
const express = require('express');

const app = express();

const products = require('./routes');

app.listen(3001, () => console.log('listening on port 3001'));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); 
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/products', products);