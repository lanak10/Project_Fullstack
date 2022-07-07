const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')
const saltRounds = 10

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastInitial: {
        type: String,
        required: true
    },
    review_count: {
        type: Number
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: true
    },
    password: {
        type: String,
        trim: true,
        minlength: 3,
        maxlength: 255,
        required: true
    },
    image: String,

}, {
    toJSON: {
        transform: function (doc, ret) {
            delete ret.password
            return ret
        }
    }
})

userSchema.pre('save', async function (next) {
    this.password = await bcrypt.hash(this.password, saltRounds)
    return next()
})

module.exports = mongoose.model('User', userSchema)