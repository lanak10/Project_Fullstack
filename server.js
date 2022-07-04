// Imports
const express = require('express')
const app = express()
require('dotenv').config()
require('./config/database')

// ===== ROUTES =====

// Reviews
app.use('/api/v1/reviews', require('./routes/api/reviews.js'))

// PORT
const PORT = 8080

app.listen(PORT, () => console.log(`Express app running on port ${PORT}`))