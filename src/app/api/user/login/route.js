import User from "@/models/userSchema";
import dbConnect from "../../../../../utils/connection";
const bcrypt = require("bcryptjs");
import { cookies } from 'next/headers'

export async function POST(request,{params}) {

    try{
        await dbConnect()
        let res = await request.json()
        let {email, password, remember} = res;
        if(!email || !password) return Response.json({success:false, message:"All Field Required"})
        let user = await User.findOne({email})
        const isMatch = await bcrypt.compare(password, user.password)

        let token = await user.generateAuthToken();
        cookies().set({
            name: 'read_tk',
            value: token,
            httpOnly: true,
            maxAge: remember ? 60 * 60 * 24 * 30 : 60*60,
            path: '/',
        })

        

        return Response.json({success:true, message:"Login Successfully"})

    }catch(err){
        console.log(err)
        return Response.json({success:false, message:"Some error occured try after some time"})

    }

}