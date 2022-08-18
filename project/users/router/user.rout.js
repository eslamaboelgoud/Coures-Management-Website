const { getAllUsers, sign_Up, sign_In, update_User, deleteUser, getUser } = require("../controller/user.controller");
const userValidation=require('../../configration/comman/madelWare/userValidation');
const { addUserSchema, sign_InSchema, updateSchema } = require("../joi/validationSchema");
const isAuthorazation=require('../../configration/comman/madelWare/isAuthorazation');
const { UPDATE_USER, DELETE_USER } = require("../../endpoint");
const router = require("express").Router();

router.get('/',getAllUsers);
router.get('getUser/:id',getUser);
router.post('/addUser',userValidation(addUserSchema),sign_Up);
router.post('/sign_In',userValidation(sign_InSchema),sign_In);
router.put('/updateUser/:id',userValidation(updateSchema),isAuthorazation(UPDATE_USER),update_User);
router.delete('/deleteUser/:id',isAuthorazation(DELETE_USER),deleteUser);






module.exports=router;