const express = require('express')
const router = express.Router()
const {
  createFeedback,
  getFeedbacks,
  deleteFeedback,
  updateFeedback,
} = require('../controllers/feedbackController')

router.get('/', getFeedbacks)

router.post('/', createFeedback)

router.delete('/:id', deleteFeedback)

router.put('/:id', updateFeedback)

module.exports = router
