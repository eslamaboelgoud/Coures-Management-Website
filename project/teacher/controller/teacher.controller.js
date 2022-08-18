const { StatusCodes } = require("http-status-codes");
const Teacher = require("../schema/teacher.schema");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const addTeacher=async(req,res)=>{
    let{name,email,password}=req.body;
    try{
        const teacher = await Teacher.findOne({email});
        if(teacher){
            res.status(StatusCodes.BAD_REQUEST)
            .json({message:"This Teacher Is already exist ***"});
        }else{
            bcrypt.hash(password, 8, async function(err, hash) {
                if(err)throw err;
            await Teacher.insertMany({name,email,password:hash});
            res.status(StatusCodes.CREATED)
            .json({message:"SignUp Is Success ***"})

        })
    }
    }catch(error){
        console.log("error****",error);
    }
    
}
const sign_in=async(req,res)=>{
    let{email ,password}=req.body;
    try{
        const teacher=await Teacher.findOne({email});
        if(!teacher){
            res.status(StatusCodes.BAD_REQUEST)
            .json({message:"This mail is not found"});
        }else{
            const match = await bcrypt.compare(password, teacher.password);

            if(match) {
                const token = jwt.sign({ _id:teacher._id,role:teacher.role },process.env.TOKEN_KEY);
            res.json(token);
                //login
                
            
            }else{
                res.status(StatusCodes.BAD_REQUEST).json({message:"Password is worning"})

            }

    }
}catch(error){
        console.log("error ****",error);
    }
}



module.exports={addTeacher,sign_in}