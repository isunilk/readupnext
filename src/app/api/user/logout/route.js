import { cookies } from "next/headers"
import dbConnect from "../../../../../utils/connection";
import User from "@/models/userSchema";
const jwt = require('jsonwebtoken')

export async function GET(request) {
    await dbConnect()
    const cookieStore = cookies()
    let cookie = cookieStore.get("read_tk");
    const verifyToken = jwt.verify(cookie.value, process.env.SECRET_KEY)
    
    let update = await User.updateOne({_id:verifyToken._id},{$pull:{tokens:{token:cookie.value}}})
    if(update.modifiedCount<=0) Response.json({success:false})
        
    cookieStore.delete("read_tk")
    return Response.json({success:true})
    

}
