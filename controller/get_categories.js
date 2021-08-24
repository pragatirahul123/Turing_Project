var knex = require('../database_connection/config')
module.exports.read_data_category = (req,res)=>{
    knex.select('*').from('category')
    .then((data) => {
        console.log(data);
        res.send(data)
})
    .catch((err) => {
        console.log(err);
        res.json({ "message": err })
});

}