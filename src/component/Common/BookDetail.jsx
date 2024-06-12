import Link from "next/link";
import style from "./common.module.css"
import { RightTab } from "./RightTab";
const course = {
  rating: 4.5,
  ratingsCount: 52
}
export const BookDetailPerson = ({ book, person }) => {
  // console.log(book)
  return (
    <>
      <div className={"d-flex my-4 flex-wrap " + style.book_container}>
        <div className="col-lg-8 d-flex flex-sm-row flex-column align-items-sm-start align-items-center">
          <img src={book.imageUrl} alt="" className={"col-4 " + style.main_img} />
          <div className={"px-sm-3  d-flex flex-column d-sm-block align-items-center " + style.book_left}>
            <h3 className="text-center text-sm-start pt-3 pt-sm-0">{book.title}</h3>
            <div className="d-flex gap-1 gap-sm-3 align-items-center">
              <span className="opacity-75">{book.subtitle}</span>


            </div>
            <div className="my-2">
              <span className="opacity-50 text-dark">Author: </span>
              <span>{book.authorName}</span>
              <span className="opacity-50 ms-2 text-dark"> Publish Year:</span>
              <span> 2015</span>
              <span className="ms-3">
                <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.1888 18C11.7621 17.9998 11.3493 17.8469 11.0226 17.5683L7.00007 14.134L2.97724 17.5685C2.65066 17.847 2.23788 17.9997 1.81139 18C1.54532 18 1.28822 17.9422 1.04665 17.8282C0.734395 17.6797 0.47018 17.4441 0.284854 17.1489C0.0995269 16.8537 0.00073485 16.511 1.09426e-05 16.161V3.23945C-0.00109023 2.81389 0.0809288 2.39234 0.241324 1.99917C0.401719 1.606 0.637306 1.24902 0.934458 0.94888C1.23002 0.647134 1.58159 0.4079 1.96883 0.245027C2.35607 0.0821536 2.77128 -0.00112488 3.19043 1.17827e-05H10.8094C11.2286 -0.00113969 11.6438 0.0821165 12.0311 0.244963C12.4183 0.407809 12.7699 0.647012 13.0655 0.948729C13.3627 1.24883 13.5984 1.60581 13.7588 1.99898C13.9192 2.39216 14.0011 2.81373 14 3.2393V16.1608C14 16.8731 13.5892 17.5275 12.9532 17.828C12.714 17.9417 12.4529 18.0005 12.1888 18ZM7.00007 12.7345C7.13677 12.7345 7.27361 12.782 7.38476 12.8768L11.792 16.6396C11.8823 16.7153 11.9918 16.7637 12.1079 16.7794C12.2241 16.795 12.3422 16.7772 12.4488 16.7281C12.5551 16.6776 12.645 16.5974 12.7081 16.497C12.7712 16.3965 12.8048 16.2799 12.805 16.1608V3.23945C12.805 2.69828 12.5975 2.18957 12.2206 1.8069C11.8437 1.42422 11.3426 1.2134 10.8096 1.2134H3.19058C2.6577 1.2134 2.15663 1.42422 1.77972 1.8069C1.4028 2.18957 1.19515 2.69828 1.19515 3.23945V16.161C1.19515 16.4033 1.33483 16.6258 1.55115 16.7281C1.65777 16.7773 1.77586 16.7951 1.89198 16.7795C2.00809 16.7639 2.11755 16.7155 2.20788 16.6398L6.61524 12.8768C6.72302 12.7848 6.8593 12.7345 7.00007 12.7345Z" fill="black" />
                </svg>
              </span>
            </div>
            <div>
              <img src={person.img} width="50px" alt="" />
              <span className="fst-italic ps-1">{person.name}</span>
            </div>
            <p className="text-center text-sm-start">{book.quote} [<Link target="_blank" className="text-decoration-none fst-italic" href={book.source}>Source</Link>]</p>
            <div className="d-flex gap-3">
              <Link href="#" className="yellow_button text-decoration-none">View on Amazon</Link>
              <Link href={"/book/" + book.slug} className="black_button  text-decoration-none">View Details</Link>
            </div>
          </div>
        </div>
        <div className={"col-lg-4 col-12 mt-3 mt-lg-0 " + style.book_right}>

          <RightTab recom={book.expertRecommenders} list={book.articals||[]}/>
          <div className="mt-3">
            <h4 className="fs-6 text-dark fw-semibold">Why should you read it? </h4>
            <p className="mb-0">"About a number of the ways that people are intervening with nature, including gene drive and geo engineering." - Bill Gates <Link href="#" className="text-decoration-none">[Sorce]</Link></p>
          </div>
        </div>
      </div>
    </>
  );
}


