const express = require('express');
const router = express.Router()

const { listQuery, productQuery, stylesQuery, relatedQuery} = require('./controllers')

router.get('/list', (req, res) => {
  listQuery(param, res)
})

router.get('/:product_id', (req, res) => {
  productQuery(req.params.product_id, res)
})

router.get('/:product_id/related', (req, res) => {
  relatedQuery(req.params.product_id, res)
})

router.get('/:product_id/styles', (req, res) => {
  stylesQuery(req.params.product_id, res)
})

module.exports = router;