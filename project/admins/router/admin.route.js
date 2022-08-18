const adminRouter=require('express').Router();
const { sign_In,sign_Up } = require("../controller/admin.controller");
const adminValidtion=require('../../configration/comman/madelWare/userValidation');
const { addAdminSchema, sign_InSchema } = require('../joi/admin.viladition');

adminRouter.post('/adminSignIn',adminValidtion(sign_InSchema),sign_In);
adminRouter.post('/adminSignUp',adminValidtion(addAdminSchema),sign_Up);






module.exports=adminRouter;
