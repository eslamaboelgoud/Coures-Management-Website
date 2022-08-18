const { StatusCodes } = require('http-status-codes');
module.exports=(schema)=>{
    return(req,res,next)=>{
        const validateArr=[];
        const validationResult=schema.body.validate(req.body);
        if(validationResult.error){
            validateArr.push(validationResult.error.details[0].message);
        }
        if(validateArr.length){
            res.status(StatusCodes.BAD_REQUEST)
            .json({message: validateArr.join()});
        }else{
            next();
        }
    }

}