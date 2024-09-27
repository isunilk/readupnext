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
import Team1 from "../../components/team/Team1";
import AuthorMap from "../../components/team/AuthorMap";
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
  const [authorDetail, setSeriesDetail] = useState(data.authorDetails);
  const pathName = usePathname();

  const onImageError = (e) => {
    e.target.src = "/images/assets/blank_people.jpg";
  };

  useEffect(() => {
    if (seriesBooks && window.innerWidth < 768) {
      selectorShow();
    }
  }, [seriesBooks]);

  useEffect(() => {
    setSeriesBooks(data.books);
    setSeriesDetail(data.authorDetails);
  }, [data]);

  const authorSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@id": "https://www.readupnext.com/author",
          name: "Author",
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@id": `https://www.readupnext.com/author/${authorDetail.slug}`,
          name: authorDetail.name,
        },
      },
    ],
  };

  const personSchema = {
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
              "@id": "https://www.readupnext.com/author",
              name: "Authors",
            },
          },
          {
            "@type": "ListItem",
            position: 3,
            item: {
              "@id": `https://www.readupnext.com/author/${authorDetail.slug}`,
              name: "Authors",
            },
          },
        ],
      },
      {
        "@type": "CollectionPage",
        name: `${authorDetail.name} Books In Order (Complete List)`,
        description: `A collection of books recommended by ${authorDetail.name}.`,
        image: authorDetail.imageURL,

        about: {
          "@type": "Person",
          name: authorDetail.name,
          description: authorDetail.bio,
          image: authorDetail.imageURL,
        },

        hasPart: seriesBooks.map((item, index) => ({
          "@type": "Book",
          name: item.title,
          datePublished: item.yearPublished,
          image: item.BookimageUrl,
          author: {
            "@type": "Person",
            name: item.authorName,
          },
          // "isRecommendedBy": item.expertRecommenders.map((person) => (
          //     {
          //         "@type": "Person",
          //         "name": person.name
          //     }
          // )),
          aggregateRating:
            item.rating > 0
              ? {
                  "@type": "AggregateRating",
                  ratingValue: item.rating,
                  ratingCount: item.reviewCount,
                }
              : null,
        })),
      },
    ],
  };

  return (
    <>
      <Seo
        pageTitle={`All ${
          authorDetail ? authorDetail.name : "series"
        } Books in Order (Complete List)`}
        descr={`Find all ${
          seriesBooks ? seriesBooks.length : null
        } books written by ${
          authorDetail ? authorDetail.name : "series"
        }, all arranged in the order they were published. Discover the full collection in sequence`}
        metaTitle={`All ${
          authorDetail ? authorDetail.name : "series"
        } Books in Order (Complete List)`}
        canonical={pathName}
        ogImage={authorDetail.imageURL}
      />
      <Head>
        {/* <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(authorSchema) }}
                /> */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        {/* <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(bookListSchema) }}
                /> */}
      </Head>
      <Header1 />

      <div className="hero-banner-twelve pt-120 sm-pt-120 pb-20 sm-pb-20 lg-pb-80 md-pt-200">
        <div className="container">
          <div className="row align-items-start">
            <div
              className="col-xxl-2 col-xl-3 col-md-4 d-flex flex-column align-items-center align-items-md-end"
              data-aos="fade-left"
            >
              <div
                className="image-holder zn2 d-inline-block position-relative"
                style={{
                  maxHeight: "542px",
                  width: "fit-content",
                  overflow: "hidden",
                }}
              >
                {authorDetail ? (
                  <Image
                    width={200}
                    height={200}
                    src={
                      authorDetail.imageURL
                        ? authorDetail.imageURL
                        : "/images/assets/blank_people.jpg"
                    }
                    alt={authorDetail ? authorDetail.name : null}
                    onError={onImageError}
                    style={{
                      borderRadius: "500px",
                      width: "200px",
                      height: "200px",
                    }}
                  />
                ) : null}
              </div>
            </div>

            {/* End col-6 */}
            <div className="col-md-8 books-hero-secondDiv d-flex flex-column align-items-center align-items-md-start mt-25 mt-md-0">
              <div className="text-wrapper" data-aos="fade-right">
                <h1 className="fs-2 fw-500 tx-new text-center text-md-start">
                  All {authorDetail ? authorDetail.name : null} Books In Order
                  (Complete List)
                </h1>
                <p className="text-center font-14 text-md-start">
                  {authorDetail ? authorDetail.bio : null}
                </p>
                <p className="text-center font-14 text-md-start mt-3 mb-0">
                  Explore all {seriesBooks.length} books written by{" "}
                  {authorDetail.name}, all arranged in the order they were
                  published.
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
            All {authorDetail.name} Books in Order with their release dates.
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
      </div>

      <div className="container peopleCard wrapper border-bottom pb-120 lg-pb-80 position-relative mt-100">
        <h2 className="fs-20 text-center mb-50 text-decoration-underline">
          Other author you might be interested in
        </h2>
        <div className="row justify-content-center gap-sm-3 gap-2">
          {data ? <AuthorMap data={data.otherAuthor} /> : null}
          <div className="col-lg-2 col-md-3 col-sm-5 col-6 d-flex">
            <Link
              style={{
                background: "var(--prime-eleven)",
                borderRadius: "15px",
                minHeight: "13rem",
              }}
              href="/author"
              className="team-block-two d-flex flex-column justify-content-center align-items-center mb-40"
            >
              {/* <h3>750+</h3> */}
              <p className="text-dark fw-500 text-center mx-1">
                Explore More Authors
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
//   // Fetch data from external API
//   const { name } = Context.query;
//   const resData = await fetch(
//     `${process.env.NEXT_API_URL}/api/series-author-books?name=${name.replace(
//       "-books-in-order",
//       ""
//     )}`
//   );
//   const data = await resData.json();
//   // console.log(resData.status)
//   const errorCode = resData.ok ? false : resData.status;
//   return { props: { data, errorCode } };
// }

export async function getStaticProps({ params }) {
  const { name } = params;
  const resData = await fetch(
    `${process.env.NEXT_API_URL}/api/series-author-books?name=${name.replace(
      "-books-in-order",
      ""
    )}`
  );
  const data = await resData.json();
  const errorCode = resData.ok ? false : resData.status;
  return {
    props: { data, errorCode },
    revalidate: 1728000,
  };
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}

// readupnext-iw14psmh3-isunilkb-gmailcom.vercel.app
export default SeriesDetail;
