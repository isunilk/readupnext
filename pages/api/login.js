import dbConnect from "../../utils/dbCon";
import User from "../../models/userSchema";
const bcrypt = require('bcryptjs')
import cookie from 'cookie';

export default async function handler(req, res) {
  try {
    await dbConnect();  
    if (req.method === "POST") {
      
      const { email, password } = req.body;
      if (email, password) {
        const userLogin = await User.findOne({ email: email });

        if (userLogin) {
          const isMatch = await bcrypt.compare(password, userLogin.password)

          if (isMatch) {
            let token = await userLogin.generateAuthToken();
            const maxAge = 60 * 60 * 24 * 30; // 1 week in seconds

            // Set the cookie in the response
            res.setHeader(
              "Set-Cookie",
              cookie.serialize('art_ad', token, {
                maxAge,
                path: '/',
                httpOnly: true,
              })
            );
            res.status(200).json({ success: true, message: "Login Successfully" })
          } else {
            res.status(400).json({ message: "Invalid Credentials!" })
          }
        } else {
          res.status(400).json({ message: "Invalid Credentials!" })
        }
      } else {
        res.status(422).json({ message: "Invalid Inputs!" })
      }
    }
  } catch (err) {
    res.send(err)
  }
}

// import { NextRequest, NextResponse } from 'next/server'

// export default async function POST(request) {
//   // ...your post request logic here
// console.log("yes hit")
//   // Set json response first
//   const response = NextResponse.json({
//     message: "Login successful",
//     success: true,
// })

// Then set a cookie
// response.cookies.set("jwt","token",{
//   httpOnly: true,
// })

//   return response
// }
