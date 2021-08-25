var knex = require('../database_connection/config')
module.exports.read_data_attribute = (req,res)=>{
    knex.select('*').from('attribute')
    .then((data) => {
        console.log(data);
        res.send(data)
})
    .catch((err) => {
        console.log(err);
        res.json({ "message": err })
});

}