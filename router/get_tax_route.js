var express = require('express')
var Router = express.Router()

var get_controller_api = require ('../controller/get_tax')

Router.get("/",get_controller_api.get_tax )


module.exports = Router 