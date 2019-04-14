'use strict'

const Curso = require('../../models/curso')
const User = require('../user/user')

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

//J
function getCursos (req, res) {
  buscarCursos(req,res)
}

//J
function getCursosDisponibles(req, res){
  buscarCursos(req,res,'disponible')
}

//J-9
function getCursosPorDocente(req,res){
  buscarCursos(req,res,'cerrado', req.params.docente)
}

function getAllCursos (req, res) {
  Curso.find({}, (error, response) => {
    if (error) {
      res.status(500).send(error)
    } else {
      res.status(200).send(response)
    }
  })
}

//J -6 HU
function cerrarCurso(req,res){
  Curso.findOneAndUpdate({idcurso:req.body.idcurso},{estado:'cerrado'},(error, response) => {
    if (error) {
      return res.status(500).send(error) 
  } else {
    addDocenteACurso(req,res,'docente')
    }
  })
}

//J -6HU
function addDocenteACurso(req,res,rol){
  User.getUserRandom(req,res,rol,function(resultado){
  var documentodocente = resultado.documento
  Curso.update({idcurso:req.body.idcurso},{$set: { docente: documentodocente}},{strict: false},(error, response) => {
    if (error) {
      return res.status(500).send(error)
    }else {
      return res.status(200).send(response)
    }
  })})}


 
//J-6HU-9HU
function buscarCursos(req, res, estado='disponible',docente=''){
  Curso.find({$or:[{estado: estado},{docente:docente}]}, (error, response) => {
    if (error) {
      return res.status(500).send(error)
  } else {
    return res.status(200).send(response)
  }
})
}



module.exports = { agregarCurso, getCursos ,getAllCursos,getCursosDisponibles,cerrarCurso,getCursosPorDocente}
