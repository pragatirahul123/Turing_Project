var knex = require('../database_connection/config')

    module.exports.read_data_categories_product = (req,res)=>{

        var product_id = req.params.product_id

            knex()
            .select(
                'category.category_id',
                'department_id',
                'name'
            ).
            from('category')
            .join('product_category',function(){
                    this.on('category.category_id','product_category.category_id')

                })
        
            .then((data) => {
                console.log(data);
                res.send(data)
                })
            .catch((err) => {
                console.log(err);
                res.json({ "message": err})
                })

            }



  
