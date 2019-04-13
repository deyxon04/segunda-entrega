'use strict '

const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')

const userRouter = require('./routes/user.router')
const cursoRouter = require('./routes/curso.router')
const matriculaRouter = require('./routes/matricula.router')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(morgan('dev'))

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method'
  )
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE')
  next()
})

app.use('/api', userRouter)
app.use('/api', cursoRouter)
app.use('/api', matriculaRouter)



module.exports = app
