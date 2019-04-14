'use strict'
const Schema = require('mongoose').Schema
const mongoose = require('mongoose')

const CursoMatriculado = new Schema({
  documento: { type: Number, required: true },
  nombre: { type: String, required: true },
  correo: { type: String, required: true },
  curso: { type: Array, required: true },
  idcurso: { type: String, required: true }
})

module.exports = mongoose.model('matriculado', CursoMatriculado)

