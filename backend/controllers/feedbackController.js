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

// Delete a feedback
const deleteFeedback = async (request, response) => {
  await Feedback.deleteOne({ _id: request.params.id })
  response.json({ message: 'feedback deleted' })
}

// Update a feedback
const updateFeedback = async (request, response) => {
  const updFeedback = await Feedback.findByIdAndUpdate(
    request.params.id,
    request.body,
    { new: true }
  )

  response.json(updFeedback)
}

module.exports = {
  createFeedback,
  getFeedbacks,
  deleteFeedback,
  updateFeedback,
}
