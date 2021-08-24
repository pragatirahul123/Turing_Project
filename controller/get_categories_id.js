var knex = require('../database_connection/config')

    module.exports.read_data_categories_id = (req,res)=>{

            knex()
            .select('*').from('category')
                .where("category_id", req.params.category_id)
        
                .then((data) => {
                    console.log(data);
                    res.send(data)
                })
                .catch((err) => {
                    console.log(err);
                    res.json({ "message": err})
                });

            }
