import dbConnect from "../../../../../utils/connection"
import { NextResponse } from "next/server"
import { author, list, listName, peoples, series } from "./action";

export async function GET(request,{params}) {
    try{
        await dbConnect();
        // console.log(params.action)
        const searchParams = request.nextUrl.searchParams
        const query = searchParams.get('page')
        const fillter = searchParams.get("search")
        let data;
        switch(params.action){
            case "peoples":
                data = await peoples(query, fillter)
                return Response.json({data})
            case "author":
                data = await author(query)
                return Response.json({data})
            case "list-name":
                data = await listName()
                return Response.json({data})
            case "list":
                data = await list(query, fillter)
                return Response.json({data})
            case "series":
                data = await series(query);
                return Response.json({data})
        }
        return Response.json({ res:"messave" })
    }catch(err){
        
    }
}