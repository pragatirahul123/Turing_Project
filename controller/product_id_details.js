var knex = require('../database_connection/config')

    module.exports.product_id_details= (req,res)=>{

            knex()
            .select(
                'product_id',
                'name',
                'description',
                'price',
                'discounted_price',
                'image',
                'image_2'
            )
            .from('product')
                .where("product_id", req.params.product_id)
        
                .then((data) => {
                    console.log(data);
                    res.send(data)
                })
                .catch((err) => {
                    console.log(err);
                    res.json({ "message": err})
                });

            }