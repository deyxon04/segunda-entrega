'use strict'

const Curso = require('../../models/curso')

function agregarCurso (req, res) {
  Curso.findOne({ idcurso: req.body.idcurso }, (error, curso) => {
    if (error) {
      res.status(500).send(error)
    } else {
      if (curso) {
        res.status(200).send({ message: 'Este curso ya existe' })
      } else {
        const cursoStore = new Curso({
          nombrecurso: req.body.nombrecurso,
          idcurso: parseInt(req.body.idcurso),
          valor: parseInt(req.body.valor),
          descripcion: req.body.descripcion,
          modalidad: req.body.modalidad,
          intensidad: parseInt(req.body.intensidad),
          estado: req.body.estado
        })
        cursoStore.save(cursoStore, (error, cursoStored) => {
          if (error) {
            res.status(500).send(error)
          } else {
            res.status(200).send({ message: 'Curso guardado exitosamente' })
          }
        })
      }
    }
  })
}

module.exports = { agregarCurso }
