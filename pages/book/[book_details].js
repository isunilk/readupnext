import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import Books_Hero from "../../components/books-pages/Books_Hero";
import Header1 from "../../components/header/Header1";
import Team2 from "../../components/team/Team2";
import DefaultFooter from "../../components/footer/DefaultFooter";
import List_layout from "../../components/team/List_layout";
import SearchBar1 from "../../components/team/SearchBar1";
import Seo from "../../components/common/Seo";
import { selectorShow } from "../../components/common/commen";
import Pricing from "../404";
import Head from "next/head";


const Book_Details = ({ data, errorCode }) => {

  if (errorCode) {
    return <Pricing />
  }
  const [booksDetails, setBooksDetails] = useState(data.data);
  const [similarBooks, setSimilarBooks] = useState(data.similarBooks)
  const [changelay, setLayout] = useState(false);

  const rout = useRouter();
  const bookName = rout.query.book_details;

  // const getBooks = async (search) => {
  //   try {

  //     let data = await fetch(`/api/book-similar-books`, {
  //       method: "POST",
  //       headers: {
  //         "Authorization": `Bearer ${process.env.NEXT_PUBLIC_FRONTEND_KEY}`,
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         input: search,
  //       })
  //     })
  //     data = await data.json()
  //     setBooksDetails(data.data)
  //     setSimilarBooks(data.similarBooks)
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }

  useEffect(() => {
    if (similarBooks.length > 0 && window.innerWidth < 768) {
      selectorShow();
    }
  }, [similarBooks])


  useEffect(() => {
    if (bookName) {
      // getBooks(bookName)
      setBooksDetails(data.data)
      setSimilarBooks(data.similarBooks)
    }
  }, [bookName])





  const bookDetailSchema = {
    "@context": "http://schema.org", //example schema for - https://www.readupnext.com/book/scientific-advertising
    "@type": "ItemPage",
    "name": `${booksDetails.title} by ${booksDetails.authorName}`,
    "description": `Detailed information and recommendations about the book '${booksDetails.title}' by ${booksDetails.authorName}`,
    "image": booksDetails.BookimageUrl,

    "mainEntity": {
      "@type": "Book",
      "name": booksDetails.title,
      "author": {
        "@type": "Person",
        "name": booksDetails.authorName
      },
      "image": booksDetails.BookimageUrl,
      "aggregateRating": booksDetails.rating>0? {
        "@type": "AggregateRating",
        "ratingValue": booksDetails.rating,
        "ratingCount": booksDetails.reviewCount
      }:null,
      "mentions": booksDetails.expertRecommenders.map((recom) => (
        { "@type": "Person", "name": recom.name }
      ))
    },
    "isSimilarTo":similarBooks.map((item)=>(
      {
        "@type": "Book",
        "name": item.title,
        "author": {
          "@type": "Person",
          "name": item.authorName
        },
        "image": item.BookimageUrl,
        "aggregateRating": item.rating>0? {
          "@type": "AggregateRating",
          "ratingValue": item.rating,
          "ratingCount": item.reviewCount
        }:null,
        "mentions": item.expertRecommenders.map((person)=>(
          {"@type": "Person", "name": person.name}
        ))
      }
    )) 
  }

  return (
    <>
      <Seo
        pageTitle={`${booksDetails ? booksDetails.title : "Book"} by ${booksDetails.authorName}- Description & Similar Books`}
        descr={`Find details about '${booksDetails.title}' by ${booksDetails.authorName} and discover similar reads in our collection of related books`}
        metaTitle={`${booksDetails.title} by ${booksDetails.authorName}- Description & Similar Books`}
        canonical={rout.asPath}
        ogImage={booksDetails.BookimageUrl}
      />
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(bookDetailSchema) }}
        />
      </Head>
      <Header1 />
      <Books_Hero details={[booksDetails]} />
      <div className="container team-section-two d-flex flex-column align-items-center mt-20">
        <div className='d-flex align-items-center col-12 justify-content-between' style={{ borderBottom: "3px solid #c475e3" }}>
          <h2 className="fs-20 tx-new fw-500 w-75">Books Similar to {booksDetails ? booksDetails.title : ""}</h2>
          <div className='me-2' style={{ fontSize: "25px" }}>
            <i onClick={() => { setLayout(false), selectorShow() }} title='list layout' className="fa fa-list-ul me-2 cursor-pointer" aria-hidden="true"></i>
            <i onClick={() => { setLayout(true) }} title="grid layout" className="bi bi-grid-fill cursor-pointer"></i>
          </div>
        </div>
        <div className="pe-3 ps-3 ps-xxl-5 pe-xxl-5 col-lg-11" style={{ overflow: "hidden", display: !changelay ? "none" : "block" }}>
          <div className="row justify-content-center gap-2">
            <Team2 data={similarBooks} />
          </div>
        </div>
        <div className="w-100" style={{ display: !changelay ? "block" : "none" }} >
          <List_layout data={similarBooks} />
        </div>
      </div >
      <div className='position-fixed top-0 start-0 justify-content-center align-items-center w-100 h-100' style={{ display: similarBooks.length > 0 ? "none" : "flex", background: "#ffffffeb", zIndex: "20" }}>
        <SearchBar1 />
      </div>
      <DefaultFooter />
    </>
  )
}

export async function getServerSideProps(Context) {
  // Fetch data from external API
  const { book_details } = Context.query
  const res = await fetch(`${process.env.NEXT_API_URL}/api/book-similar-books?book=${book_details}`)
  const errorCode = res.ok ? false : res.status
  const data = await res.json()

  return { props: { data, errorCode } }
}

export default Book_Details;
