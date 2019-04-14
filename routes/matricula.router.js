'use strict'

const router = require('express').Router()
const matriculaController = require('../controllers/matricula/matricula')

router.post('/addmatricula',matriculaController.addMatricula)
router.get('/getmatriculas/:documento',matriculaController.getMatriculaByDocument)
router.delete('/deleteMatricula/:idcurso',matriculaController.removeCursoMatriculado)


module.exports = router