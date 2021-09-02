var express = require('express')
var Router = express.Router()

var get_controller_api = require ('../controller/customer_register')

Router.post("/", get_controller_api.customer_register)


module.exports = Router 










