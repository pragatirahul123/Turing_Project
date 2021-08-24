var express = require('express')
var Router = express.Router()

var get_controller_api = require ('../controller/categories_product_id')

Router.get('/:product_id', get_controller_api.read_data_categories_product)


module.exports = Router 

