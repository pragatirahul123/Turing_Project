var express = require('express')
var Router = express.Router()

var get_controller_api = require ('../controller/categories_deparment_id')

Router.get('/:department_id', get_controller_api.read_data_categories_department)


module.exports = Router