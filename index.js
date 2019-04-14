'use strict'

const app = require('./app')
const keys = require('./keys')

app.listen(keys.port, (error, response) => {
  if (error) {
    throw error
  } else {
    console.log('server on port ' + keys.port)
    require('./database/connection')
  }
})
