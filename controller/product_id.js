var knex = require('../database_connection/config')

    module.exports.product_id = (req,res)=>{

            knex()
            .select('*').from('product')
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
