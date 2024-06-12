import Link from "next/link"
import style from "./nav.module.css"

export const Navhome = () => {
  return (
    <nav className={"d-flex justify-content-between justify-content-md-start align-items-center " + style.nav}>
      <Link href="/" className={"col-md-3 col-lg-2 " + style.logo}><img src="/assets/icon/dark_logo.svg" alt="logo-readupnext" /></Link>
      <div className="col-lg-2 ">
        <button className="bg-transparent d-md-none fs-3 border-0"><i className="bi bi-list"></i></button>
      </div>
      <div className={"col-lg-8 justify-content-end d-md-flex col-9 "+style.mobile} >
        <button className="border-0 d-md-none position-absolute fs-3 bg-transparent" style={{top:"5px", right:"5px"}}><i className="bi bi-x-lg"></i></button>
        <ul className={`col-8 mb-0 list-unstyled justify-content-center d-md-flex ${style.menu}`}>
          <li><Link href="/people">People</Link></li>
          <li><Link href="/author">Author</Link></li>
          <li><Link href="/list">Best List</Link></li>
          <li><Link href="/series">Series</Link></li>
          <li><Link href="blog">Blog</Link></li>
        </ul>
        <div className="col-lg-3 col-md-4 justify-md-content-end justify-content-center justify-content-lg-start mt-3 mt-md-0 pt-4 pt-md-0 d-flex gap-5 gap-md-3">
          <Link href="/login" className="text-decoration-none text-dark text-center border rounded-pill border-dark bg-white px-3 py-1">Login</Link>
          <Link href="/signup" className="text-decoration-none text-white bg-dark text-center border rounded-pill border-dark px-3 py-1">Sign Up</Link>
        </div>
      </div>
    </nav>
  )
}
