var express = require('express')
var Router = express.Router()

var get_controller_api = require ('../controller/attribute_product_id')

Router.get("/", get_controller_api.read_attribute_product_id)


module.exports = Router 