import User from "@/models/userSchema";
import dbConnect from "../../../../../utils/connection";

export async function POST(request, { params }) {

    try {
        await dbConnect()
        let res = await request.json()
        let { user, email, password } = res;
        if (!user || !email || !password) return Response.json({ success: false, message: "All Field Required" })
        let exist = await User.find({ email })
        if (exist) return Response.json({ success: false, message: "All Field Required" })
        let doc = new User({ user, email, password })
        await doc.save()
        // console.log(doc)

        return Response.json({ success: true, message: "Account Created Successfully" })

    } catch (err) {
        return Response.json({ success: false, message: "Some error occured try after some time" })

    }

}