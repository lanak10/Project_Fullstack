const express = require('express')
const router = express.Router()
const usersCtrl = require('../../controllers/api/users')

// POST /api/v1/users- create
router.post('/', usersCtrl.create)
// POST /api/v1/users/login- login
// router.post('/login', usersCtrl.login)
// GET /api/v1/users/:id- show
router.get('/:id', usersCtrl.show)
// PUT /api/v1/users/:id- update
router.put('/:id', usersCtrl.update)

module.exports = router