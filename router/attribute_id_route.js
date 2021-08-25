var express = require('express')
var Router = express.Router()

var get_controller_api = require ('../controller/attribute_id')

Router.get("/:attribute_id", get_controller_api.read_data_attribute_id)


module.exports = Router 