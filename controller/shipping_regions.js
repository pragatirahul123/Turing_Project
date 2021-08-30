var knex = require('../database_connection/config')
module.exports.shipping_regions = (req,res)=>{
    knex.select('*').from('shipping_region')
    .then((data) => {
        console.log(data);
        res.send(data)
})
    .catch((err) => {
        console.log(err);
        res.json({ "message": err })
});

}