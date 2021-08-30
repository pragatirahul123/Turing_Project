var knex = require('../database_connection/config')
module.exports.get_tax = (req,res)=>{
    knex.select('*').from('tax')
    .then((data) => {
        console.log(data);
        res.send(data)
})
    .catch((err) => {
        console.log(err);
        res.json({ "message": err })
});

}
