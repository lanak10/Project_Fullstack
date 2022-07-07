const express = require('express')
const router = express.Router()
const reviewsCtrl = require('../../controllers/api/reviews')

// Endpoint from Yelp API /businesses/{id}/reviews

// GET /api/v1/reviews
router.get('/', reviewsCtrl.index)
// POST /api/v1/reviews
router.post('/', reviewsCtrl.create)
// PUT /api/v1/reviews/:id
router.put('/:id', reviewsCtrl.update)
// DELETE /api/v1/reviews/:id
router.delete('/:id', reviewsCtrl.remove)

module.exports = router