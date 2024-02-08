import Image from "next/image";
import Link from "next/link";
// import { useEffect, useState } from "react";

const ListMap = ({ data, similarList }) => {
  const onBookImageError = (e) => {
    e.target.src = "/images/assets/nullBook.PNG"
  }
  return (
    <>
      {data ?
        data.map((listData, index) => (
          
          <Link href={"/list/" + (listData.Best_Book_List).toLowerCase().replace(/ /g, "-")} className={similarList?"col-lg-4 col-sm-6 col-12 mb-4":"col-lg-6 col-sm-6 col-12 mb-4"} key={index} data-aos={similarList?null:"fade-up"}>
            <div
              key={index}

            >
              <div className="d-flex flex-column justify-content-between card-style-sixteen tran3s text-center mt-0 h-100 p-0">
                <div className="d-flex justify-content-between position-relative p-2 pb-0 gap-1" >
                  {/* <img src={listData.icon} alt="" className="lazy-img m-auto" /> */}
                  {listData.imgArr.map((imageLink, id) => {
                    return (<Image
                      width="150"
                      height="200"
                      alt={`Best ${listData._id} Books`}
                      key={id}
                      onError={onBookImageError}
                      src={imageLink? imageLink :"/images/assets/nullBook.PNG"}
                      className={id === 1 ? "position-absolute pt-2 top-25 start-50 translate-middle-x h-100" : "-"}
                    />)

                  })}
                  
                </div>
                <div className="position-relative overflow-hidden">
                  <h3 className="tx-new pt-20">{listData.Best_Book_List}</h3>
                  <p className="fs-20 m-0 pb-10">{listData.count} Books</p>
                  <div
                    className="read-more rounded-circle text-start tran3s"
                  >
                    <i className="bi bi-arrow-right" />
                  </div>
                </div>
              </div>
              {/* /.card-style-sixteen */}
            </div>
          </Link>
        )) : null}
    </>
  );
};

export default ListMap;
