var express = require('express')
var Router = express.Router()

var get_controller_api = require ('../controller/get_data_id2')

Router.get("/:department_id", get_controller_api.read_data_id)


module.exports = Router 

