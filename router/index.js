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

var calling_api_get = require('./categories_product_id_route')
router.use("/productid",calling_api_get)

var calling_api_get = require('./categories_department_id_route')
router.use("/departmentid",calling_api_get)

var calling_api_get = require('./get_attribute_route')
router.use("/attribute",calling_api_get)

var calling_api_get = require('./attribute_id_route')
router.use("/attributeid",calling_api_get)

var calling_api_get = require('./attribute_value_route')
router.use("/attributevalue",calling_api_get)

var calling_api_get = require('./attribute_product_id_route')
router.use("/attributeproduct",calling_api_get)

var calling_api_get = require('./get_product_route')
router.use("/getproduct",calling_api_get)

var calling_api_get = require('./product_search_route')
router.use("/productsearch",calling_api_get)

var calling_api_get = require('./product_id_route')
router.use("/getproductid",calling_api_get)

var calling_api_get = require('./product_categories_id_route')
router.use("/productcategoriesid",calling_api_get)

var calling_api_get = require('./product_department_id_route')
router.use("/productdepartment",calling_api_get)

var calling_api_get = require('./product_id_details_route')
router.use("/productiddetails",calling_api_get)




module.exports = router

