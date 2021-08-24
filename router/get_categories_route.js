var express = require('express')
var Router = express.Router()

var get_controller_api = require ('../controller/get_categories')

Router.get("/",get_controller_api.read_data_category)


module.exports = Router 
