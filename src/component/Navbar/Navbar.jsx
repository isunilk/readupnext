import Link from "next/link"
import style from "./nav.module.css"
import { Search } from "../Home/Search"
import { Navsearch } from "../Common/Navsearch"
import { cookies } from "next/headers"
import dbConnect from "../../../utils/connection"
import { Varify } from "../../../utils/Varify"
import { User } from "./User"

export const Navbar = async() => {
  await dbConnect()
  let cookiesStore = cookies()
  let value = cookiesStore.get("read_tk")||null
  let user = value? await Varify(value.value):null
  return (
    <nav className={"d-flex justify-content-between justify-content align-items-center " + style.nav}>
      <Link href="/" className={"col-md-2 col-lg-2 col-5 " + style.logo}><img src="/assets/icon/dark_logo.svg" style={{width:"100%"}} alt="logo-readupnext" /></Link>
      <div className="col-lg-1 d-none d-lg-block"></div>
      <div className="d-flex gap-2 col-xl-3 col-lg-2 col-md-3 col-sm-5 col-7 ps-2">
        <Navsearch/>
        <button className="bg-transparent d-md-none fs-3 border-0"><i className="bi bi-list"></i></button>
      </div>
      <div className={"col-xl-6 col-lg-7 align-items-center justify-content-end d-md-flex col-7 "+style.mobile} >
        <button className="border-0 d-md-none position-absolute fs-3 bg-transparent" style={{top:"5px", right:"5px"}}><i className="bi bi-x-lg"></i></button>
        <ul className={`col-8 mb-0 list-unstyled justify-content-center gap-2 gap-lg-4 d-md-flex ${style.menu}`}>
          <li><Link href="/people">People</Link></li>
          <li><Link href="/author">Author</Link></li>
          <li><Link href="/list">Best List</Link></li>
          <li><Link href="/series">Series</Link></li>
          <li><Link href="blog">Blog</Link></li>
        </ul>
        {
          user?
          
          <div className={"fw-bold mb-0 text-uppercase position-relative "+style.user }>{user.user[0]}
            <div className="position-absolute end-0 top-100 bg-light p-3 rounded">
              <User/>
            </div>
          </div>
          :<div className="col-lg-4 col-md-4 justify-md-content-end justify-content-center justify-content-lg-start mt-3 mt-md-0 pt-4 pt-md-0 d-flex gap-5 gap-lg-3 gap-md-1">
          <Link href="/login" className="text-decoration-none text-dark text-center border rounded-pill border-dark bg-white px-lg-3  px-3 px-md-2 py-1">Login</Link>
          <Link href="/signup" className="text-decoration-none text-white bg-dark text-center border rounded-pill border-dark px-lg-3 px-3  px-md-2 py-1">SignUp</Link>
        </div>
        }
      </div>
    </nav>
  )
}
