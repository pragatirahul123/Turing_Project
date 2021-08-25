var express = require('express')
var Router = express.Router()

var get_controller_api = require ('../controller/get_product')

Router.get("/",get_controller_api.get_product)


module.exports = Router 