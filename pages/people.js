import Seo from "../components/common/Seo";
import DefaultFooter from "../components/footer/DefaultFooter";
import Team1 from "../components/team/Team1";
import Header1 from "../components/header/Header1";
import { useEffect, useRef, useState } from "react";
import { Search } from "../components/team/Search";
import SearchBar1 from "../components/team/SearchBar1";
import SearchBar2 from "../components/team/SearchBar2";
import People_category from "../components/category/People_category";
import { usePathname } from "next/navigation";
import Head from "next/head";

const recommenderCategories = [
  "Actor",
  "Athlete",
  "Author",
  "Billionaire",
  "BookToker",
  "Chef",
  "Comedian",
  "Doctor",
  "Entrepreneur",
  "Executive",
  "Filmmaker",
  "Fitness",
  "Investor",
  "Journalist",
  "Model",
  "Musician",
  "Other",
  "Politician",
  "Producer",
  "Scientist"
]



const TeamV1 = () => {
  const [authors, setAuthors] = useState([])
  // const [peopleList, setPeoplelist] = useState([])
  const [styleTop, setStyleTop] = useState(75)
  const authorsCount = useRef(0);
  const [call, setCall] = useState(true);
  const scrollActive = useRef(true);

  const pathName = usePathname();

  const getAuthor = async (page) => {
    try {
      let data = await fetch(`/api/authors?list=${page}`, {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${process.env.NEXT_PUBLIC_FRONTEND_KEY}`
        }
      })
      data = await data.json();
      if (page <= 0) {
        setAuthors(data)
      } else {
        setAuthors((prev) => [...prev, ...data]);
      }
      authorsCount.current = page + 1
      setCall(false)
    } catch (err) {
      console.log(err)
    }
  }


  const peopleSearch = async (category) => {
    try {
      let res = await fetch(`/api/peopleCat?category=${category}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${process.env.NEXT_PUBLIC_FRONTEND_KEY}`
        }
      })

      res = await res.json();
      if (res) {
        setAuthors(res);
      }
      scrollActive.current = false;
    } catch (err) {
      console.log(err)
    }
  }

  const handelScroll = () => {
    let scrollHeight = document.documentElement.scrollHeight;
    let innerHieght = window.innerHeight;
    let scrollTop = document.documentElement.scrollTop
    let eightyPre = (scrollHeight / 10) * 9

    if (eightyPre <= (innerHieght + scrollTop) && scrollActive.current) {
      setCall(true);
    }


    // for sticky position ===============
    // =========================================
    let scrolltopDiv = document.querySelector(".fancy-feature-fiftyOne")
    scrolltopDiv = scrolltopDiv ? scrolltopDiv.scrollHeight : null;

    let sticky = document.querySelector(".people-category-list.fixed")
    let changeClass = document.querySelector(".people-category-list")
    let footerHeight = document.querySelector(".footer-style-eleven").scrollHeight;
    let cardContainerH = document.querySelector(".peopleCard")
    cardContainerH = cardContainerH ? cardContainerH.scrollHeight : 0;

    if (scrollTop > (scrolltopDiv - 70) && !sticky && (innerHieght < cardContainerH)) {
      changeClass !== null ? changeClass.classList.add("fixed") : null
    }
    if (scrollTop < (scrolltopDiv + 150)) {
      changeClass !== null ? changeClass.classList.remove("fixed") : null
    }

    // handle category position ============================
    // =====================================================
    let fixedDiv = document.querySelector(".people-category-list.fixed")
    if (scrollTop > (scrollHeight - footerHeight - innerHieght)) {
      if (fixedDiv) {
        console.log("condition true after .fixed")
        setStyleTop(-(scrollTop - (scrollHeight - footerHeight - innerHieght + 25)))
      }
    } else {
      if (fixedDiv) {
        if (window.innerWidth >= 768) {
          styleTop !== "75" ? setStyleTop(75) : null;
        } else {
          styleTop !== "50" ? setStyleTop(47) : null
        }
      }
    }
  }



  // this is for People Categories function==================================================
  const peopleCategory = (index, category) => {
    let liList = document.querySelectorAll(".people-category-li")

    let firstSibling = document.getElementsByClassName("active-category-sibling1")[0];
    firstSibling ? firstSibling.classList.remove("active-category-sibling1") : null;

    let secondSibling = document.getElementsByClassName("active-category-sibling2")[0];
    secondSibling ? secondSibling.classList.remove("active-category-sibling2") : null

    document.querySelector(".active-people").classList.remove("active-people");

    liList[index].classList.add("active-people");

    liList[index - 1] ?
      liList[index - 1].classList.add("active-category-sibling1")
      : null;

    liList[index + 1] ?
      liList[index + 1].classList.add("active-category-sibling2")
      : null;

    if (category === "All") {
      getAuthor(0);
      scrollActive.current = true;
    } else {
      // setAuthors([])
      peopleSearch(category)
    }

    let targetRemove = document.querySelector(".people-category ul.active")
    setTimeout(() => {
      targetRemove ? targetRemove.classList.remove("active") : null
    }, 500);
    // window.innerWidth >= 768 ? scrollTo(0, 0) : null;
    scrollTo(0, 0)

    return authorsCount.current = 0;
  }

  const showhideCategory = () => {
    let targetLink = document.querySelector(".people-category ul")
    let targetRemove = document.querySelector(".people-category ul.active")
    let width = window.innerWidth;
    if ((targetRemove === null) && (width < 768)) {
      targetLink.classList.add("active")
    } else {
      targetRemove ? targetRemove.classList.remove("active") : null
    }
  }



  useEffect(() => {
    window.addEventListener("scroll", handelScroll)
    if (window.innerWidth < 768) {
      setStyleTop(47)
    }
  }, [])


  useEffect(() => {
    if (call) {
      getAuthor(authorsCount.current)
    }
  }, [call])

  const influentialPeopleSchema ={
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
              "@id": "https://www.readupnext.com/people",
              "name": "List of Influential People"
            }
          }
        ]
      },
      {
        "@type": "CollectionPage",
        "@id": "https://www.readupnext.com/people",
        "name": "Find Books Recommended by Influential People",
        "description": "This is a collection of book recommendations by 750+ influential figures. Discover the books that inspire and shape some of the world's greatest minds, from entrepreneurs and artists to scientists and leaders.",
        "about": {
          "@type": "ItemList",
          "numberOfItems": "764",
          "description": "List of influential figures and their Recommended books."
        }
      }
    ]
  }

  return (
    <>
      <Seo
        pageTitle="Find Books Recommended by  Influential People"
        descr="This is a collection of book recommendations by 700+ influential figures. Discover the books that inspire and shape some of the world's greatest minds, from entrepreneurs, and artists to scientists and leaders."
        metaTitle="Find Books Recommended by  Influential People"
        canonical={pathName}
        ogImage="https://www.readupnext.com/opengraph_image.png"
      />
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(influentialPeopleSchema) }}
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
      <div className="fancy-feature-fiftyOne position-relative sm-mt-120 mt-150 sm-mb-20 mb-60">
        <div className="container">
          <div className="row">
            <div className="col-lg-12" data-aos="fade-right">
              <div className="title-style-five d-flex flex-column align-items-center">
                {/* <div className="sc-title-two fst-italic position-relative">
                  Our Team
                </div> */}
                <h1 className="main-title fw-500 tx-dark">
                  Find Books Recommended by  Influential People
                </h1>
                <p className="col-lg-10 col-xl-9 text-center"> This is a collection of book recommendations by 700+ influential figures. Discover the books that inspire and shape some of the world's greatest minds, from entrepreneurs, and artists to scientists and leaders.</p>
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
        <div className="container d-flex flex-column flex-md-row gap-3">
          <div className="people-category col-lg-3 col-md-4">
            <div className="people-category-list" style={{ top: `${styleTop}px` }}>
              <h2 className="fs-15 pb-2 pt-2 pt-md-0" style={{ borderBottom: "2px solid #ffce4c" }} onClick={showhideCategory}>People Types <span className="d-md-none float-right"><i className="bi bi-caret-down-fill"></i></span></h2>
              <ul className="p-0">
                <li className="people-category-li list-group-item pt-1 active-category-sibling1"></li>
                <li key={0} onClick={() => { peopleCategory(1, "All") }} className="people-category-li active-people list-group-item d-flex justify-content-sm-between py-2 px-3">All</li>
                {
                  recommenderCategories.map((item, index) => {
                    return (
                      <li key={index + 1} onClick={() => { peopleCategory(index + 2, item) }} className={`people-category-li list-group-item d-flex justify-content-sm-between py-2 px-3 ${index === 0 ? "active-category-sibling2" : ""}`}>
                        <span>{item}</span>
                        {/* <span>{item.peopleNo}</span> */}
                      </li>
                    )
                  })
                }
                <li className="people-category-li list-group-item pt-1"></li>
              </ul>
            </div>
          </div>
          <div className="peopleCard wrapper border-bottom pb-120 lg-pb-80 position-relative">
            <div className="row gap-3 ps-3 justify-content-center">
              <Team1 data={authors} />
            </div>
            {/* /.row */}
            <div className="justify-content-center" style={{ display: call ? "flex" : "none" }}>
              <SearchBar2 />
            </div>
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
      <div className='position-fixed top-0 start-0 justify-content-center align-items-center w-100 h-100' style={{ display: authors.length > 0 ? "none" : "flex", background: "#ffffffeb", zIndex: "20" }}>
        <SearchBar1 />
      </div>
      <DefaultFooter />
    </>
  );
};

export default TeamV1;
