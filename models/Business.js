const mongoose = require('mongoose')
const Schema = mongoose.Schema

const businessSchema = new Schema({
    business_id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    postalCode: {
        type: Number,
        required: true
    },
    stars: {
        type: Number,
        required: true
    },
    review_count: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Business', businessSchema)