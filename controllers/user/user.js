'use strict'

const User = require('../../models/user')

async function login (req, res) {
  const user = await User.findOne({ documento: req.body.document })
  try {
    if (user != null) {
      res.status(200).send({ user: user })
    } else {
      res.status(404).send({ message: 'usuario no encontrado' })
    }
  } catch (error) {
    res.status(500).send(error)
  }
}
async function addUser (req, res) {
  const response = await User.findOne({ documento: req.body.document })
  try {
    if (response == null) {
      const user = new User({
        documento: parseInt(req.body.documento),
        nombre: req.body.nombre,
        correo: req.body.correo,
        telefono: parseInt(req.body.telefono),
        rol: 'aspirante'
      })
      user.save(user, (error, response) => {
        if (response) {
          if (!response) {
            res.status(500).send({ message: 'Usuario no creado' })
          } else {
            res.status(200).send({ message: 'Usuario creado' })
          }
        } else {
          res.status(500).send({ message: error })
        }
      })
    } else {
      res.status(500).send({ message: 'Este usuario ya existe' })
    }
  } catch (error) {
    res.status(500).send({ message: error })
  }
}

module.exports = {
  login,
  addUser
}
