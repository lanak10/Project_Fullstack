const mongoose = require('mongoose')
const Schema = mongoose.Schema

const reviewSchema = new Schema({
    review_id: {
        type: String,
        required: true
    },
    user_id: {
        type: String,
        required: true
    },
    business_id: {
        type: String,
        required: true
    },
    stars: {
        type: Number,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Review', reviewSchema)