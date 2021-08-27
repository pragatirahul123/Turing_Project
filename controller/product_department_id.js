var knex = require('../database_connection/config')

module.exports.product_department_id = (req,res)=>{


    var department_id = req.params.department_id


    knex
    .select(
        "product.product_id",
        "product.name",
        "product.description",
        "product.price",
        "product.discounted_price",
        "product.thumbnail")
    .from('product')
    .join('product_category',function(){
        this.on('product.product_id','product_category.product_id')

    })
    

    .join('category',function(){
        this.on('product_category.category_id','category.category_id')
    })

    .join('departments',function(){
        this.on('category.department_id','departments.department_id')
    })

    .where('departments.department_id',department_id)
    .then((data)=>{
        res.send(data)
        console.log(data)

    }).catch((err)=>{
        console.log(err)
    })
    

    

}


