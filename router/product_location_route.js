var express = require("express")
var Router = express.Router()

var get_controller_api = require ('../controller/product_location')

Router.get("/:product_id", get_controller_api.product_id_location)


module.exports = Router 



