var express = require('express')
var Router = express.Router()


var get_controller_api = require('../controller/tax_id')
Router.get("/:tax_id",get_controller_api.tax_id)


module.exports  = Router