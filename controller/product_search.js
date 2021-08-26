var knex = require('../database_connection/config')
module.exports.get_search = (req,res)=>{
    knex("product")
    .select("product.product_id","name","description","price","discounted_price","thumbnail")

    // search name 
    .where('product.name',req.params.search)
    .then((data) => {
        for(var i=0;i<data.length;i++){
            if (data[i]['name'] === data[i]['name']){
                var fulldata = {
                    count:data[i]['name'].length,
                    rows:data

            }
        }
    
    }
        console.log(fulldata);
        res.send(fulldata)
    
})
    .catch((err) => {
        console.log(err);
        res.json({ "message": err })
});

}
