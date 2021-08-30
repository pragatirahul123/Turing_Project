var express = require('express')
var Router = express.Router()

var get_controller_api = require('../controller/shipping_regions')
Router.get("/",get_controller_api.shipping_regions)

module.exports = Router

