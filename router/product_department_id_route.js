
var express = require('express')
var Router = express.Router()

var get_controller_api = require ('../controller/product_department_id')

Router.get("/:department_id", get_controller_api.product_department_id)


module.exports = Router 







