const Joi = require('joi');

module.exports={
    addUserSchema:{
        body:Joi.object().required().keys({
            name:Joi.string().required(),
            email:Joi.string().required().email(),
            password:Joi.string().required(),
            age:Joi.number().required(),
            role:Joi.string()
        })
    },
    sign_InSchema:{
        body:Joi.object().required().keys({
            email:Joi.string().required().email(),
            password:Joi.string().required(),
            
        })
    },
    
        
        updateSchema:{
            body:Joi.object().required().keys({
                name:Joi.string(),
                email:Joi.string(),
                password:Joi.string()
            }),
            prams:Joi.object().required().keys({
              id:Joi.string()  
            })


        }

    
}