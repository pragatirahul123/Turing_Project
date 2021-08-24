var express = require('express')
var Router = express.Router()

var get_controller_api = require ('../controller/get_categories_id')

Router.get("/:category_id", get_controller_api.read_data_categories_id)


module.exports = Router 