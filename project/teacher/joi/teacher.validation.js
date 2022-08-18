const Joi = require('joi');

module.exports={
    addTeacherSchema:{
        body:Joi.object().required().keys({
            name:Joi.string().required(),
            email:Joi.string().required().email(),
            password:Joi.string().required(),
            
        })
    },
    
        sign_InSchema:{
            body:Joi.object().required().keys({
                email:Joi.string().required().email(),
                password:Joi.string().required()
            })
        }
    }