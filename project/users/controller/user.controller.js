const User = require('../Schema/user.schema')
const { StatusCodes } = require('http-status-codes')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {nanoid}=require('nanoid');
const getAllUsers = async (req, res) => {
  try {
    const user = await User.find({})
    res.json({ message: 'get All User Success', user })
  } catch (error) {
    console.log(error)
  }
}
const getUser = async (req, res) => {
  let { id } = req.params

  try {
    const user = await User.find({ _id: id })
    res.json({ message: 'get All User Success', user })
  } catch (error) {
    console.log(error)
  }
}
const sign_Up = async (req, res) => {
  let { name, email, password, age , } = req.body
  try {
    const user = await User.findOne({ email })
    if (user) {
      res.status(StatusCodes.BAD_REQUEST).json('this mmail is required')
    } else {
      bcrypt.hash(password, 8, async function (err, hash) {
        if (err) throw err

        await User.insertMany({ name, email, password: hash, age,code:nanoid() })

        res.status(StatusCodes.CREATED).json({ message: 'added Success' })
      })
    }
  } catch (error) {
    console.log('error****************', error)
  }
}
const sign_In = async (req, res) => {
  try {
    let { email, password } = req.body
    const user = await User.findOne({ email })
    if (!user) {
      res.status(StatusCodes.NOT_FOUND).json({ message: 'Error**********' })
    } else {
      const match = await bcrypt.compare(password, user.password)

      if (match) {
        //login
        const token = jwt.sign({ _id: user._id, role: user.role },process.env.TOKEN_KEY)
        res.json(token)
        // console.log(token);
      } else {
        res
          .status(StatusCodes.BAD_REQUEST)
          .json({ message: 'Password is worning' })
      }
    }
  } catch (error) {
    console.log('Error*******', error)
  }
}

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params
    console.log(req.user)
    if (req.user._id == id) {
      await User.findByIdAndDelete({ _id: id })
      res.status(StatusCodes.OK).json({ message: 'done' })
    } else {
      res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: "cannot delete, you aren't the owner" })
    }
  } catch (err) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: 'oops! delete is fail' })
  }
}

const update_User = async (req, res) => {
  try {
    const { id } = req.params
    const { name, email, password } = req.body
    if (req.user._id == id) {
      const hashed = await bcrypt.hash(password, 8)

      const user = await User.findOneAndUpdate(
        { _id: id },
        { name, email, password: hashed }
      )
      res.status(StatusCodes.OK).json({ message: 'done', user: user })
    } else {
      res.status(StatusCodes.BAD_REQUEST).json({ message: 'cannot update' })
    }
  } catch (error) {
    console.log(error)
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'fail' })
  }
}

module.exports = {
  getAllUsers,
  sign_Up,
  sign_In,
  deleteUser,
  update_User,
  getUser
}
