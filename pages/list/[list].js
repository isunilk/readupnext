// "use client";
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import DefaultFooter from '../../components/footer/DefaultFooter';
import Header1 from '../../components/header/Header1';
import Series1 from '../../components/team/Series1';
// import Link from 'next/link';
// import Image from 'next/image';
import Seo from "../../components/common/Seo"
import List_layout from '../../components/team/List_layout';
import SearchBar1 from '../../components/team/SearchBar1';
import { selectorShow } from '../../components/common/commen';
import ListMap from '../../components/team/ListMap';
import Faq from '../../components/team/Faq';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Pricing from "../404"
import Head from 'next/head';

// function mapStars() {
//   return (
//     <li className="px-1" key={i}>
//       <i className="bi bi-star-fill" />
//     </li>
//   )
// }



const List = ({ data, errorCode }) => {
  if (errorCode) {
    return <Pricing />
  }

  const [listBooks, setListBooks] = useState([...data.getData])
  const [similarCat, setSimilarCat] = useState(data.similarCategories)
  const [changelay, setLayout] = useState(false);
  const pathName = usePathname()


  const onBookImageError = (e) => {
    e.target.src = "/images/assets/nullBook.PNG"
  }

  useEffect(() => {
    if (data) {
      setListBooks(data.getData)
      setSimilarCat(data.similarCategories)
    }
  }, [data]);

  useEffect(() => {
    if (listBooks.length > 0 && window.innerWidth < 768) {
      selectorShow();
    }
  }, [listBooks])


  const bookListSchema = {
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
          },
          {
            "@type": "ListItem",
            "position": 3,
            "item": {
              "@id": `https://www.readupnext.com/list/${similarCat.searchCategory[0].Best_Book_List.toLowerCase().replace(/ /g,"-")}`,
              "name": "Best Books List Across 1300 Categories"
            }
          }
        ]
      },
      {
        "@type": "CollectionPage",
        name: `${listBooks ? listBooks.length : 0} Best ${listBooks[0] ? listBooks[0].category_name : "category"} Books Of All Time (Updated 2023)`,
        description: `Check out the Best ${listBooks[0].category_name} Books - Picked based on recommendations from experts and fan around the world.`,
        // image: "[URL to the main image at the top]",

        hasPart: listBooks.map((item) => (
          {
            "@type": "Book",
            name: item.title,
            author: {
              "@type": "Person",
              name: item.authorName
            },
            image: item.BookimageUrl,
            aggregateRating: item.rating > 0 ? {
              "@type": "AggregateRating",
              ratingValue: item.rating,
              ratingCount: item.reviewCount
            } : null,
            isBasedOn: item.articles.map((artical) => (
              {
                "@type": "Article",
                name: artical.title
              }
            ))
          }
        ))
      }]
  };

  return (
    <>
      {/* <time datetime="2016-10-25" suppressHydrationWarning /> */}
      <Seo
        pageTitle={`${listBooks ? listBooks.length : 0} Best ${listBooks[0] ? listBooks[0].category_name : "category"} Books Of All Time (Updated 2023)`}
        descr={similarCat ? similarCat.searchCategory[0].metaDescription : ""}
        metaTitle={`${listBooks ? listBooks.length : 0} Best ${listBooks[0] ? listBooks[0].category_name : "category"} Books Of All Time (Updated 2023)`}
        canonical={pathName}
        ogImage={similarCat.searchCategory[0].imgArr[0]?similarCat.searchCategory[0].imgArr[0]:"https://www.readupnext.com/opengraph_image.png"}
      />
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(bookListSchema) }}
        />
      </Head>
      <Header1 />
      <div className="hero-banner-twelve pt-120 sm-pt-120 pb-20 sm-pb-20 lg-pb-80 md-pt-200">
        < div className="container" >
          <div className="row align-items-start justify-content-center justify-content-md-start">
            <div
              className="col-lg-4 col-sm-6 col-10 mb-4"
              data-aos="fade-up"
            >
              <div className="d-flex flex-column justify-content-between tran3s text-center mt-0 h-100 p-0">
                <div className="d-flex justify-content-around position-relative p-2 pb-0 gap-1" >

                  {similarCat ?
                    similarCat.searchCategory[0].imgArr.map((img, index) => (
                      <Image
                        key={index}
                        width={200}
                        height={0}
                        src={img ? img : "/images/assets/nullBook.png"}
                        alt={listBooks[0] ? listBooks[0].category_name : "category"}
                        className={index === 2 ? "position-absolute pt-2 top-25 start-50 translate-middle-x h-100" : "col-5 h-100"}
                        style={{ maxWidth: "40%", maxHeight: "300px" }}
                        onError={onBookImageError}
                      />
                    )) : null

                  }
                  {/* <img src={listBooks[0] ? listBooks[0].BookimageUrl : "/images/assets/nullBook.png"} onError={onBookImageError} alt={listBooks[0] ? listBooks[0].category_name : "category"} style={{ maxWidth: "40%" }} />
                  <img style={{ maxWidth: "40%", maxHeight: "300px" }}  src={listBooks[1] ? listBooks[1].BookimageUrl : "/images/assets/nullBook.png"} onError={onBookImageError} alt={listBooks[0] ? listBooks[0].category_name : "category"} />
                  <img src={listBooks[2] ? listBooks[2].BookimageUrl : "/images/assets/nullBook.png"} onError={onBookImageError} alt={listBooks[0] ? listBooks[0].category_name : "category"} style={{ maxWidth: "40%" }} /> */}
                </div>
              </div>
            </div>
            {/* End col-6 */}
            <div className="col-sm-6 col-10 books-hero-secondDiv">
              <div className="text-wrapper" data-aos="fade-right">
                <h1 className="fs-2 text-center text-sm-start fw-500 tx-new">
                  {listBooks ? listBooks.length : 0} Best {listBooks[0] ? listBooks[0].category_name : "category"} Books Of All Time (Updated 2023).
                </h1>
                <p className='text-center text-md-start'>Check out the Best {listBooks[0] ? listBooks[0].category_name : "category"} Books - Picked based on recommendations from experts and fan around the world.</p>
              </div>
            </div>
            {/* End col-6 */}
          </div>
          {/* /.row */}
        </div >
        {/* /.container */}
      </div >


      <div className="container team-section-two mt-20 d-flex flex-column align-items-center">
        <div className='d-flex align-items-center col-12 justify-content-between mb-3' style={{ borderBottom: "3px solid #c475e3" }}>
          <h2 className="fs-20 tx-new mb-0 fw-500 w-75" >{listBooks[0] ? listBooks.length : 0} Best Books On {listBooks[0] ? listBooks[0].category_name : "category"}</h2>
          <div className='me-2' style={{ fontSize: "25px" }}>
            <i onClick={() => { setLayout(false), selectorShow() }} title='list layout' className="fa fa-list-ul me-2 cursor-pointer" aria-hidden="true"></i>
            <i onClick={() => { setLayout(true) }} title="grid layout" className="bi bi-grid-fill cursor-pointer"></i>
          </div>
        </div>
        <div className="pe-3 ps-3 ps-xxl-5 pe-xxl-5 col-lg-11" style={{ overflow: "hidden", display: !changelay ? "none" : "block" }}>
          <div className="row justify-content-center gap-2">
            <Series1 data={listBooks} counting={false} />
          </div>
        </div>

        <div className='w-100' style={{ display: !changelay ? "block" : "none" }}>
          <List_layout data={listBooks} artical={true} />
        </div>
        {similarCat ?
          similarCat.searchCategory[0].questions_answers ?

            <div className="container d-flex flex-column justify-content-center align-items-center mt-70 mb-50">
              <h2 className='text-center fs-1'>FAQs</h2>
              <div className='col-lg-10'>
                <Faq faq={similarCat.searchCategory[0].questions_answers} />
              </div>
            </div>
            : null
          : null
        }
        <div className='mt-70'>
          <h2 className='fw-bold fs-3 text-center tx-new text-decoration-underline'>Similar Categories</h2>
          <div className='row justify-content-around mt-20'>
            <ListMap data={similarCat ? similarCat.similarCategory : null} similarList={true} />
          </div>
          <div className='d-flex justify-content-center mb-20'>
            <Link className='fw-500 viewAllBtn' href="/list">Explore More Categories</Link>
          </div>
        </div>
        {/* {console.log(similarCat.searchCategory)} */}

      </div >
      <div className='position-fixed top-0 start-0 justify-content-center align-items-center w-100 h-100' style={{ display: listBooks.length > 0 ? "none" : "flex", background: "#ffffffeb", zIndex: '20' }}>
        <SearchBar1 />
      </div>
      <DefaultFooter />
    </>
  )
}

export async function getServerSideProps(Context) {
  // Fetch data from external API
  const {list} = Context.query
  // console.log(list)
  const res = await fetch(`${process.env.NEXT_API_URL}/api/list-category-books?category=${list}`)
  const errorCode = res.ok ? false : res.status
  const data = await res.json()

  // Pass data to the page via props

  return { props: { data, errorCode } }
}


export default List;
