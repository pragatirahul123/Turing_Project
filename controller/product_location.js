var knex = require('../database_connection/config')

    module.exports.product_id_location= (req,res)=>{
        var product_id = req.params.product_id

            knex()
            .select(
                'category.category_id',
                'category.name as category_name',
                'category.department_id',
                'departments.name as department_name'
                
            )
            .from('product')
            .join("product_category", function(){
                this.on('product.product_id','product_category.product_id')
            })


            .join('category',function(){
                this.on('product_category.category_id','category.category_id')

            })
            .join('departments',function(){
                this.on('category.department_id','departments.department_id')
            })
            .where('product.product_id',product_id)
            .then((data)=>{
                res.send(data)
                console.log(data)

            }).catch((err)=>{
                console.log(err)
            })
        
        }