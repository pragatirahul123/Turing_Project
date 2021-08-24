var knex = require('../database_connection/config')
module.exports.read_data = (req,res)=>{
    knex.select('*').from('departments')
    .then((data) => {
        console.log(data);
        res.send(data)
})
    .catch((err) => {
        console.log(err);
        res.json({ "message": err })
});

}


