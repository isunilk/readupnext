import { authenticat } from "../../lib/authenticat"

export default async function handler(req, res) {
    try{
        let token = req.headers.authorization.trim().split(" ")[1];
        let auth = await authenticat(token)
        if(auth) return res.status(200).json({message:"User varify", varify:true});
        res.status(400).json({message:"User Not Found", varify: false});
        
    }catch(err){
        res.send(err)
    }
}