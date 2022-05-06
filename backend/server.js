require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000
const connectDB = require('./config/db')
const path = require('path')
const cors = require('cors')

connectDB()

app.use(cors())

// Body parser
app.use(express.json())

app.use('/api/feedbacks', require('./routes/feedback'))

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend/build')))

  app.use('*', (_, response) => {
    response.sendFile(path.join(__dirname, '../frontend/build/index.html'))
  })
} else {
  app.get('/', (_, response) => {
    response.send('Welcome to Feedback and suggestions API')
  })
}

app.listen(PORT, () => console.log(`Server running on ${PORT}`))
