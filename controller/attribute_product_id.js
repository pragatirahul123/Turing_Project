var knex = require('../database_connection/config')

    module.exports.read_attribute_product_id = (req,res)=>{

        // var products = req.params.product_id

            knex("attribute")
            .select("attribute_value.attribute_value_id","name","value")
            
            .join("attribute_value","attribute.attribute_id","=","attribute_value.attribute_id")
            .join("product_attribute","attribute_value.attribute_value_id", "=", "product_attribute.attribute_value_id")

            
            


                
        
            .then((data) => {
                console.log(data);
                res.send(data)
                })
            .catch((err) => {
                console.log(err);
                res.json({ "message": err})
                })

            }

            
