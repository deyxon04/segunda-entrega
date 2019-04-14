'use strict'
const Schema = require('mongoose').Schema
const mongoose = require('mongoose')

const User = new Schema({
  documento: { type: Number, required: true },
  nombre: { type: String, required: true },
  correo: { type: String, required: true },
  telefono: { type: Number, required: true },
  rol: { type: String,  default:'aspirante'}
})

module.exports = mongoose.model('User', User)
