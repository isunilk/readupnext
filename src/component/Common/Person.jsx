import Link from "next/link"
import style from "./common.module.css"

export const Person = ({ people, page }) => {

  return (
    <Link href={"/people/" + people.slug} className={`d-flex flex-column mx-2 my-3 justify-content-center align-items-center text-dark text-decoration-none ${style.personCard}`}>

      <img src={people.imageUrl300|| "/assets/user.svg"} alt="" width="100%"  />
      <Link href={"/people/" + people.slug} className="my-2 text-decoration-none">{people.name}</Link>
      <div className='d-flex gap-2 mb-2'>
        {
          people.category.map((item, index) => (
            <span className={style.author} key={index}>{item}</span>
          ))
        }
        {/* <span className={style.layer}>Layer</span> */}
      </div>
      {
        page ?
          <p className="mb-0">Total Books- <strong>{people.booksCount}</strong></p> : null
      }
    </Link>
  )
}

export const AuthorCard = ({ people }) => {

  return (
    <Link href={"/author/" + people.slug} className={`d-flex flex-column mx-2 my-3 justify-content-center align-items-center text-decoration-none text-dark ${style.personCard}`}>
      <img src={people.imageURL || "/assets/user.svg"} alt="" width="100%" />
      <Link href={"/author/" + people.slug} className="my-2 text-decoration-none">{people.name}</Link>
      <p className="mb-0">Total Books- <strong>{people.booksCount}</strong></p>
    </Link>
  )
}


export const MorePerson = ({link, text, num}) => {
  return (
    <Link href={link} className={`d-flex  mx-4 my-3 text-center p-4 justify-content-center align-items-center text-decoration-none ${style.moreLink}`}>
      {num} <br /> {text}
    </Link>
  )
}
