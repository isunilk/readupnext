var nodemailer = require("nodemailer");
//-----------------------------------------------------------------------------
async function sendMail(subject, otpText) {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NEXT_NODEMAILER_EMAIL,
      pass: process.env.NEXT_EMAIL_PASSWORD,
    },
  });

  var mailOptions = {
    from: process.env.NEXT_NODEMAILER_EMAIL,
    to: process.env.NEXT_NODEMAILER_EMAIL,
    subject: subject,
    html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        *{
            padding: 0;
            margin: 0;
        }
        .container{
            font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            display: flex;
            justify-content: center;
        }
        .container .contentContainer{
            margin-top: 20px;
            min-width: 50%;
            max-width: 95%;
            border: 1px solid gray;
            border-radius: 10px;
            overflow: hidden;
            background-color: #fbf4ee;
        }
        .container .contentContainer h1{
            background: #ffcc5b;
            color: #24385f;
            text-align: center;
            padding: 10px;
            margin-bottom: 20px;
        }
        .container .content{
            display: flex;
            align-items: center;
            font-size: 20px;
            padding-bottom: 10px;
        }
        .container .content strong{
            color: #24385f;
        }
        .container .content p{
            margin-left: 10px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="contentContainer">
            <h1>ReadUpNext</h1>
            <div class="content">
                <p><strong>Name : </strong>${otpText.name}</p>
            </div>
            <div class="content">
               <p><strong>Email : </strong>${otpText.email}</p>
            </div>
            <div class="content">
                <p><strong>Message : </strong>${otpText.message}</p>
            </div>
        </div>
    </div>
</body>
</html>
`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      throw new Error(error);
    } else {
      console.log("Email Sent");
      return true;
    }
  });
}


export default async function handler(req, res) {
    try {
    
        if(req.method === "POST"){
           await sendMail("ReadUpNext Message", req.body)
           res.send({status:200, message:"Message sent successfully"});
        }else{
            res.send("wrong method")
        }
    }
    catch (err) {
        console.log(err)
    }
}