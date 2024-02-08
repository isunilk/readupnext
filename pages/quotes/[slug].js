import Image from "next/image";
import Seo from "../../components/common/Seo";
import Header1 from "../../components/header/Header1";
import DefaultFooter from "../../components/footer/DefaultFooter";
import { usePathname } from "next/navigation";

const quotes = ({ data }) => {
  // const onBookImageError = (e) => {
  //   e.target.src = "/images/assets/nullBook.PNG"
  // }
  // const pathName = usePathname();
  return (
    <>
      <Header1 />
      <h1 className="pt-120 container">Available Soon... </h1>
      <DefaultFooter/>
    </>
  )
  return (
    <>
      {/* <Seo
        pageTitle={`${data ? data.quotes[0].TITLE : null} Book Quotes`}
        descr={data ? data.quotes[0].QUOTE : null}
        metaTitle={`${data ? data.quotes[0].TITLE : null} Book Quotes`}
        canonical={pathName}
      /> */}
      <Header1 />
      {/* <div className="container mt-120 mb-20 xl-mt-120 d-flex flex-column flex-md-row align-items-center align-items-md-start gap-5">
        {data.imgObj ?

          <Image
            width={220}
            height={300}
            src={data.imgObj.BookimageUrl ? data.imgObj.BookimageUrl : "/images/assets/nullBook.PNG"}
            alt="book"
            onError={onBookImageError}
          /> :
          <Image
            width={220}
            height={300}
            src={"/images/assets/nullBook.PNG"}
            alt="book"
          />
        }
        <div className="content col-lg-9 title-style-five">
          <h1 className="main-title text-md-start fw-500 tx-dark">{data.quotes[0].TITLE}</h1>
          {
            data.quotes.map((item, index) => (
              <div key={index} className="quotecard card p-2 p-md-3 my-md-4 my-3">
                <p className="fs-6 mb-0">{item.QUOTE}</p>
              </div>
            ))
          }
        </div>
      </div> */}
      <div className="d-flex xl-mt-120 mt-120 justify-content-center">
        <h1 className="text-center my-5">Available Soon</h1>
      </div>
      <DefaultFooter />
    </>
  )
}

export default quotes;

// export async function getServerSideProps(Context) {
//   const { slug } = Context.query
//   const res = await fetch(`${process.env.NEXT_API_URL}/api/quotes?name=${slug.replace(/-/g, " ")}`)
//   const data = await res.json()

//   if (data.statusCode === 404) {
//     return {
//       redirect: {
//         destination: '/404',
//         permanent: false,
//       },
//     };
//   } else {
//     return { props: { data } }
//   }
// }
