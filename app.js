require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')

const PORT = process.env.PORT

// Initialization of express app
const app = express()

// This is to parse JSON bodies
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('App is working!')
})

app.post('/api/messages', (req, res) => {
    const { message } = req.body
    res.json({ message })
})

app.listen(PORT, () => {
    console.log(`App is running on PORT http://localhost:${PORT}`)
})