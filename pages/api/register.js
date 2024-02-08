import dbConnect from "../../utils/dbCon";
import User from "../../models/userSchema";

export default async function handler(req, res) {
    try {
        await dbConnect();
        if (req.method === "POST") {
             res.status(400).json({message:"SignUp Forbidden"})
            // const { userName, email, password, cpassword } = req.body;
            // if (userName, email, password, cpassword && password === cpassword) {
                
            //     const user = new User({ userName, email, password })
            //     await user.save();
                
            //     res.status(200).json({message:"User Save Successfully"})
            // } else {
            //     res.status(422).send("Invalid Inputs!")
            // }
        }
    } catch (err) {
        res.send(err)
    }
}