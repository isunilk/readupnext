import { home_people } from "@/app/api/fetch-data/[action]/action"
import { MorePerson, Person } from "../Common/Person"
import style from "@/app/page.module.css"
import dbConnect from "../../../utils/connection"


export const PopularPerson = async() => {
  await dbConnect()
  const data = await home_people()
  // console.log(data)
  return (
    <div className={`row justify-content-between align-items-center ${style.people}`}>
        {
          data.map((item, index)=>(
            <Person people={item} key={index}/>
          ))
        }
        {/* <Person/>
        <Person/>
        <Person/>
        <Person/>
        <Person/>
        <Person/> */}
        <MorePerson link="/people" text="More Peoples" num="750+"/>
    </div>
  )
}
