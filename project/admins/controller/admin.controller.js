const Admin = require("../schema/admin.schema");
const { StatusCodes } = require('http-status-codes');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
 const sign_Up=async (req,res)=>{
    let {name,email,password}=req.body;
  try{
       const admin=await Admin.findOne({email});
       if(admin){

      res.status(StatusCodes.BAD_REQUEST)
      .json({message:"This Admin Is Already Exict"})
     }else{

    bcrypt.hash(password, 8, async function(err, hash) {
        if(err)throw err;
    await Admin.insertMany({name, email ,password:hash});
    res.status(StatusCodes.CREATED)
    .json({message:"added Success **"});
    })
}

  }catch(error){
    console.log("errrrrrrrrrrrorrr*****",error);
  }


}
 const sign_In=async(req,res)=>{
     let{email,password}=req.body;
     try{
         const admin=await Admin.findOne({email});
         if(!admin){
             
             res.status(StatusCodes.BAD_REQUEST)
             .json({message:"This admin is not required"});
         }else{
            const match = await bcrypt.compare(password,admin.password);

            if(match) {
                //login
                const token = jwt.sign({ _id:admin._id,role:admin.role },process.env.TOKEN_KEY);
                res.json(token);
                //console.log(token);
            }else{
                res.status(StatusCodes.BAD_REQUEST).json({message:"Password is worning"})

            }
         }

     }catch(error){
         console.log("error***",error);
     }
 }


 module.exports={sign_Up,sign_In}