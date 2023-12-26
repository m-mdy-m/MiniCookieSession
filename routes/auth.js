const express = require('express')
const routes = express.Router()
const authControllers = require('../controllers/auth')
routes.get("/login",authControllers.getLogin)

routes.post('/login',authControllers.postLogin )
module.exports = routes