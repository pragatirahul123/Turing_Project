var knex = require('../database_connection/config')

module.exports.product_categories_id = (req,res)=>{
    knex("product")
    .select("product.product_id","name","description","price","discounted_price","thumbnail")
    .join("product_category","product.product_id","product_category.product_id")

    

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
