var express = require('express')
var Router = express.Router()

var get_controller_api = require ('../controller/product_id')

Router.get("/:product_id", get_controller_api.product_id)


module.exports = Router 