import User from '@/models/userSchema'
const jwt = require('jsonwebtoken')

export const Varify = async(cookie)=>{
    const verifyToken = jwt.verify(cookie, process.env.SECRET_KEY)
    const varify = await User.findOne({ _id: verifyToken._id, "tokens.token": cookie })
    return varify
}