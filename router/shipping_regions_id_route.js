var express = require('express')
var Router = express.Router()

var get_controller_api = require ('../controller/shipping_regions_id')

Router.get('/:shipping_id', get_controller_api.shipping_regions_id)


module.exports = Router 