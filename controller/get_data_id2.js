var knex = require('../database_connection/config')

    module.exports.read_data_id = (req,res)=>{

            knex()
            .select('*').from('departments')
                .where("department_id", req.params.department_id)
        
                .then((data) => {
                    console.log(data);
                    res.send(data)
                })
                .catch((err) => {
                    console.log(err);
                    res.json({ "message": err})
                });

            }
