const path = require('path')
const express = require('express')
require('dotenv').config()
const colors = require('colors')
const morgan = require('morgan')
const connectDB = require('./config/db')


connectDB()

const transactions = require('./routes/transactions')

const app = express() 

app.use(express.json())

if(process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

app.use('/api/v1/transactions', transactions)

//production build
if(process.env.NODE_ENV === 'production') {
  const root = path.join(__dirname, '../client', 'build')

  app.use(express.static(root))

  app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, '../client', 'build', 'index.html')))
  console.log(path.resolve())
}

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold))