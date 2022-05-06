const Feedback = require('../models/feedbackModel')

// Create a feedback
const createFeedback = async (request, response) => {
  const newFeedback = await Feedback.create(request.body)

  response.json(newFeedback)
}

// Get all feedbacks
const getFeedbacks = async (request, response) => {
  const feedbacks = await Feedback.find({})
  response.json(feedbacks)
}

module.exports = {
  createFeedback,
  getFeedbacks,
}
