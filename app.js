require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')

const PORT = process.env.PORT
const API_KEY = process.env.API_KEY
const GPT_URI = 'https://api.openai.com/v1/chat/completions'

// Initialization of express app
const app = express()
app.use(express.json())

// This is to parse JSON bodies
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('App is working!')
})

app.post('/completions', async (req, res) => {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${API_KEY}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            model: 'gpt-3.5-turbo',
            messages: [
                {
                    role: 'user',
                    content: req.body.message
                }
            ],
            max_tokens: 100
        })
    }

    try {
        const response = await fetch(GPT_URI, requestOptions)
        const data = await response.json()
        res.send(data)   
    } catch (error) {
        console.error(error)
    }

})

app.listen(PORT, () => {
    console.log(`App is running on PORT http://localhost:${PORT}`)
})