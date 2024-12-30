// import { BookDetail } from "@/component/Common/BookDetail"
// import { Navhome } from "@/component/Navbar/Navhome"
import { Navbar } from "@/component/Navbar/Navbar"
import { Footer } from "@/component/Footer/Footer"
import { Hero } from "@/component/Common/Hero"
import { Client } from "./Client"
import { Seo } from "@/component/Common/Seo"

const content = {
  heading: "Best Books List Across 1300 Categories (Our TopPicks)",
  para: "Explore our 'Best Books List', curated by scanning the web and sourcing expert recommendations. With 1300+ categories, find top picks from music to engineering and more. Your next great read awaits."
}

export const dynamic = 'force-static'

export const metadata = {
  title:"Best Books List Across 1300 Categories (Our Top Picks)",
  description:"Dive into our 'Best Books List' section with over 1300 categories. Discover top picks from music to engineering, psychology, and self-help.",
  alternates: {
    canonical: '/list',
  },
  openGraph: {
    images: '/opengraph_image.png',
  },
}

const page = () => {
  return (
    <>
      <Seo
        pageTitle="Best Books List Across 1300 Categories (Our Top Picks)"
        descr="Dive into our 'Best Books List' section with over 1300 categories. Discover top picks from music to engineering, psychology, and self-help."
        metaTitle="Best Books List Across 1300 Categories (Our Top Picks)"
        canonical="https://www.readupnext.com/list"
        ogImage="https://www.readupnext.com/opengraph_image.png"
      />
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
        <Client />
      </section>
      <Footer />

    </>
  )
}

export default page