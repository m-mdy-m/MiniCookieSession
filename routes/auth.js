const express = require('express')
const routes = express.Router()
const authControllers = require('../controllers/auth')
const router = require('./home')
routes.get("/login",authControllers.getLogin)

routes.post('/login',authControllers.postLogin )
router.post('/logout', authControllers.postLogout)
module.exports = routes