const mongoose = require('mongoose');
const connaction=()=>{
    return mongoose
    .connect(process.env.CONNECTION_STRING_ATLAS)
    .then((result)=> console.log("db connected"))
    .catch((err)=> console.log(err))

}
module.exports=connaction;