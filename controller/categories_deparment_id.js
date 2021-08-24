var knex = require('../database_connection/config')

    module.exports.read_data_categories_department = (req,res)=>{

        var department_id = req.params.department_id

            knex()
            .select(
                'category_id',
                'name',
                'description',
                'department_id'

            ).
            from('category')
            .where('department_id',department_id)


                
        
            .then((data) => {
                console.log(data);
                res.send(data)
                })
            .catch((err) => {
                console.log(err);
                res.json({ "message": err})
                })

            }
