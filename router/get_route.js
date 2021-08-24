var express = require('express')
var Router = express.Router()

var get_controller_api = require ('../controller/get_data')

Router.get("/",get_controller_api.read_data)


module.exports = Router 




