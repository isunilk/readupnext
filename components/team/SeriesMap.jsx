import Link from "next/link";

const SeriesMap = ({series, link, noFade}) => {
  console.log()
  const onBookImageError = (e) => {
    e.target.src = "/images/assets/nullBook.PNG"
  }  
  return (
    <>

      {series ?
        series.map((seriesData, index) => (
          <Link key={index} href={"/"+link+"/" + seriesData.series_slug+"-books-in-order"} className="col-lg-4 col-sm-6 col-10 mb-4">
          <div
            className="h-100"
            data-aos={!noFade? "fade-up":null}
            data-aos-delay={index}
          >
            <div className="d-flex flex-column justify-content-between card-style-sixteen tran3s text-center mt-0 h-100 p-0">
              <div className="d-flex justify-content-between position-relative p-2 pb-0 gap-1" >
                {
                  seriesData.imgArr.map((imgSrc, id) => {
                    return imgSrc!==null?<img key={id} style={{ maxWidth: "50%", maxHeight: "300px" }} className={id === 1 ? "position-absolute pt-2 top-25 start-50 translate-middle-x h-100" : ""} onError={onBookImageError} src={imgSrc} alt={seriesData.series_name}/>:null
                  })
                }
                
              </div>
              <div className="position-relative overflow-hidden">
                <h4 className="tx-new pt-20">{seriesData.series_name}</h4>
                <p className="fs-20 m-0 pb-10">{seriesData.count} Books</p>
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

export default SeriesMap;
