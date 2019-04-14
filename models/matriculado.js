'use strict'
const Schema = require('mongoose').Schema
const mongoose = require('mongoose')

const CursoMatriculado = new Schema({
  documento: { type: String, required: true },
  nombre: { type: String, required: true },
  correo: { type: String, required: true },
  curso: { type: Array, required: true },
})

module.exports = mongoose.model('matriculado', CursoMatriculado)

