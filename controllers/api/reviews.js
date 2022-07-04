const Review = require('../../models/Review')

const index = async (req, res) => {
    try {
        const reviews = await Review.find({})
        res.status(200).json(reviews)
    } catch(e) {
        res.status(400).json({msg: e.message})
    }
}

module.exports = {
    index
}