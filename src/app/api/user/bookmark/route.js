import User from '@/models/userSchema'
import { cookies } from 'next/headers'
import { peoples } from '../../fetch-data/[action]/action'
const jwt = require('jsonwebtoken')


export async function POST(request, { params }) {


    const cookieStore = cookies()
    let cookie = cookieStore.get("read_tk")
    const verifyToken = jwt.verify(cookie.value, process.env.SECRET_KEY)
    let data = await request.json()
    // const varify = await User.findOne({ _id: verifyToken._id, "tokens.token": value })
    console.log(data)
    switch (data.page) {
        case "people":
            let exist = await User.findOne({_id:verifyToken._id ,"bookmarks.people.slug":data.data.slug})
            // console.log(exist)
            if(exist) return Response.json({success:false});

            await User.updateOne({_id:verifyToken._id},{$push:{"bookmarks.people":data.data}})

            break;
        case "list":
            break;
        case "series":
            break;
        case "author":
            break;
        case "book":
            break;
    }
    // const update = await User.updateOne({_id:verifyToken._id},{})




    return Response.json({ success: true })

}