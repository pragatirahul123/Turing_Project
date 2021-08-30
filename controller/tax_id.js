var knex = require('../database_connection/config')

    module.exports.tax_id = (req,res)=>{

            knex()
            .select('*').from('tax')
                .where("tax_id", req.params.tax_id)
        
                .then((data) => {
                    console.log(data);
                    res.send(data)
                })
                .catch((err) => {
                    console.log(err);
                    res.json({ "message": err})
                });

            }

