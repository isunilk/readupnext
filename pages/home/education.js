import Link from "next/link";
import Seo from "../../components/common/Seo";
import Footer2 from "../../components/footer/Footer2";
import CopyrightFooter2 from "../../components/footer/CopyrightFooter2";
// import NewsLetter from "../../components/footer/NewsLetter";
import CourseFeatured from "../../components/home-page/home-3/CourseFeatured";
import CourseFilter from "../../components/home-page/home-3/CourseFilter";
// import Faq from "../../components/home-page/home-3/Faq";
import FeatureBlock from "../../components/home-page/home-3/FeatureBlock";
import Hero from "../../components/home-page/home-3/Hero";
// import SignUpBanner from "../../components/home-page/home-3/SignUpBanner";
import Team3 from "../../components/team/Team3";
import Team5 from "../../components/team/Team5";
import Header1 from "../../components/header/Header1";
import NewsLetter from "../../components/footer/NewsLetter";
import { FeatureMedia } from "../../components/home-page/home-3/FeatureMedia";
import Head from "next/head";

const education = () => {
  const homeSchema =  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "ReadUpNext",
    "url": "https://www.readupnext.com/",
    "description": "Explore and find your next recommended books. Search for top picks by influential people, renowned authors, or specific series.",
    "mentions": [
      {
        "@type": "AboutPage",
        "name": "About ReadUpNext",
        "url": "https://www.readupnext.com/about"
      },
      {
        "@type": "ContactPage",
        "name": "Contact ReadUpNext",
        "url": "https://www.readupnext.com/contact"
      },
      {
        "@type": "CollectionPage",
        "name": "Authors",
        "url": "https://www.readupnext.com/author"
      },
      {
        "@type": "CollectionPage",
        "name": "Series",
        "url": "https://www.readupnext.com/series"
      },
      {
        "@type": "CollectionPage",
        "name": "People",
        "url": "https://www.readupnext.com/people"
      },
      {
        "@type": "CollectionPage",
        "name": "Best List",
        "url": "https://www.readupnext.com/list"
      },
      {
        "@type": "CollectionPage",
        "name": "Quotes",
        "url": "https://www.readupnext.com/quotes"
      },
      {
        "@type": "WebPage",
        "name": "Privacy Policy",
        "url": "https://www.readupnext.com/privacy-policy"
      },
      {
        "@type": "WebPage",
        "name": "Affiliate Disclosure",
        "url": "https://www.readupnext.com/affiliate-disclosure"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/readupnext",
      "https://www.twitter.com/readupnext",
      "https://www.pinterest.com/readupnext",
      "https://www.linkedin.com/company/readupnext",
      "https://www.instagram.com/readupnext"
      // ... add other links as needed
    ]
  }

  return (
    <>
      <Seo
        pageTitle="Discover Your Next Recommended Book"
        descr="Explore and find your next good read - recommended books by influential people, handpicked by genre, or curated for specific interests."
        metaTitle="Discover Your Next Recommended Book"
        canonical="/"
        ogImage="https://www.readupnext.com/opengraph_image.png"
      />
      <Head>
        <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }}
        />
      </Head>

      {/* <!--  =============================================
        Theme Header3 Menu
        ============================================== 	--> */}
      {/* <Header3 /> */}
      <Header1 />
      {/* <Header5/> */}
      {/* <!-- 
        =============================================
        Theme Hero Banner
        ============================================== 
        --> */}
      <Hero />
      {/* <!--
        =====================================================
        Feature Section Thirty Nine
        =====================================================
        --> */}
      <div className="fancy-feature-thirtyNine position-relative zn2 pt-10 pb-10 lg-pt-10 lg-pb-10">
        <div className="container">
          <h5 className="fw-normal text-light mb-0 text-center" style={{opacity:"0.7", fontSize:"0.7rem"}}>As Featured in</h5>
          <div className="row gx-xxl-5">
            {/* <FeatureBlock /> */}
            <FeatureMedia/>
          </div>
        </div>
        <img
          src="/images/shape/shape_148.svg"
          alt="shape"
          className="shapes shape-one lazy-img"
        />
        <img
          src="/images/shape/shape_149.svg"
          alt="shape"
          className="shapes shape-two lazy-img"
        />
        <img
          src="/images/shape/shape_150.svg"
          alt="shape"
          className="shapes shape-three lazy-img"
        />
        <img
          src="/images/shape/shape_151.svg"
          alt="shape"
          className="shapes shape-four lazy-img"
        />
      </div>
      {/*
        =====================================================
        Feature Section Forty
        =====================================================
        */}
      <div className="fancy-feature-forty mt-100 lg-mt-50 xl-mt-80">
        <div className="container">
          <div
            className="title-style-one text-center mb-20 lg-mb-15"
            data-aos="fade-up"
          >
            {/* <div className="sc-title text-uppercase">OUR CORUSES</div> */}
            <h2 className="main-title fs-1 fw-500 tx-dark m0">
              Explore 1000+ Books recommended by Influential People
            </h2>
          </div>
        </div>
        {/* End .container */}

        <div className="bg-wrapper m-auto">
          <div className="container d-flex justify-content-center">
            <div className="row justify-content-center col-xxl-11">
              {/* <CourseCategory /> */}
              <Team3 />
            </div>
          </div>
        </div>
        {/* End bg-wrapper */}
      </div>

      {/*
    =====================================================
    Feature Section Forty One
    =====================================================
    */}
      <div className="fancy-feature-fortyOne position-relative mt-50 lg-mt-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-6" data-aos="fade-right">
              <div className="title-style-one mb-40 pt-30 lg-pt-10 lg-mb-20">
                {/* <div className="sc-title text-uppercase">Choose your wish</div> */}
                <h2 className="main-title fw-500 tx-dark mt-50">
                  Books by series
                </h2>
              </div>
              {/* End title */}
              {/* <Faq /> */}
              <p className="tx-dark mb-30 pt-20 lg-pt-20 lg-mb-20">
                Dive into our 'Series' section to discover over 5,900+ book series with all the books arranged in the proper order.
              </p>
              <p className="tx-dark mb-30 pt-20 lg-pt-20 lg-mb-20">
                From fantasy to mystery to romance and beyond, find your next series and read it sequentially with ease.
              </p>

              <Link
                href="/series"
                className="btn-twentyFour fw-400 position-relative d-inline-flex align-items-center me-5 mt-30"
              >
                <span>Explorer All Series</span>
                <img
                  src="/images/icon/icon_123.svg"
                  alt="icon"
                  className="ms-3"
                />
              </Link>
            </div>
            {/* End col-xl-5 */}

            <div
              className="col-xxl-6 col-xl-7 col-lg-6 ms-auto"
              data-aos="fade-left"
            >
              <div className="wrapper position-relative ps-sm-3 ps-lg-5 pe-sm-3 pe-lg-5 md-mt-70">
                <div className="row">
                  <CourseFeatured />
                </div>
                <img
                  src="/images/shape/shape_152.svg"
                  alt="shape"
                  className="lazy-img shapes shape-one"
                />
                <img
                  src="/images/shape/shape_153.svg"
                  alt="shape"
                  className="lazy-img shapes shape-two"
                />
              </div>
              {/* /.wrapper */}
            </div>
            {/* End col-xl-6 */}
          </div>
        </div>
      </div>
      {/* /.fancy-feature-fortyOne */}
      <div className="fancy-feature-forty mt-140 lg-mt-150 xl-mt-150">
        <div className="container">
          <div
            className="title-style-one text-center mb-20 lg-mb-15"
            data-aos="fade-up"
          >
            {/* <div className="sc-title text-uppercase">OUR CORUSES</div> */}
            <h2 className="main-title fs-1 fw-500 tx-dark m0">
              Discover over 11,000+ authors and their books.
            </h2>
            <div className="d-flex justify-content-center">
            <p className="col-lg-8 text-center">Explore our 'Authors' section to discover over 11,000+ authors and their books, listed in the order they were published.</p>

            </div>
          </div>
        </div>
        {/* End .container */}

        <div className="bg-wrapper m-auto">
          <div className="container d-flex justify-content-center">
            <div className="row justify-content-center col-xxl-11">
              {/* <CourseCategory /> */}
              <Team5 />
            </div>
          </div>
        </div>
        {/* End bg-wrapper */}
      </div>
      {/* 
		=============================================
		Feature Section Forty Two
		============================================== 
		*/}
      <div className="fancy-feature-fortyTwo position-relative pt-50 pb-130 mt-80 lg-pt-80 lg-pb-80 xs-mt-120 xl-mt-70">
        <div className="container">
          <div className="wrapper position-relative">
            <div className="title-style-one mb-30">
              <h2 className="main-title fw-500 tx-dark m0">Find Books By Category</h2>
            </div>
            <CourseFilter />
            {/* /.slider-wrapper */}
          </div>
          {/* /.wrapper */}
        </div>
        {/* End .container */}
      </div>

      {/*
		=====================================================
		Footer
		=====================================================
		*/}
      <div className="footer-style-eleven overflow-hidden theme-basic-footer position-relative">
        <div className="bg-wrapper position-relative">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-xl-3 footer-intro mb-40">
                <div className="logo">
                  <Link href="/" className="fs-3 text-dark fw-bold">
                    <img src="/images/assets/logo-4.webp" alt="" width={250} />
                  </Link>
                  <p style={{ color: "gray" }}>Discover Your Next Recommended Book</p>
                </div>
              </div>
              {/* End .col */}

              <Footer2 />

              <div className="col-xl-4 col-lg-5 mb-30 form-widget">
                <h5 className="fs-6 text-uppercase mb-20 fw-bold">Newsletter</h5>
                <h6 className="footer-title tx-dark fw-normal pt-15 pb-20 mb-0 md-pt-10">Join our newsletter</h6>
                <NewsLetter />
                <div className="fs-14 mt-10">
                  We only send interesting and relevant emails.
                </div>
              </div>
              {/* End .col-xl-4 */}
            </div>
            {/* End .row */}
          </div>
          {/* /.container */}
        </div>
        {/* /.bg-wrapper */}
        <CopyrightFooter2 />
        {/* /.bottom-footer */}
        <img
          src="/images/shape/shape_158.svg"
          alt="shape"
          className="lazy-img shapes shape-one"
        />
      </div>
      {/* /.footer-style-eleven */}
    </>
  );
};

export default education;
