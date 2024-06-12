// import { BookDetail } from "@/component/Common/BookDetail"
// import { Navhome } from "@/component/Navbar/Navhome"
import style from "./list.module.css"
import { Navbar } from "@/component/Navbar/Navbar"
import { Footer } from "@/component/Footer/Footer"
import { Hero } from "@/component/Common/Hero"
import Link from "next/link"
import { Client } from "./Client"

const content = {
  heading: "Best Books List Across 1300 Categories (Our TopPicks)",
  para: "Explore our 'Best Books List', curated by scanning the web and sourcing expert recommendations. With 1300+ categories, find top picks from music to engineering and more. Your next great read awaits."
}

const page = () => {
  return (
    <>
      <Navbar />
      <Hero heading={content.heading} para={content.para} />
      <section className="container d-flex gap-3">
        {/* <div className={"col-lg-3 list_menu  " + style.list_menu}>
          <ul className="list-unstyled p-2  m-0">
            <li>
              <button className="text-start w-100 border-0 py-3 px-3 active">All </button>
            </li>
            <li>
              <button className="text-start w-100 border-0 py-3 px-3">All </button>
            </li>
            <li>
              <button className="text-start w-100 border-0 py-3 px-3">All </button>
            </li>

          </ul>
        </div>
        <div className="row col-9">
          <Link href="/best-list/modal" className="text-decoration-none text-dark col-6 py-3">
            <div className={"p-2 rounded overflow-hidden " + style.listCard}>
              <div className="position-relative d-flex justify-content-between">
                <img src="/modalbook.png" alt="" />
                <img src="/modalbook.png" className="position-absolute" style={{ top: "4%", left: "50%", transform: "translateX(-50%)" }} alt="" />
                <img src="/modalbook.png" alt="" />
              </div>
              <div className="position-relative">
                <h3 className="text-center mt-3">Best Trands Books</h3>
                <span className="text-center d-block">11 Books</span>
                <div className={"d-flex position-absolute justify-content-center " + style.list_card_arrow}><i class="bi bi-arrow-right"></i></div>
              </div>
            </div>
          </Link>
          <Link href="" className="text-decoration-none text-dark col-6 py-3">
            <div className={"p-2 rounded overflow-hidden " + style.listCard}>
              <div className="position-relative d-flex justify-content-between">
                <img src="/modalbook.png" alt="" />
                <img src="/modalbook.png" className="position-absolute" style={{ top: "4%", left: "50%", transform: "translateX(-50%)" }} alt="" />
                <img src="/modalbook.png" alt="" />
              </div>
              <div className="position-relative">
                <h3 className="text-center mt-3">Best Trands Books</h3>
                <span className="text-center d-block">11 Books</span>
                <div className={"d-flex position-absolute justify-content-center " + style.list_card_arrow}><i class="bi bi-arrow-right"></i></div>
              </div>
            </div>
          </Link>
          <Link href="" className="text-decoration-none text-dark col-6 py-3">
            <div className={"p-2 rounded overflow-hidden " + style.listCard}>
              <div className="position-relative d-flex justify-content-between">
                <img src="/modalbook.png" alt="" />
                <img src="/modalbook.png" className="position-absolute" style={{ top: "4%", left: "50%", transform: "translateX(-50%)" }} alt="" />
                <img src="/modalbook.png" alt="" />
              </div>
              <div className="position-relative">
                <h3 className="text-center mt-3">Best Trands Books</h3>
                <span className="text-center d-block">11 Books</span>
                <div className={"d-flex position-absolute justify-content-center " + style.list_card_arrow}><i class="bi bi-arrow-right"></i></div>
              </div>
            </div>
          </Link>
          <Link href="" className="text-decoration-none text-dark col-6 py-3">
            <div className={"p-2 rounded overflow-hidden " + style.listCard}>
              <div className="position-relative d-flex justify-content-between">
                <img src="/modalbook.png" alt="" />
                <img src="/modalbook.png" className="position-absolute" style={{ top: "4%", left: "50%", transform: "translateX(-50%)" }} alt="" />
                <img src="/modalbook.png" alt="" />
              </div>
              <div className="position-relative">
                <h3 className="text-center mt-3">Best Trands Books</h3>
                <span className="text-center d-block">11 Books</span>
                <div className={"d-flex position-absolute justify-content-center " + style.list_card_arrow}><i class="bi bi-arrow-right"></i></div>
              </div>
            </div>
          </Link>
          <Link href="" className="text-decoration-none text-dark col-6 py-3">
            <div className={"p-2 rounded overflow-hidden " + style.listCard}>
              <div className="position-relative d-flex justify-content-between">
                <img src="/modalbook.png" alt="" />
                <img src="/modalbook.png" className="position-absolute" style={{ top: "4%", left: "50%", transform: "translateX(-50%)" }} alt="" />
                <img src="/modalbook.png" alt="" />
              </div>
              <div className="position-relative">
                <h3 className="text-center mt-3">Best Trands Books</h3>
                <span className="text-center d-block">11 Books</span>
                <div className={"d-flex position-absolute justify-content-center " + style.list_card_arrow}><i class="bi bi-arrow-right"></i></div>
              </div>
            </div>
          </Link>
          <Link href="" className="text-decoration-none text-dark col-6 py-3">
            <div className={"p-2 rounded overflow-hidden " + style.listCard}>
              <div className="position-relative d-flex justify-content-between">
                <img src="/modalbook.png" alt="" />
                <img src="/modalbook.png" className="position-absolute" style={{ top: "4%", left: "50%", transform: "translateX(-50%)" }} alt="" />
                <img src="/modalbook.png" alt="" />
              </div>
              <div className="position-relative">
                <h3 className="text-center mt-3">Best Trands Books</h3>
                <span className="text-center d-block">11 Books</span>
                <div className={"d-flex position-absolute justify-content-center " + style.list_card_arrow}><i class="bi bi-arrow-right"></i></div>
              </div>
            </div>
          </Link>
          <Link href="" className="text-decoration-none text-dark col-6 py-3">
            <div className={"p-2 rounded overflow-hidden " + style.listCard}>
              <div className="position-relative d-flex justify-content-between">
                <img src="/modalbook.png" alt="" />
                <img src="/modalbook.png" className="position-absolute" style={{ top: "4%", left: "50%", transform: "translateX(-50%)" }} alt="" />
                <img src="/modalbook.png" alt="" />
              </div>
              <div className="position-relative">
                <h3 className="text-center mt-3">Best Trands Books</h3>
                <span className="text-center d-block">11 Books</span>
                <div className={"d-flex position-absolute justify-content-center " + style.list_card_arrow}><i class="bi bi-arrow-right"></i></div>
              </div>
            </div>
          </Link>
          <Link href="" className="text-decoration-none text-dark col-6 py-3">
            <div className={"p-2 rounded overflow-hidden " + style.listCard}>
              <div className="position-relative d-flex justify-content-between">
                <img src="/modalbook.png" alt="" />
                <img src="/modalbook.png" className="position-absolute" style={{ top: "4%", left: "50%", transform: "translateX(-50%)" }} alt="" />
                <img src="/modalbook.png" alt="" />
              </div>
              <div className="position-relative">
                <h3 className="text-center mt-3">Best Trands Books</h3>
                <span className="text-center d-block">11 Books</span>
                <div className={"d-flex position-absolute justify-content-center " + style.list_card_arrow}><i class="bi bi-arrow-right"></i></div>
              </div>
            </div>
          </Link>
          <Link href="" className="text-decoration-none text-dark col-6 py-3">
            <div className={"p-2 rounded overflow-hidden " + style.listCard}>
              <div className="position-relative d-flex justify-content-between">
                <img src="/modalbook.png" alt="" />
                <img src="/modalbook.png" className="position-absolute" style={{ top: "4%", left: "50%", transform: "translateX(-50%)" }} alt="" />
                <img src="/modalbook.png" alt="" />
              </div>
              <div className="position-relative">
                <h3 className="text-center mt-3">Best Trands Books</h3>
                <span className="text-center d-block">11 Books</span>
                <div className={"d-flex position-absolute justify-content-center " + style.list_card_arrow}><i class="bi bi-arrow-right"></i></div>
              </div>
            </div>
          </Link>
        </div> */}
        <Client/>
      </section>
      <Footer />

    </>
  )
}

export default page