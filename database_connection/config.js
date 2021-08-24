const knex = require('knex')({
    client: 'mysql',
    connection: {
        host:'localhost',
        user:'root' ,
        password:'Pragati@12' ,
        database:'Turing'
    },

});

knex.connection((err,result)=>{
    if(err) throw err
        console.log("connected")
})


module.exports = knex;