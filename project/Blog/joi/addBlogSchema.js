const joi = require("joi");
module.exports={
    addBlogSchema:{
        body:joi.object().required().keys({
            title:joi.string().required(),
            Describe:joi.string().required(),
            createdBy:joi.string().required(),
            blogImgURL:joi.string(),
            
            
        })

    }

}