export const BookDetail = ({ book, person }) => {
  // console.log(book.articles)
  return (
    <>
      <div className={"d-flex my-4 flex-wrap " + style.book_container}>
        <div className="col-lg-8 d-flex flex-sm-row flex-column align-items-sm-start align-items-center">
          <img src={book.BookimageUrl} alt="" className={"col-4 " + style.main_img} />
          <div className={"px-sm-3  d-flex flex-column d-sm-block align-items-center " + style.book_left}>
            <h3 className="text-center text-sm-start pt-3 pt-sm-0">{book.title}</h3>
            <div className="d-flex gap-1 gap-sm-3 align-items-center">
              <span className="opacity-75">{book.subtitle}</span>
              <span className="opacity-75 d-none d-sm-block">|</span>
              <div className="course-review d-flex align-items-center justify-content-center">
                <ul className="list-unstyled mb-0 d-flex">
                  {Array.from({ length: Math.ceil(book.rating) }, (_, i) => (
                    Math.ceil(book.rating) - ((book.rating % Math.floor(book.rating)) + (i)) < 1 ?
                      <li className="pe-1" style={{ color: "#ffce4c" }} key={i}>
                        <i className="bi bi-star-half"></i>
                      </li> :
                      <li className="pe-1" style={{ color: "#ffce4c" }} key={i}>
                        <i className="bi bi-star-fill" />
                      </li>
                  ))}
                  {Array.from({ length: 5 - Math.ceil(book.rating) }, (_, i) => (
                    <li className="pe-1" key={i}>
                      <i className="bi bi-star-fill" />
                    </li>
                  ))}
                </ul>
                <span className="fs-15 opacity-75 tx-dark ms-1">
                  ({book.reviewCount})
                </span>
              </div>
              <span>
                <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.1888 18C11.7621 17.9998 11.3493 17.8469 11.0226 17.5683L7.00007 14.134L2.97724 17.5685C2.65066 17.847 2.23788 17.9997 1.81139 18C1.54532 18 1.28822 17.9422 1.04665 17.8282C0.734395 17.6797 0.47018 17.4441 0.284854 17.1489C0.0995269 16.8537 0.00073485 16.511 1.09426e-05 16.161V3.23945C-0.00109023 2.81389 0.0809288 2.39234 0.241324 1.99917C0.401719 1.606 0.637306 1.24902 0.934458 0.94888C1.23002 0.647134 1.58159 0.4079 1.96883 0.245027C2.35607 0.0821536 2.77128 -0.00112488 3.19043 1.17827e-05H10.8094C11.2286 -0.00113969 11.6438 0.0821165 12.0311 0.244963C12.4183 0.407809 12.7699 0.647012 13.0655 0.948729C13.3627 1.24883 13.5984 1.60581 13.7588 1.99898C13.9192 2.39216 14.0011 2.81373 14 3.2393V16.1608C14 16.8731 13.5892 17.5275 12.9532 17.828C12.714 17.9417 12.4529 18.0005 12.1888 18ZM7.00007 12.7345C7.13677 12.7345 7.27361 12.782 7.38476 12.8768L11.792 16.6396C11.8823 16.7153 11.9918 16.7637 12.1079 16.7794C12.2241 16.795 12.3422 16.7772 12.4488 16.7281C12.5551 16.6776 12.645 16.5974 12.7081 16.497C12.7712 16.3965 12.8048 16.2799 12.805 16.1608V3.23945C12.805 2.69828 12.5975 2.18957 12.2206 1.8069C11.8437 1.42422 11.3426 1.2134 10.8096 1.2134H3.19058C2.6577 1.2134 2.15663 1.42422 1.77972 1.8069C1.4028 2.18957 1.19515 2.69828 1.19515 3.23945V16.161C1.19515 16.4033 1.33483 16.6258 1.55115 16.7281C1.65777 16.7773 1.77586 16.7951 1.89198 16.7795C2.00809 16.7639 2.11755 16.7155 2.20788 16.6398L6.61524 12.8768C6.72302 12.7848 6.8593 12.7345 7.00007 12.7345Z" fill="black" />
                </svg>
              </span>
            </div>
            <div className="my-2">
              <span className="opacity-50 text-dark">Author: </span>
              <span>{book.authorName}</span>
              <span className="opacity-50 ms-2 text-dark"> Publish Year:</span>
              <span> {book.yearPublished}</span>
            </div>
            {/* <div>
              <img src={person.img} width="50px" alt="" />
              <span className="fst-italic ps-1">{person.name}</span>
            </div> */}
            <p className="text-center text-sm-start mt-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus ipsum aliquid distinctio autem perferendis iusto commodi voluptatibus ullam esse deleniti praesentium dolorum dolor, ab maiores veritatis explicabo vitae. </p>
            <div className="d-flex gap-3">
              <Link href="#" className="yellow_button text-decoration-none">View on Amazon</Link>
              <Link href={"/book/" + book.slug} className="black_button  text-decoration-none">View Details</Link>
            </div>
          </div>
        </div>
        <div className={"col-lg-4 col-12 mt-3 mt-lg-0 " + style.book_right}>
          <RightTab list={book.articles||[]} recom={book.expertRecommenders||[]} openDefault={true}/>
          <div className="mt-3">
            <h4 className="fs-6 text-dark fw-semibold">Why should you read it? </h4>
            <p className="mb-0">"About a number of the ways that people are intervening with nature, ." - Bill Gates <Link href="#" className="text-decoration-none">[Sorce]</Link></p>
          </div>
        </div>
      </div>
    </>
  );
}


