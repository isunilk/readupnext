import Seo from "../components/common/Seo";
import DefaultFooter from "../components/footer/DefaultFooter";
import Team1 from "../components/team/Team1";
import Header1 from "../components/header/Header1";
import { useEffect, useRef, useState } from "react";
import { Search } from "../components/team/Search";
import SearchBar1 from "../components/team/SearchBar1";
import SearchBar2 from "../components/team/SearchBar2";
import People_category from "../components/category/People_category";
import AuthorMap from "../components/team/AuthorMap";
import InfiniteScroll from "react-infinite-scroll-component";
import { usePathname } from "next/navigation";
import Head from "next/head";




const TeamV1 = () => {
  const [authors, setAuthors] = useState([])
  const pathName = usePathname();
  // const [peopleList, setPeoplelist] = useState([])
  // const [styleTop, setStyleTop] = useState(75)
  const authorsCount = useRef(0);
  // const [call, setCall] = useState(true);
  // const scrollActive = useRef(true);

  const getAuthor = async (page) => {
    try {
      // console.log("api call for page no.", page)
      let data = await fetch(`/api/series_authors?page=${page}`)
      data = await data.json();
      if (page <= 0) {
        setAuthors(data)
      } else {
        setAuthors((prev) => [...prev, ...data]);
      }
      authorsCount.current = page + 1
      // setCall(false)
    } catch (err) {
      console.log(err)
    }
  }



  useEffect(() => {
    // if (call) {
    //   getAuthor(authorsCount.current)
    // }
    if (authors.length <= 0) {
      getAuthor(authorsCount.current)
    }
  }, [])

  const callApi = () => {
    getAuthor(authorsCount.current)
  }

  const authorSchema = {
    "@context": "http://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "item": {
              "@id": "https://www.readupnext.com/",
              "name": "Home"
            }
          },
          {
            "@type": "ListItem",
            "position": 2,
            "item": {
              "@id": "https://www.readupnext.com/author",
              "name": "Authors"
            }
          }
        ]
      },
      {
        "@type": "CollectionPage",
        "@id": "https://www.readupnext.com/author",
        "name": "Find books written by your favorite Authors, all in order.",
        "description": "Explore our 'Authors' section to discover over 11,000+ authors and their books, listed in the order they were published.",
        "about": {
          "@type": "ItemList",
          "numberOfItems": "11459",
          "description": "List of 11,000+ authors and their books in order."
        }
      }
    ]
  }

  return (
    <>
      <Seo
        pageTitle="Find books written by your favorite Authors, all in order."
        descr="Explore our extensive list of 11000+ Authors and their books in order they were released or written."
        metaTitle="Find books written by your favorite Authors, all in order."
        canonical={pathName}
        ogImage="https://www.readupnext.com/opengraph_image.png"
      />
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(authorSchema) }}
        />
      </Head>
      {/* <!-- 
      =============================================
      Theme Default Menu
      ============================================== 	
      --> */}
      {/* <DefaulHeader /> */}
      <Header1 />
      {/* 
        =============================================
        Feature Section Fifty One
        ============================================== 
        */}
      <div className="fancy-feature-fiftyOne position-relative sm-mt-120 mb-60 sm-mb-20 mt-150">
        <div className="container">
          <div className="row">
            <div className="col-lg-12" data-aos="fade-right">
              <div className="title-style-five d-flex flex-column align-items-center">
                {/* <div className="sc-title-two fst-italic position-relative">
                  Our Team
                </div> */}
                <h1 className="main-title fw-500 tx-dark">
                  Find books written by your favorite Authors, all in order.
                </h1>
                <p className="col-lg-10 col-xl-9 text-center">Explore our 'Authors' section to discover over 11,000+ authors and their books, listed in the order they were published. Search for your favorite author and see all the books they've written in sequence.</p>
                {/* <div className="col-lg-5">
                  <Search searchField="people" placehold="Search any person. Ex- Bill Gates" />
                </div> */}
              </div>
            </div>
          </div>
        </div>
        {/* /.container */}

        <img
          src="/images/shape/shape_172.svg"
          alt="shap"
          className="lazy-img shapes shape-two"
        />
        <img
          src="/images/shape/shape_175.svg"
          alt="shap"
          className="lazy-img shapes shape-three"
        />
      </div>

      {/*
			=====================================================
				Team Section Two
			=====================================================
			*/}
      <div className="team-section-two mt-20">
        <div className="container d-flex flex-column flex-md-row gap-3 w-100">
          <div className="peopleCard wrapper border-bottom pb-120 lg-pb-80 position-relative w-100">
            <InfiniteScroll
              dataLength={authors.length} //This is important field to render the next data
              next={callApi}
              className="w-100 overflow-hidden"
              hasMore={4305 !== authors.length}
              loader={<div className="d-flex justify-content-center" >
                <SearchBar2 />
              </div>}
              endMessage={
                <p style={{ textAlign: 'center' }}>
                  <b>Yay! You have seen it all</b>
                </p>
              }
            >
              <div className="row gap-3 justify-content-center">
                <AuthorMap data={authors} />
              </div>

            </InfiniteScroll>
            {/* /.row */}
            {/* <div className="justify-content-center" style={{ display: call ? "flex" : "none" }}>
              <SearchBar2 />
            </div> */}
            {/* <CallToAction /> */}
            {/* End  call to action*/}
          </div>
          {/* /.wrapper */}
        </div>
        {/* /.container */}
      </div>
      {/* /.team-section-two */}

      {/* 
        =============================================
        Contact Section One
        ============================================== 
        */}
      {/* <div className='position-fixed top-0 start-0 justify-content-center align-items-center w-100 h-100' style={{ display: authors.length > 0 ? "none" : "flex", background: "#ffffffeb", zIndex: "20" }}>
        <SearchBar1 />
      </div> */}
      <DefaultFooter />
    </>
  );
};

export default TeamV1;
