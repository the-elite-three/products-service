const express = require('express');
const router = express.Router()

const { listQuery, productQuery, stylesQuery, relatedQuery} = require('./controllers')

// router.get('/list', (req, res) => {
//   listQuery(res)
// })

router.get('/list/:page?/:count?', (req, res) => {
  listQuery(res, req.params.page, req.params.count)
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