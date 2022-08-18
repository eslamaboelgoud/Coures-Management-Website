const { StatusCodes } = require('http-status-codes')
const Blog = require('../schema/blog.schema')

const addBlog = async (req, res) => {
  try {
    let { title, discription, createdBy } = req.body
    let pathsArray = []
    for (let i = 0; i < req.files.length; i++) {
      pathsArray.push(req.files[i].path)
    }
        console.log(pathsArray)
        const newblog = await Blog({
          title,
          discription,
          createdBy,
          blogImgURL:`http://localhost:7000/addBlog${pathsArray}`
        })
        const savedblog = await newblog.save()
        res.json({ message: 'done', savedblog })
      
  } catch (error) {
    console.log('ffffffffffffffffffffff', error)
    res
    .status(StatusCodes.BAD_REQUEST)
    .json({ message: "fail" })
  }
}
const deleteCorse = async (req, res, next) => {
  const { id } = req.params
  await Blog.findByIdAndDelete({ _id: id })
  res.status(StatusCodes.OK).json({ message: 'Done' })
}

module.exports = { addBlog, deleteCorse }
