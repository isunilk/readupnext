import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Team2 = ({ data }) => {

  return (
    <>

      {data.map((bookList, index) => (
        <div
          className="recommended-books pt-10 pb-10 d-flex flex-column align-items-center justify-content-between mt-10 mb-10 rounded"
          key={index}
          style={{ width: "220px" }}
        >
          <Image
            width={180}
            height={280}
            src={bookList.BookimageUrl ? bookList.BookimageUrl : "/images/assets/nullBook.png"}
            alt={bookList.title}
            className="team-img"
            style={{cursor:"pointer"}}
            onClick={()=>{window.open(bookList.buyLink)}}
          />
          <Link
            href={"/book/" + bookList.slug}>
            <h3 className="fs-18 fw-bold tx-new mt-20 mb-0 text-center" >{bookList.title}</h3>
          </Link>
          <p className="mb-0 text-center" style={{ fontWeight: "400", fontSize:'14px' }}>{bookList.authorName}</p>
          <div className="d-flex flex-column align-items-center">
            <ul className="style-none d-flex">
              {Array.from({ length: Math.ceil(bookList.rating) }, (_, i) => (
                Math.ceil(bookList.rating) - ((bookList.rating % Math.floor(bookList.rating)) + (i)) < 1 ?
                  <li className="px-1" style={{ color: "#ffce4c" }} key={i}>
                    <i className="bi bi-star-half"></i>
                  </li> :
                  <li className="px-1" style={{ color: "#ffce4c" }} key={i}>
                    <i className="bi bi-star-fill" />
                  </li>
              ))}
              {Array.from({ length: 5 - Math.ceil(bookList.rating) }, (_, i) => (
                <li className="px-1" key={i}>
                  <i className="bi bi-star-fill" />
                </li>
              ))}
            </ul>
           <span className="fs-15 tx-dark ms-1">
             {bookList.rating} ({bookList.reviewCount})
            </span>
          </div>
          
          <div className="theme-main-menu position-static w-100 pb-0 px-0">
              <Link
                href={bookList.buyLink?bookList.buyLink:"#"}
                target="_blank"
                rel="sponsored"
                className="start-btn-one fs-18 fw-500 tran3s position-relative px-0 text-center w-100"
              >
                View on Amazon
              </Link>
            </div>
        </div>
        /* col-lg-3 */
      ))}
    </>
  );
};

export default Team2;