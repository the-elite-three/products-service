const express = require('express');
const router = express.Router()

const { listQuery, productQuery, stylesQuery, relatedQuery} = require('./controllers')

router.get('/list', (req, res) => {
  listQuery(param, res)
})

router.get('/:product_id', (req, res) => {
  productQuery(param, res)
})

router.get('/:product_id/related', (req, res) => {
  stylesQuery(param, res)
})

router.get('/:product_id/styles', (req, res) => {
  relatedQuery(param, res)
})

module.exports = router;