const { StatusCodes } = require("http-status-codes");
const User = require('../Schema/user.schema')

exports.forgetPassword=async(req,res)=>{
    const {email}=req.body;
    try {
        const user=await User.findOne({email})
        if(!user)
        return res
        .status(StatusCodes.BAD_REQUEST)
        .json({message:"invalid email"})
        
        
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({message:"forget fail"})
        
    }
}