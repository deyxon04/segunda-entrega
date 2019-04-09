'use strict'

const router = require('express').Router()
const matriculaController = require('../controllers/matricula/matricula')

router.post('/addmatricula',matriculaController.addMatricula)


module.exports = router