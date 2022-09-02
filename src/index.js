require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const helmet = require('helmet')
const morgan = require('morgan')

const routes = require('./core/routes/routes')

const app = express()

const mongoBaseUrl = process.env.DATABASE_URL

mongoose.connect(mongoBaseUrl)
const database = mongoose.connection

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

app.use(helmet())
app.use(bodyParser.json())
app.use(cors())
app.use(morgan('combined'))

app.use('/api/gateway', routes)

app.listen(3002, () => {
    console.log('Listening on port 3002')
})