var knex = require('../database_connection/config')
module.exports.get_product = (req,res)=>{
    knex.select('*').from('product')
    .then((data) => {
    
    var fulldata ={
        count:data.length,
        rows:data
    }

        console.log(fulldata);
        res.send(fulldata)
    
})
    .catch((err) => {
        console.log(err);
        res.json({ "message": err })
});

}
