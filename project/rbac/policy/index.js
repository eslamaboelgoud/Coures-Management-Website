const studentPolicy=require('./studentPolicy');
const adminPolacy=require('./adminPolicy');
const teacherPolicy=require('./teacherPolicy');
const roles=require('../../configration/comman/madelWare/enum/roles');

const opts={
    [roles.STUDENT]:{
        can:studentPolicy
    },

    [roles.ADMIN]:{
        can:adminPolacy
        },
        
        [roles.TEACHER]:{
            can:teacherPolicy
        }
    
}

module.exports=opts;