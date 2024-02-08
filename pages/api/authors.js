import dbConnect from "../../utils/dbCon";
import authorSchema from "../../models/authorSchema";

export default async function handler(req, res) {
  try {
    await dbConnect();
    let page = req.query.list
    let index = 0 + (50 * page);
    let target = 50 + index;
    let data = []
    const getdata = await authorSchema.find();

    if (target > getdata.length) {
      target = getdata.length;
    }
    
    for (var i = index; i < target; i++) {
      data.push(getdata[i])
    }

    res.status(200).send(data)
  } catch (err) {
    console.log(err)
    res.status(500).send({ error: 'failed to fetch data' })
  }
}