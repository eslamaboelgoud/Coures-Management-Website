const express = require('express');
const adminRouter = require('./admins/router/admin.route');
const routerBlog = require('./Blog/router/blog.route');
const teacherRouter=require('./teacher/router/teacher.route.js');
const connaction = require('./configration/config');
const router = require('./users/router/user.rout');
const cors = require('cors');
require('dotenv').config();
const corsOptions = {
    origin:"*" ,
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

const app = express();
const port = process.env.PORT
app.use(express.json());
app.use( cors(corsOptions));
app.use(router);
app.use(routerBlog);
app.use(adminRouter);
app.use(teacherRouter);
app.use('/uploads',express.static('uploads'));

connaction();

//app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))