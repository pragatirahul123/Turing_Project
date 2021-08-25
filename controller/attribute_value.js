var knex = require('../database_connection/config')

    module.exports.read_data_attribute_value = (req,res)=>{

    

            knex()
            .select(
                'attribute_value_id',
                'value'

            ).
            from('attribute')
            .join('attribute_value',function(){
                    this.on('attribute.attribute_id','attribute_value.attribute_id')

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