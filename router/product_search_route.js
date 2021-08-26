var express = require('express')
var Router = express.Router()

var get_controller_api = require ('../controller/product_search')

Router.get('/:search', get_controller_api.get_search)


module.exports = Router 