const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const dotenv = require('dotenv')
const {
    readdirSync
} = require('fs')

const app = express()

// Middleware
app.use(morgan('dev'))
app.use(bodyParser.json({
    limit: '20mb'
}))
app.use(cors())


// Route
// #1
// app.use('/api', require('./routes/api'))
//  #2
readdirSync('./routes').map((r) => app.use('/api', require('./routes/' + r)))

const port = '3000'
app.listen(port, () => {
    console.log('server is running port : ' + port)
})