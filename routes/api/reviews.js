const express = require('express')
const router = express.Router()
const reviewsCtrl = require('../../controllers/api/reviews')

// GET /api/v1/reviews
router.get('/', reviewsCtrl.index)

module.exports = router