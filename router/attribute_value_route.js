var express = require('express')
var Router = express.Router()

var get_controller_api = require ('../controller/attribute_value')

Router.get('/:attribute_value', get_controller_api.read_data_attribute_value)


module.exports = Router 