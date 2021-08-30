var knex = require('../database_connection/config')

    module.exports.shipping_regions_id = (req,res)=>{

            knex()
            .select(
                'shipping_id',
                'shipping_type',
                'shipping_cost',
                'shipping_region_id'
            )
            .from('shipping')
                .where("shipping_id", req.params.shipping_id)
        
                .then((data) => {
                    console.log(data);
                    res.send(data)
                })
                .catch((err) => {
                    console.log(err);
                    res.json({ "message": err})
                });

            }