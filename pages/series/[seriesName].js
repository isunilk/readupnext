import { useRouter } from "next/router";
import Header1 from "../../components/header/Header1";
import { useEffect, useState } from "react";
import Series1 from "../../components/team/Series1";
import DefaultFooter from "../../components/footer/DefaultFooter";
import List_layout from "../../components/team/List_layout";
import SearchBar1 from "../../components/team/SearchBar1";
import Seo from "../../components/common/Seo";
import { selectorShow } from "../../components/common/commen";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import SeriesMap from "../../components/team/SeriesMap";
import Pricing from "../404";
import Head from "next/head";

const SeriesDetail = ({ data, errorCode }) => {
  if (errorCode) {
    return <Pricing />;
  }

  const router = useRouter();
  if (router.isFallback) {
    return <SearchBar1 />; // loader
  }

  const [seriesBooks, setSeriesBooks] = useState(data.books);
  const [changelay, setLayout] = useState(false);
  const [seriesDetail, setSeriesDetail] = useState(data.seriesDetails);

  const pathName = usePathname();

  // const router = useRouter()
  // const searchName = router.query.seriesName

  // const getBooksOfSeries = async (series) => {
  //     try {
  //         let res = await fetch(`/api/series_books?name=${series}`, {
  //             method: "POST",
  //             headers: {
  //                 "Content-Type": "application/json",
  //                 "Authorization": `Bearer ${process.env.NEXT_PUBLIC_FRONTEND_KEY}`,
  //             }
  //         })
  //         res = await res.json()
  //         setSeriesBooks(res.books)
  //         setSeriesDetail(res.seriesDetails)
  //     } catch (err) {
  //         console.log(err)
  //     }
  // }

  // useEffect(() => {
  //     if (searchName) {
  //         // console.log(searchName)
  //         getBooksOfSeries(searchName.replace("-books-in-order",""))
  //     }
  // }, [searchName])
  const onBookImageError = (e) => {
    e.target.src = "/images/assets/nullBook.PNG";
  };

  useEffect(() => {
    if (seriesBooks && window.innerWidth < 768) {
      selectorShow();
    }
  }, [seriesBooks]);

  useEffect(() => {
    setSeriesBooks(data.books);
    setSeriesDetail(data.seriesDetails);
  }, [data]);

  const bookSeriesSchema = {
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
              "@id": "https://www.readupnext.com/series",
              name: "Find your favorite Book Series & read them in perfect order",
            },
          },
          {
            "@type": "ListItem",
            position: 3,
            item: {
              "@id": `https://www.readupnext.com/series/${seriesDetail.series_slug}-books-in-order`,
              name: "Find your favorite Book Series & read them in perfect order",
            },
          },
        ],
      },
      {
        "@type": "CollectionPage",
        name: `${seriesDetail.series_name} Books in Order (by Author ${seriesBooks[0].authorName})`,
        description: `Find all “${seriesDetail.series_name}” books in order. Every book of the series is listed in the order of its release to ensure you read the story as it was intended.`,
        // "image": "[URL to a banner or image representing the Harry Potter collection]",

        hasPart: seriesBooks.map((item, index) => ({
          "@type": "Book",
          name: item.title,
          author: {
            "@type": "Person",
            name: item.authorName,
          },
          image: item.BookimageUrl,
          datePublished: item.yearPublished,
          aggregateRating:
            item.rating > 0
              ? {
                  "@type": "AggregateRating",
                  ratingValue: item.rating,
                  ratingCount: item.reviewCount,
                }
              : null,
          mentions: item.recommenders.map((person) => ({
            "@type": "Person",
            name: person.name,
          })),
        })),
      },
    ],
  };

  return (
    <>
      <Seo
        pageTitle={`${
          seriesDetail ? seriesDetail.series_name : "series"
        } Books in Order (by Author ${seriesBooks[0].authorName})`}
        descr={`Discover the ${
          seriesDetail ? seriesDetail.series_name : "series"
        } book series in their intended order. Experience the series seamlessly, ensuring you don't miss a single magical moment.`}
        metaTitle={`${
          seriesDetail ? seriesDetail.series_name : "series"
        } Books in Order (by Author ${seriesBooks[0].authorName})`}
        canonical={pathName}
        ogImage={
          seriesDetail.imgArr[0]
            ? seriesDetail.imgArr[0]
            : "https://www.readupnext.com/opengraph_image.png"
        }
      />
      <Header1 />
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(bookSeriesSchema) }}
        />
      </Head>
      <div className="hero-banner-twelve pt-120 sm-pt-120 pb-20 sm-pb-20 lg-pb-80 md-pt-200">
        <div className="container">
          <div className="row align-items-start justify-content-center justify-content-md-start">
            <div
              className="col-lg-4 col-sm-6 col-10 mb-4"
              data-aos="fade-up"
              // data-aos-delay={100 * index}
            >
              <div className="d-flex flex-column justify-content-between tran3s text-center mt-0 h-100 p-0">
                <div className="d-flex justify-content-around position-relative p-2 pb-0 gap-1">
                  {/* <img src={seriesData.icon} alt="" className="lazy-img m-auto" /> */}
                  {/* <img src={seriesDetail.img1} alt={seriesDetail.series} style={{ maxWidth: "40%" }} />
                                    <img style={{ maxWidth: "40%", maxHeight: "300px" }} className="position-absolute pt-2 top-25 start-50 translate-middle-x h-100" src={seriesDetail.img2} alt={seriesDetail.series} />
                                    <img src={seriesDetail.img3} alt={seriesDetail.series} style={{ maxWidth: "40%" }} /> */}
                  {seriesDetail
                    ? seriesDetail.imgArr.map((img, index) => (
                        <Image
                          key={index}
                          width={200}
                          height={0}
                          src={img ? img : "/images/assets/nullBook.png"}
                          alt={seriesDetail.series_name}
                          className={
                            index === 2
                              ? "position-absolute pt-2 top-25 start-50 translate-middle-x h-100"
                              : "col-5 h-100"
                          }
                          style={{ maxWidth: "40%", maxHeight: "300px" }}
                          onError={onBookImageError}
                        />
                      ))
                    : null}
                </div>
              </div>
              {/* /.card-style-sixteen */}
            </div>
            {/* End col-6 */}
            <div className="col-sm-6 col-lg-7 col-10 books-hero-secondDiv">
              <div className="text-wrapper" data-aos="fade-right">
                <h1 className="fs-2 text-center text-sm-start fw-500 tx-new">
                  {seriesDetail.series_name} Books in Order (by Author{" "}
                  {seriesBooks[0].authorName})
                  {/* {seriesDetail.series + " " + `(${seriesDetail.booksNum} Books)`} - Complete Series Guide. */}
                </h1>
                <p className="d-flex justify-content-center justify-content-sm-start tx-dark mb-30 pt-lg-3 lg-mb-20">
                  <span className="fw-bold">Author : </span> &nbsp;{" "}
                  {seriesBooks[0].authorName}
                </p>
                <p className="text-center text-md-start">
                  Find all “{seriesDetail.series_name}” books in order. Every
                  book of the series is listed in the order of its release to
                  ensure you read the story as it was intended.
                </p>
              </div>
            </div>
            {/* End col-6 */}
          </div>
          {/* /.row */}
        </div>
        {/* /.container */}
      </div>

      <div className="container team-section-two mt-20 d-flex flex-column align-items-center">
        <div
          className="d-flex align-items-center col-12 mb-3 justify-content-between"
          style={{ borderBottom: "3px solid #c475e3" }}
        >
          <h2 className="fs-20 mb-0 tx-new fw-500 w-75">
            All {seriesDetail.series_name} Books in Order with their release
            dates.
          </h2>
          <div className="me-2 col-3 text-end" style={{ fontSize: "25px" }}>
            <i
              onClick={() => {
                setLayout(false), selectorShow();
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
          style={{ overflow: "hidden", display: !changelay ? "none" : "block" }}
        >
          <div className="row justify-content-center gap-2">
            <Series1 data={seriesBooks} counting={true} />
          </div>
        </div>
        <div
          className="w-100"
          style={{ display: !changelay ? "block" : "none" }}
        >
          <List_layout data={seriesBooks} counting={true} />
        </div>
        <div className="mt-70">
          <h2 className="fw-bold fs-3 text-center tx-new text-decoration-underline">
            Similar Series
          </h2>
          <div className="row justify-content-around mt-20">
            <SeriesMap
              series={data ? data.similarSeries : null}
              link="series"
              noFade={true}
            />
          </div>
          <div className="d-flex justify-content-center mb-20">
            <Link className="fw-500 viewAllBtn" href="/series">
              Explore More Series
            </Link>
          </div>
        </div>
      </div>
      <div
        className="position-fixed top-0 start-0 justify-content-center align-items-center w-100 h-100"
        style={{
          display: seriesBooks ? "none" : "flex",
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
//     // Fetch data from external API
//     const { seriesName } = Context.query
//     const res = await fetch(`${process.env.NEXT_API_URL}/api/series_books?name=${seriesName.replace("-books-in-order", "")}`)
//     const data = await res.json()
//     const errorCode = res.ok ? false : res.status
//     // Pass data to the page via props
//     // console.log(data)

//     return { props: { data, errorCode } }
// }

export async function getStaticProps({ params }) {
  const { seriesName } = params;

  // Fetch data from external API
  const res = await fetch(
    `${process.env.NEXT_API_URL}/api/series_books?name=${seriesName.replace(
      "-books-in-order",
      ""
    )}`
  );
  const errorCode = res.ok ? false : res.status;
  const data = await res.json();

  return {
    props: {
      data,
      errorCode,
    },
    revalidate: 1728000, // Revalidate at most once every 60 seconds
  };
}

export async function getStaticPaths() {
  return {
    paths: [], // Optionally specify known paths if available
    fallback: "blocking", // Or 'true' if you want to generate new pages on-demand
  };
}
export default SeriesDetail;
