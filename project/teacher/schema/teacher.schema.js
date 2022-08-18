const mongoose = require("mongoose");

const teacherSchema=mongoose.Schema({
    name:String,
    email:String,
    password:String,
    role:{type:String,default:"teacher"},
},{
    timestamps:true,
})





const Teacher=mongoose.model("teacher",teacherSchema);
module.exports=Teacher;