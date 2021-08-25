var knex = require('../database_connection/config')

    module.exports.read_data_attribute_id = (req,res)=>{

            knex()
            .select('*').from('attribute')
                .where("attribute_id", req.params.attribute_id)
        
                .then((data) => {
                    console.log(data);
                    res.send(data)
                })
                .catch((err) => {
                    console.log(err);
                    res.json({ "message": err})
                });

            }

