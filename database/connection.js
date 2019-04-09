'use strict'

const mongoose = require('mongoose')
const keys = require('../keys')

mongoose.connect(keys.uri, {useNewUrlParser:true}).then(db=>{console.log('Db connected')}).catch(error=>{console.log(error)})