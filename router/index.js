var express =  require('express')
var router = express.Router()



var calling_api_get = require('./get_route')
router.use("/read",calling_api_get)


var calling_api_get = require('./get_data_id2_route')
router.use("/read_id",calling_api_get)


var calling_api_get = require('./get_categories_route')
router.use("/read_categories",calling_api_get)

var calling_api_get = require('./get_categories_id_route')
router.use("/categoryid",calling_api_get)



module.exports = router

