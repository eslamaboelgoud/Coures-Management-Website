const teacherRouter=require('express').Router();
const { addTeacher, sign_in } =require('../controller/teacher.controller');
const isAuthorazation=require('../../configration/comman/madelWare/isAuthorazation');
const teacherValidation=require('../../configration/comman/madelWare/userValidation');
const { addTeacherSchema, sign_InSchema } = require('../joi/teacher.validation');

teacherRouter.post('/addTeacher',teacherValidation(addTeacherSchema),addTeacher);
teacherRouter.post('/sign_inTeacher',teacherValidation(sign_InSchema),sign_in);








module.exports=teacherRouter;