// Imports
const express = require('express')
const app = express()
require('dotenv').config()
require('./config/database')

// ===== MIDDLEWARES =====
app.use(express.json())

// Check if we have a token and create req.user
// app.use(require('./config/checkToken'))

// ===== ROUTES =====
// Businesses
app.use('/api/v1/businesses', require('./routes/api/businesses'))
// Reviews
app.use('/api/v1/reviews', require('./routes/api/reviews.js'))
// Users
app.use('/api/v1/users', require('./routes/api/users'))

// PORT
const PORT = 8080

app.listen(PORT, () => console.log(`Express app running on port ${PORT}`))