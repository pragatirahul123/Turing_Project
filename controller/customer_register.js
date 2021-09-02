const knex = require('../database_connection/config')
const jwt = require('jsonwebtoken')
const{tokencreate,authotication}= require("../middleware/token")





module.exports.customer_register =(req,res)=>{

    knex.select("*")
        .from ("customer")
        .where({"name":req.body.name,"email":req.body.email,"password":req.body.password})



        .then((data) => {
                if (data.length < 1){
                    knex('customer').insert(req.body)
                    .then((result) => {
                                            
                            console.log({'customer':'register succesfully'})
                            res.send({'customer':'register succesfully'})
                    
                        
                    }).catch((err) => {
                        console.log(err);
                    })

                }else{
                        console.log("exists")
                        res.send("exits")
                }
                
        }).catch((err) => {
            console.log(err)

        })
}


    

                                     


    






                  
                                

                
    




        










    


