const express = require('express');

const app = express();

const products = require('routes.js');

app.listen(3001, () => console.log('listening on port 3001'));

app.use('/products', products);