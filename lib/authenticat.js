import dbConnect from "../utils/dbCon"
const jwt = require('jsonwebtoken')
import User from "../models/userSchema";

export const authenticat = async (value)=>{
    try{
        await dbConnect();
        const verifyToken = jwt.verify(value, process.env.SECRET_KEY)
        const varify = User.findOne({_id: verifyToken._id, "tokens.token": value})
        return varify
        // return true
    }catch(err){
        console.log(err)
    }
}

