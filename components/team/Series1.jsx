import Link from "next/link";
import Image from "next/image";


const Series1 = ({ data, counting }) => {
    const onBookImageError = (e) => {
        e.target.src = "/images/assets/nullBook.PNG"
    }
    return (
        <>
            {data ?
                data.map((bookList, index) => (
                    <div
                        className="recommended-books position-relative d-flex flex-column justify-content-between align-items-center rounded"
                        key={index}
                        style={{ width: "220px" }}
                    >

                        <Image
                            width={180}
                            height={280}
                            src={bookList.BookimageUrl ? bookList.BookimageUrl : "/images/assets/nullBook.PNG"}
                            alt={bookList.title}
                            style={{ cursor: "pointer" }}
                            onError={onBookImageError}
                            className="team-img position-relative mx-auto"
                            onClick={() => { window.open(bookList.buyLink) }}
                        />
                        {
                            counting ? <div className="position-absolute top-0 end-0 px-3 py-2 fw-500" style={{ background: "#fff", borderRadius: "50px" }}>{index + 1}</div> : null
                        }


                        {/* <div className="col-lg-12 d-flex flex-column justify-content-between mt-20"> */}
                        <Link
                            href={"/book/" + bookList.slug}>
                            <h3 className="fs-18 mb-0 fw-bold mt-5 tx-new text-center">{bookList.title}</h3>
                        </Link>
                        <p className="fs-15 mb-0 text-center" style={{ fontWeight: "400", color: "#626262" }}>{bookList.authorName}</p>
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
                            <span className="fs-15" style={{ color: "#626262" }}>
                                {bookList.rating} ({bookList.reviewCount})
                            </span>
                        </div>

                        <div className="theme-main-menu position-static w-100 px-0">
                            <Link
                                target="_blank"
                                href={bookList.buyLink ? bookList.buyLink : "#"}
                                rel="sponsored nofollow"
                                className="start-btn-one tran3s position-relative px-0 text-center w-100"
                            >
                                View on Amazon
                            </Link>
                        </div>
                    </div>
                    /* col-lg-3 */
                )) : null
            }
        </>
    )
}

export default Series1;
