var express = require('express')
var Router = express.Router()

var get_controller_api = require ('../controller/get_attribute')

Router.get("/",get_controller_api.read_data_attribute)


module.exports = Router 