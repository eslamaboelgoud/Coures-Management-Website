const joi = require("joi");
module.exports={
    addAdminSchema:{
        body:joi.object().required().keys({
            name:joi.string().required(),
            email:joi.string().required().email(),
            password:joi.string().required(),
            
            
        })

    },
        sign_InSchema:{
            body:joi.object().required().keys({
                email:joi.string().required().email(),
                password:joi.string().required(),  
                
            })

        }
    

}