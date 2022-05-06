const mongoose = require('mongoose')

const feedbackSchema = mongoose.Schema({
  rating: {
    type: Number,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
})

module.exports = mongoose.model('Feedback', feedbackSchema)
