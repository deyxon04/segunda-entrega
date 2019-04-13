'use strict'

const Matricula = require('../../models/matriculado')

function addMatricula(req, res) {  
  console.log(req.body.curso.idcurso);

  Matricula.findOne({ curso: req.body.curso.idcurso}, (error, response) => {
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
          curso: req.body.curso.idcurso
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

module.exports = {
  addMatricula
}
