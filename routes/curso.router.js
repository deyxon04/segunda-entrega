'use strict'

const router = require('express').Router()
const cursoController = require('../controllers/curso/cursos')

router.post('/addcurso',cursoController.agregarCurso)
router.get('/getcursos',cursoController.getCursos)
router.get('/getallcursos',cursoController.getAllCursos)
router.get('/getcursosDisponibles',cursoController.getCursosDisponibles)
router.get('/getcursosPorDocente',cursoController.getCursosPorDocente)
router.post('/cerrarcurso',cursoController.cerrarCurso)


module.exports = router