const express = require('express');
const routes = express.Router();
const userController = require ('./controller/userController');
const sessionController = require ('./controller/sessionController');

routes.get('/users',userController.index)
routes.post('/users', userController.create)

routes.post('/session',sessionController.create)

module.exports = routes;
