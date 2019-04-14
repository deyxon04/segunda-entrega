'use strict'

const Matricula = require('../../models/matriculado')

function addMatricula (req, res) {
  Matricula.findOne({ documento: req.body.documento }, (error, response) => {
    if (error) {
      res.status(400).send(error)
    } else {
      if (response != null) {
        res
          .status(200)
          .send({ message: 'No puedes matricular este curso nuevamente' })
      } else {
        const matricula = new Matricula({
          documento: parseInt(req.body.documento),
          nombre: req.body.nombre,
          correo: req.body.correo,
          curso: req.body.curso
        })
        matricula.save(matricula, (error, response) => {
          if (response != null) {
            res.status(200).send({ message: 'curso matriculado' })
          } else {
            res.status(200).send({ error: error })
          }
        })
      }
    }
  })
}


function getCursosMatriculados(req,res){
  Matricula.find()

}

module.exports = {
  addMatricula
}
