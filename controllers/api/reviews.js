const Review = require('../../models/Review')

// Index page, find all reviews
const index = async (req, res) => {
    try {
        const reviews = await Review.find({})
        res.status(200).json(reviews)
    } catch(e) {
        res.status(400).json({msg: e.message})
    }
}

// Create a review
const create = async (req, res) => {
    try {
        const createdReview = await Review.create(req.body)
        res.status(200).json(createdReview)
    } catch(e){
        res.status(400).json({msg: e.message})
    }
}

// Update a review
const update = async (req, res) => {
    try {
        const updatedReview = await Review.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.status(200).json(updatedReview)
    } catch(e){
        res.status(400).json({msg: e.message})
    }
}

// Delete a review
const remove =  async (req, res) => {
    try {
        const deletedReview = await Review.findByIdAndDelete(req.params.id)
        res.status(200).json(deletedReview)
    } catch(e) {
        res.status(400).json({msg: e.message})
    }
}

module.exports = {
    index,
    create,
    update,
    remove
}