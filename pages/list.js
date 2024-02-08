"use client";
import { useEffect, useRef, useState } from "react";
import Header1 from "../components/header/Header1";
import ListMap from "../components/team/ListMap";
import SearchBar1 from "../components/team/SearchBar1";
import SearchBar2 from "../components/team/SearchBar2";
import { Search } from "../components/team/Search";
import DefaultFooter from "../components/footer/DefaultFooter";
import Seo from "../components/common/Seo";
import { usePathname } from 'next/navigation'
import Head from "next/head";
// import InfiniteScroll from "react-infinite-scroll-component";

const List = () => {
  const [category, setCategory] = useState([]);
  const [list, setlist] = useState([]);
  const [styleTop, setStyleTop] = useState(75)
  const [call, setCall] = useState(false);
  const scrollActive = useRef(true);
  const page = useRef(0);

  const pathName = usePathname();
  // const [sticky, setSticky] = useState("");

  const get_list = async () => {
    let res = await fetch(`/api/list-name`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        "Authorization": `Bearer ${process.env.NEXT_PUBLIC_FRONTEND_KEY}`
      }
    })
    res = await res.json();
    setCategory(res);
  }

  const getlist = async (searchList) => {
    try {
      let res = await fetch(`/api/list?page=${page.current}`, {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          "Authorization": `Bearer ${process.env.NEXT_PUBLIC_FRONTEND_KEY}`
        }
      })
      res = await res.json();
      if (res) {
        if (searchList <= 0) {
          setlist(res);

        } else {
          setlist((prev) => [...prev, ...res])
        }
        page.current = page.current + 1
      }
      setCall(false)
    } catch (err) {
      console.log(err)
    }
  }


  const list_Search = async (category) => {
    try {
      let res = await fetch(`/api/list?category=${category}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${process.env.NEXT_PUBLIC_FRONTEND_KEY}`
        }
      })

      res = await res.json();
      setlist(res);
      scrollActive.current = false
    } catch (err) {
      console.log(err)
    }
  }
  // let scrolled = 0;
  const handelScroll = () => {
    let scrollHeight = document.documentElement.scrollHeight;
    let innerHieght = window.innerHeight;
    let scrollTop = document.documentElement.scrollTop
    let eightyPre = (scrollHeight / 10) * 9

    if (eightyPre <= (innerHieght + scrollTop)) {
      if (scrollActive.current) {
        setCall(true);
      }
    }

    let scrolltopDiv = document.querySelector(".fancy-feature-fiftyOne")
    scrolltopDiv = scrolltopDiv ? scrolltopDiv.scrollHeight : null;

    let sticky = document.querySelector(".list-category-div.fixed")
    let changeClass = document.querySelector(".list-category-div")
    let footerHeight = document.querySelector(".footer-style-eleven").scrollHeight;

    if (scrollTop > (scrolltopDiv - 70) && !sticky) {
      changeClass !== null ? changeClass.classList.add("fixed") : null
    }
    if (scrollTop < (scrolltopDiv + 150)) {
      changeClass !== null ? changeClass.classList.remove("fixed") : null
    }

    // handle category position ============================
    // =====================================================
    if (scrollTop > (scrollHeight - footerHeight - innerHieght)) {
      setStyleTop(-(scrollTop - (scrollHeight - footerHeight - innerHieght + 25)))
    } else {
      if (window.innerWidth < 768) {
        styleTop !== "50" ? setStyleTop(47) : null;

      } else {
        styleTop !== "75" ? setStyleTop(75) : null;
      }
    }
  }

  useEffect(() => {
    if (call) {
      getlist(page.current)
    }
  }, [call])

  let x = 0
  useEffect(() => {
    if (x === 0) {
      setTimeout(() => {
        window.addEventListener("scroll", handelScroll)
      }, [1000])
      getlist(page.current)
      get_list()
      x++
    }
    window.innerWidth > 768 ? setStyleTop(47) : null;
  }, [])




  const lidetactor = (index, category) => {
    let liList = document.querySelectorAll('.books-category-li')
    let firstSibling = document.getElementsByClassName("active-category-sibling1")[0];
    firstSibling ? firstSibling.classList.remove("active-category-sibling1") : null;

    let secondSibling = document.getElementsByClassName("active-category-sibling2")[0];
    secondSibling ? secondSibling.classList.remove("active-category-sibling2") : null

    document.getElementsByClassName("active-category")[0].classList.remove("active-category")

    liList[index].classList.add("active-category")

    liList[index - 1] ?
      liList[index - 1].classList.add("active-category-sibling1")
      : null;

    liList[index + 1] ?
      liList[index + 1].classList.add("active-category-sibling2")
      : null;

    let remove = document.querySelector(".category ul.active")
    setTimeout(() => {
      remove !== null ? remove.classList.remove("active") : null;
    }, 500)
    scrollTo(0, 0);


    if (category === "All") {
      getlist(0)
      // console.log("if true")
      scrollActive.current = true;
    } else {
      // console.log("eles true")
      list_Search(category)
    }
    // setlist([])
    return page.current = 0
  }


  const showhideCategory = () => {
    let targetLink = document.querySelector(".category ul")
    let targetRemove = document.querySelector(".category ul.active")
    let width = window.innerWidth;
    if ((targetRemove === null) && (width < 768)) {
      targetLink.classList.add("active")
    } else {
      targetRemove ? targetRemove.classList.remove("active") : null
    }
  }






  const listSchema = {
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
              "@id": "https://www.readupnext.com/list",
              "name": "Best Books List Across 1300 Categories"
            }
          }
        ]
      },
      {
        "@type": "CollectionPage",
        "@id": "https://www.readupnext.com/best-books-list",
        "name": "Best Books List Across 1300 Categories (Our TopPicks)",
        "description": "Explore our 'Best Books List', curated by scanning the web and sourcing expert recommendations. With 1300+ categories, find top picks from music to engineering and more. Your next great read awaits.",
        "about": {
          "@type": "ItemList",
          "numberOfItems": "1329",
          "description": "List of top book categories."
        }
      }
    ]
  }

  return (
    <>
      <Seo
        pageTitle="Best Books List Across 1300 Categories (Our Top Picks)"
        descr="Dive into our 'Best Books List' section with over 1300 categories. Discover top picks from music to engineering, psychology, and self-help."
        metaTitle="Best Books List Across 1300 Categories (Our Top Picks)"
        canonical={pathName}
        ogImage="https://www.readupnext.com/opengraph_image.png"
      />
      <Head>
      <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(listSchema),
          }}
        />
      </Head>
      <Header1 />
      <div className="fancy-feature-fiftyOne position-relative sm-mt-120 sm-mb-20 mb-60 mt-150">
        <div className="container">
          <div className="row">
            <div className="col-lg-12" data-aos="fade-right">
              <div className="title-style-five d-flex flex-column align-items-center">
                {/* <div className="sc-title-two fst-italic position-relative">
                  Best Books
                </div> */}
                <h1 className="main-title fw-500 tx-dark mb-10">
                  Best Books List Across 1300 Categories (Our TopPicks) .
                </h1>
                <p className="col-lg-10 col-xl-9 text-center">Explore our 'Best Books List', curated by scanning the web and sourcing expert recommendations. With 1300+ categories, find top picks from music to engineering and more. Your next great read awaits.</p>
                {/* <div className="col-md-7">
                  <Search searchField="list" placehold='Search any category. Ex- Horror Books, Funny Books...' />
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

      <div className="container team-section-two mt-20 d-flex flex-column flex-md-row gap-3 overflow-hidden">
        <div className="category col-lg-3 col-md-4 sm-mt-10 mt-40">
          <div className="list-category-div" style={{ top: `${styleTop}px` }}>
            <h2 className="fs-15 pb-2 pt-2 pt-md-0" style={{ borderBottom: "2px solid #ffce4c" }} onClick={showhideCategory}>Best Books Category <span className="d-md-none float-right"><i className="bi bi-caret-down-fill"></i></span></h2>
            <ul className="p-0">
              <li className="books-category-li list-group-item pt-1 active-category-sibling1"></li>
              <li onClick={() => { lidetactor(1, "All") }} className="active-category books-category-li list-group-item d-flex justify-content-sm-between py-2 px-3">
                <span>All</span>
              </li>
              {
                category.map((item, index) => {
                  return (
                    <li onClick={() => { lidetactor(index + 2, item._id) }} className={index == 0 ? "books-category-li list-group-item d-flex justify-content-sm-between py-2 px-3 active-category-sibling2" : "books-category-li list-group-item d-flex justify-content-sm-between py-2 px-3"} key={index}>
                      <span>{item._id}</span>
                    </li>
                  )
                })
              }
              <li className="books-category-li list-group-item pt-1"></li>
            </ul>
          </div>
        </div>
        <div className="pe-3 ps-3 ps-xxl-5 pe-xxl-5 col-md-8 col-lg-9 col-12 sm-mt-10 mt-40">
            <div className="row justify-content-around">
              <ListMap data={list} />
            </div>
          <div className="justify-content-center" style={{ display: call ? "flex" : "none" }}>
            <SearchBar2 />
          </div>
          {/* /.row */}
        </div>
        {/* End pe-3 */}
        <div className='position-fixed top-0 start-0 justify-content-center align-items-center w-100 h-100' style={{ display: list.length > 0 ? "none" : "flex", background: "#ffffffeb", zIndex: "20" }}>
          <SearchBar1 />
        </div>
      </div>
      <DefaultFooter />
    </>
  )
}

export default List;