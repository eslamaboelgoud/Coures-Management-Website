const  mongoose  = require("mongoose");

const userSchem = new mongoose.Schema({
    name:String ,
    email: String,
    password:String,
    age:Number,
    code:String,

    role:{type:String , default:'student'},
    code:String,

},{
    timestamps:true,
})

module.exports=mongoose.model("user",userSchem);