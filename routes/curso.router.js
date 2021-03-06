'use strict'

const router = require('express').Router()
const cursoController = require('../controllers/curso/cursos')

router.post('/addcurso', cursoController.agregarCurso)
router.get('/getcursos', cursoController.getCursos)
router.get('/getallcursos', cursoController.getAllCursos)
router.get('/getOne/:id', cursoController.getOneCurso)



module.exports = router