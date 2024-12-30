// import Image from "next/image";
import styles from "./page.module.css";
import { Navhome } from "@/component/Navbar/Navhome";
import { Search } from "@/component/Home/Search";
import { Featured } from "@/component/Home/Featured";
import { PopularPerson } from "@/component/Home/PopularPerson";
import { Series } from "@/component/Home/Series";
import Link from "next/link";
import BookFilter from "@/component/Home/BookFilter";
import { Footer } from "@/component/Footer/Footer";
import { AuthorCard, MorePerson } from "@/component/Common/Person";
import { home_author, home_people } from "./api/fetch-data/[action]/action";
import dbConnect from "../../utils/connection";
// import { BookDetail } from "@/component/Common/BookDetail";

export const dynamic = 'force-static'

export const metadata = {
  title:"Discover Your Next Recommended Book | Readupnext.com",
  description:"Explore and find your next good read - recommended books by influential people, handpicked by genre, or curated for specific interests.",
  alternates: {
    canonical: '/',
  },
  openGraph: {
    images: '/opengraph_image.png',
  },
 
}


export default async function Home() {
  await dbConnect()
  let data = await home_author()
  return (
    <>
      <Navhome />
      <section className={styles.homehero}>
        <div className="container d-md-flex h-sm-100" style={{ height: "100%" }}>
          <div className={"col-md-5 pt-5 mt-md-5 mt-3 position-relative " + styles.left}>
            <h1>Discover Your Next Recommended Book</h1>
            <p>Explore and find your next good read - recommended books by influential people, handpicked by genre, or curated for specific interests.</p>
            <Search />
            <span className="position-absolute top-0 start-0">
              <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_177_184)">
                  <path d="M13 0C5.82029 0 0 5.82029 0 13C0 20.1797 5.82029 26 13 26C20.1797 26 26 20.1797 26 13C26 5.82029 20.1797 0 13 0ZM13 24.375C6.71775 24.375 1.625 19.2822 1.625 13C1.625 6.71775 6.71775 1.625 13 1.625C19.2822 1.625 24.375 6.71775 24.375 13C24.375 19.2822 19.2822 24.375 13 24.375Z" fill="black" />
                  <path d="M8.9375 10.5625C9.83496 10.5625 10.5625 9.83496 10.5625 8.9375C10.5625 8.04004 9.83496 7.3125 8.9375 7.3125C8.04004 7.3125 7.3125 8.04004 7.3125 8.9375C7.3125 9.83496 8.04004 10.5625 8.9375 10.5625Z" fill="black" />
                  <path d="M17.0625 10.5625C17.96 10.5625 18.6875 9.83496 18.6875 8.9375C18.6875 8.04004 17.96 7.3125 17.0625 7.3125C16.165 7.3125 15.4375 8.04004 15.4375 8.9375C15.4375 9.83496 16.165 10.5625 17.0625 10.5625Z" fill="black" />
                  <path d="M18.6875 13C18.6875 16.1411 16.1411 18.6875 13 18.6875C9.85888 18.6875 7.3125 16.1411 7.3125 13H5.6875C5.6875 17.0386 8.96142 20.3125 13 20.3125C17.0386 20.3125 20.3125 17.0386 20.3125 13H18.6875Z" fill="black" />
                </g>
                <defs>
                  <clipPath id="clip0_177_184">
                    <rect width="26" height="26" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span>
            <span className="position-absolute top-0" style={{ right: "-50px" }}>
              <svg width="180" height="100" viewBox="0 0 180 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 3.76126C9.52792 0.191939 30.7626 -3.1624 35.8223 15.8969C41.5076 37.3126 21.6091 25.8908 37.9543 13.7553C45.4059 8.22285 104.046 -16.2272 96.2284 83C104.283 61.822 124.513 17.1816 141 8.04417" stroke="black" />
                <path d="M121 7C116 9.81481 106 17.5556 106 26" stroke="black" />
                <path d="M122.159 93.9886C135.11 93.2727 162.595 93.2727 168.927 99M137.268 62.4886C133.191 62.7273 124.029 65.0659 120 72.5114M166.049 36C165.569 40.7727 167.488 49.8886 179 48.1705C175.402 48.1705 167.776 50.3182 166.049 58.9091C166.049 54.375 163.746 45.5932 154.537 46.7386C158.374 46.9773 166.049 45.1636 166.049 36Z" stroke="black" />
              </svg>
            </span>
          </div>
          <div className={"col-md-7 pt-5 d-flex align-items-end position-relative " + styles.right} >
            {/* <img src="/assets/sape/study.png" width="110%" alt=""/> */}
            <div className={"position-absolute " + styles.details}>
              <img src="/assets/sape/Group-book.svg" alt="book-group" />
              <div className="d-flex align-items-center position-absolute" style={{ top: "-50px", left: "50%", transform: "translateX(-50%)" }}>
                <span className={"d-inline-block " + styles.data}>+2000 Categories</span>
                <span className={"fs-sm-4 fs-5 fw-semibold " + styles.number}>01</span>
              </div>
              <div className="d-flex align-items-center position-absolute" style={{ left: "-120px", top: "20%" }}>
                <span className={"d-inline-block " + styles.data}>+2000 Categories</span>
                <span className={"fs-sm-4 fs-5 fw-semibold " + styles.number}>01</span>
              </div>
              <div className="d-flex align-items-center position-absolute" style={{ left: "-80px", bottom: "20%" }}>
                <span className={"d-inline-block " + styles.data}>+2000 Categories</span>
                <span className={"fs-sm-4 fs-5 fw-semibold " + styles.number}>01</span>
              </div>
              <div className="d-flex align-items-center position-absolute" style={{ right: "-40%", bottom: "0%" }}>
                <span className={"d-inline-block " + styles.data}>+2000 Categories</span>
                <span className={"fs-sm-4 fs-5 fw-semibold " + styles.number}>01</span>
              </div>
              <div className="d-flex align-items-center position-absolute" style={{ left: "100%", top: "30%" }}>
                <span className={"d-inline-block " + styles.data}>+2000 Categories</span>
                <span className={"fs-sm-4 fs-5 fw-semibold " + styles.number}>01</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className={"position-relative zn2 " + styles.featured}>
        <div className="container py-2">
          <h5 className="fw-normal text-light mb-0 text-center" style={{ opacity: "0.7", fontSize: "0.7rem" }}>As Featured in</h5>
          <Featured />
        </div>
        <img
          src="/assets/sape/shape_148.svg"
          alt="shape"
          className={"position-absolute " + styles.sape1}
        />
        <img
          src="/assets/sape/shape_149.svg"
          alt="shape"
          className={"position-absolute " + styles.sape2}
        />
        <img
          src="/assets/sape/shape_150.svg"
          alt="shape"
          className={"position-absolute " + styles.sape3}
        />
        <img
          src="/assets/sape/shape_151.svg"
          alt="shape"
          className={"position-absolute " + styles.sape4}
        />
      </div>
      {/* <BookDetail/> */}
      <section className="container my-5">
        <h2 className={"fs-1 fw-bold text-center mb-4 " + styles.heading}>
          Explore 1000+ Books recommended by Influential People
        </h2>
        <PopularPerson />
      </section>
      <section className="container d-flex flex-md-row flex-column align-items-center justify-content-between mt-100">
        <div className={"me-5 " + styles.seriesdetail} >
          <h2 className={"fs-1 fw-bold mb-4 " + styles.heading}>
            Books by series
          </h2>
          <p className={styles.para}>Dive into our 'Series' section to discover over 5,900+ book series with all the books arranged in the proper order.</p>
          <p className={styles.para}>From fantasy to mystery to romance and beyond, find your next series and read it sequentially with ease.</p>
          <div className="d-flex gap-4 mt-5">
            <Link href="/series" className="yellow_button text-decoration-none">Explore All Series</Link>
          </div>
        </div>
        <Series />
      </section>
      <section className="container mt-100">
        <h2 className={"fs-1 text-center fw-bold " + styles.heading}>
          Discover over 11,000+ authors and their books.
        </h2>
        <p className={"text-center mb-4 mx-auto " + styles.para} style={{ width: "70%" }}>Explore our 'Authors' section to discover over 11,000+ authors and their books, listed in the order they were published.</p>
        <div className={`row justify-content-between align-items-center ${styles.people}`}>
        {
          data.map((item, index)=>(
            <AuthorCard people={item} page={true} key={index}/>
          ))
        }
          <MorePerson link="/author" text="More Authors" num="2000+"/>
        </div>
        {/* <PopularPerson /> */}
      </section>
      <section className={"mt-50 py-5 " + styles.filtercon}>
        <div className="container ">
          <h2 className={"fs-1 fw-bold " + styles.heading}>
            Discover over 11,000+ authors and their books.
          </h2>
          <BookFilter />
        </div>
      </section>
      {/* <Footer /> */}
    </>
  );
}
