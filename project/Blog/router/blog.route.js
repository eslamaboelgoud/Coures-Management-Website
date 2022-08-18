const multer = require('multer')
const { addBlog, deleteCorse } = require('../controller/blog.controller')
const isAuthorazation = require('../../configration/comman/madelWare/isAuthorazation')
//const addBlogSchema = require("../joi/addBlogSchema");
const { DELETE_CORSE, ADD_CORSE } = require('../../endpoint')
const routerBlog = require('express').Router()

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads')
  },
  filename: function (req, file, cb) {
    const prefix = Date.now() + '_' + file.originalname

    cb(null, prefix)
  }
})

const uploads = multer({ storage: storage })
routerBlog.post(
  '/addBlog',
  isAuthorazation(ADD_CORSE),
  uploads.array('blogImgURL'),
  addBlog
)
routerBlog.delete(
  '/deleteCorse/:id',
  isAuthorazation(DELETE_CORSE),
  deleteCorse
)

module.exports = routerBlog
