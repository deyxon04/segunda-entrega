'use strict'
const Schema = require('mongoose').Schema
const mongoose = require('mongoose')

const Curso = new Schema({
  nombrecurso: { type: String, required: true },
  idcurso: { type: Number, required: true },
  descripcion: { type: String, required: true },
  valor: { type: Number, required: true },
  modalidad: { type: String, required: true },
  intensidad: { type: Number, required: true },
  estado: { type: String, default:"disponible"}
})

module.exports = mongoose.model('curso', Curso)
