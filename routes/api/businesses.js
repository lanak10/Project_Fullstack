const express = require('express')
const router = express.Router()
const businessCtrl = require('../../controllers/api/businesses')

// Endpoint from Yelp API /businesses/{id}

/* // GET /api/v1/business/:id- show
router.get('/', businessCtrl.index)
// POST /api/v1/business- create
router.post('/:id', businessCtrl.create)
// PUT /api/v1/business/:id- update
router.put('/:id', businessCtrl.update) */

module.exports = router