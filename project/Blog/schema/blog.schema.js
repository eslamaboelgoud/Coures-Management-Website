const mongoose  = require("mongoose");

const blogSchema=new mongoose.Schema({   
    title:String,
    discription:String,
    createdBy:{type:mongoose.Schema.Types.ObjectId,ref:"teacher"},
    blogImgURL:Array

},{
    timestamps:true,
})
const Blog=mongoose.model("blog",blogSchema);
module.exports=Blog;