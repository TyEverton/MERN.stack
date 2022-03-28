const express = require('express')
const dotenv = require('dotenv').config()
// const port line below says to run the server on the .env port number, or port 5000 if the .env port is unavailable
const port = process.env.port || 5000
const { errorHandler } = require('./middleware/errorMiddleware')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(errorHandler)

app.use('/api/goals', require('./routes/goalRoutes'))

app.listen(port, () => console.log(`Server running on port ${port}`))
