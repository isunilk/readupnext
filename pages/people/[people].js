"use client";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Header1 from "../../components/header/Header1";
import PeopleBooks from "../../components/team/PeopleBooks";
import PeopleList_layout from "../../components/team/PeopleList_layout";
import SearchBar1 from "../../components/team/SearchBar1";
import DefaultFooter from "../../components/footer/DefaultFooter";
import Seo from "../../components/common/Seo";
import Link from "next/link";
import Faq from "../../components/team/Faq";
import Team1 from "../../components/team/Team1";
import { PeopleHero } from "../../components/hero/PeopleHero";
import { usePathname } from "next/navigation";
import Pricing from "../404";
import Head from "next/head";
const People = ({ data, errorCode }) => {
  if (errorCode) {
    return <Pricing />;
  }
  const router = useRouter();
  if (router.isFallback) {
    return <SearchBar1 />; // loader
  }

  const [details, setDetails] = useState(
    data ? { main_p: data[0].recommender, other_p: data[1] } : null
  );
  const [recomData, setRecomdata] = useState(data[0].books);
  const [changelay, setLayout] = useState(false);
  const [loading, setLoading] = useState(false);

  const pathName = usePathname();

  // show more selector function=========
  let selector = () => {
    console.log("run on data change");
    let tartget = document.querySelectorAll(".recommended-parent");
    tartget.forEach((item) => {
      // console.log("run")
      let nameDiv = item.querySelector(".recommended-people");
      if (window.innerWidth > 768) {
        // console.log("first condition")
        nameDiv.style.maxHeight = "300px";
      } else {
        // console.log("second condition")
        nameDiv.style.maxHeight = "50px";
      }
      // nameDiv.style.maxHeight="50px";
      item.querySelector(".fadeup-div").style.display = "flex";
      if (nameDiv.scrollHeight < 330 && window.innerWidth > 767) {
        // console.log(nameDiv.scrollHeight, nameDiv.innerText)
        item.querySelector(".fadeup-div").style.display = "none";
      }
      if (nameDiv.scrollHeight <= 50 && window.innerWidth < 768) {
        item.querySelector(".fadeup-div").style.display = "none";
      }
    });
  };

  useEffect(() => {
    if (data) {
      setRecomdata(data[0].books);
      setDetails({ main_p: data[0].recommender, other_p: data[1] });
    }
  }, [data]);
  useEffect(() => {
    if (recomData) {
      selector();
    }
    // console.log("this is run again")
  }, [recomData]);

  // for Image not Loaded then change image url^^^^^^^^^^^

  const peopleSchema = {
    "@context": "http://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            item: {
              "@id": "https://www.readupnext.com/",
              name: "Home",
            },
          },
          {
            "@type": "ListItem",
            position: 2,
            item: {
              "@id": "https://www.readupnext.com/people",
              name: "List of Influential People",
            },
          },
          {
            "@type": "ListItem",
            position: 3,
            item: {
              "@id": `https://www.readupnext.com/people/${details.main_p.slug}`,
              name: "List of Influential People",
            },
          },
        ],
      },
      {
        "@type": "CollectionPage",
        name: `${details.main_p.name} Book Recommendations`,
        description: `A collection of books recommended by ${details.main_p.name}.`,
        image: details.main_p.imageUrl,

        about: {
          "@type": "Person",
          name: details.main_p.name,
          description: details.main_p.bio,
          image: details.main_p.imageUrl,
        },

        hasPart: recomData.map((item, index) => ({
          "@type": "Book",
          name: item.title,
          // "datePublished": "2014-09-16",
          image: item.imageUrl,
          author: {
            "@type": "Person",
            name: item.authorName,
          },
          mentions: item.expertRecommenders.map((person) => ({
            "@type": "Person",
            name: person.name,
          })),

          review: {
            "@type": "Review",
            reviewBody: item.quote,
            author: {
              "@type": "Person",
              name: details.main_p.name,
            },
          },
        })),
      },
    ],
  };

  return (
    <>
      <Seo
        pageTitle={`${details ? details.main_p.name : null} Recommended Books`}
        descr={details ? details.main_p.metadata.description : null}
        metaTitle={`${
          details ? details.main_p.booksCount : null
        } Books recommended by ${
          details ? details.main_p.name : null
        } (Complete List)`}
        canonical={pathName}
        ogImage={details.main_p.imageUrl}
      />
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(peopleSchema) }}
        />
        {/* <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(bookListSchema) }}
                /> */}
      </Head>
      <Header1 />
      {/* {console.log(details)} */}
      <PeopleHero details={details} />

      <div className="container team-section-two d-flex flex-column align-items-center">
        <div
          className="d-flex align-items-center col-12 pt-30 justify-content-between"
          style={{ borderBottom: "3px solid #c475e3" }}
        >
          <h2 className="fs-20 fw-500 tx-new w-75">
            {details ? details.main_p.booksCount : null} Books recommended by{" "}
            {details ? details.main_p.name : null}
          </h2>
          <div className="me-2 col-3 text-end" style={{ fontSize: "25px" }}>
            <i
              onClick={() => {
                setLayout(false);
              }}
              title="list layout"
              className="fa fa-list-ul me-2 cursor-pointer"
              aria-hidden="true"
            ></i>
            <i
              onClick={() => {
                setLayout(true);
              }}
              title="grid layout"
              className="bi bi-grid-fill cursor-pointer"
            ></i>
          </div>
        </div>
        <div
          className="pe-3 ps-3 ps-xxl-5 pe-xxl-5 col-lg-11"
          style={{ overflow: "hidden", display: changelay ? "block" : "none" }}
        >
          <div className="row justify-content-center gap-2">
            <PeopleBooks data={recomData} />
          </div>
        </div>
        <div
          className="w-100"
          style={{ display: changelay ? "none" : "block" }}
        >
          <PeopleList_layout
            data={recomData}
            person={details ? details.main_p : null}
          />
        </div>
      </div>
      {details ? (
        details.main_p.metadata.questions_answers ? (
          <div className="container d-flex flex-column justify-content-center align-items-center mt-70 mb-50">
            <h2 className="text-center fs-1">FAQs</h2>
            <div className="col-lg-10">
              <Faq faq={details.main_p.metadata.questions_answers} />
            </div>
          </div>
        ) : null
      ) : null}
      <div className="container peopleCard wrapper border-bottom pb-120 lg-pb-80 position-relative mt-100">
        <h2 className="fs-20 text-center mb-50 text-decoration-underline">
          Other people you might be interested in
        </h2>
        <div className="row justify-content-center gap-sm-3 gap-2">
          {details ? <Team1 data={details.other_p} /> : null}
          <div className="col-lg-2 col-md-3 col-sm-5 col-6 d-flex">
            <Link
              style={{
                background: "var(--prime-eleven)",
                borderRadius: "15px",
                minHeight: "13rem",
              }}
              href="/people"
              className="team-block-two d-flex flex-column justify-content-center align-items-center mb-40"
            >
              <h3>750+</h3>
              <p className="text-dark fw-500 text-center mx-1">
                Explore More People
              </p>
              <img
                src="/images/icon/icon_134.svg"
                style={{ maxHeight: "20px" }}
                alt=""
                className="mx-auto"
              />
            </Link>
            {/* /.card-style-eighteen */}
          </div>
        </div>
      </div>

      <div
        className="position-fixed top-0 start-0 justify-content-center align-items-center w-100 h-100"
        style={{
          display: recomData ? "none" : "flex",
          background: "#ffffffeb",
          zIndex: "20",
        }}
      >
        <SearchBar1 />
      </div>
      <DefaultFooter />
    </>
  );
};

// export async function getServerSideProps(Context) {
//   // Fetch data from external API
//   const { people } = Context.query;
//   const res = await fetch(
//     `${process.env.NEXT_API_URL}/api/recommnended-books?name=${people}`
//   );
//   // revalidateTag("people")
//   const errorCode = res.ok ? false : res.status;
//   const data = await res.json();
//   // console.log(data)
//   // Pass data to the page via props

//   return { props: { data, errorCode } };
// }

export async function getStaticProps({ params }) {
  const { people } = params;

  const res = await fetch(
    `${process.env.NEXT_API_URL}/api/recommnended-books?name=${people}`
  );
  const errorCode = res.ok ? false : res.status;
  const data = await res.json();

  return {
    props: {
      data,
      errorCode,
    },
    revalidate: 15552000, // Revalidate at most once every 6 months
  };
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}

export default People;
