import Image from "next/image";
import Link from "next/link";

const Books_Hero = ({ details }) => {
    const onBookImageError = (e) => {
        e.target.src = "/images/assets/nullBook.PNG"
    }
    return (
        <>
            {
                details ?
                    details.map((elem, index) => {
                        return <div key={index} className="hero-banner-twelve pt-150 sm-pt-120 pb-50 lg-pb-50 md-pt-200">
                            < div className="container" >
                                <div className="row align-items-md-start align-items-center justify-content-center">
                                    {/* <div className="col-xxl-6 col-xl-5 col-md-6 d-flex justify-content-md-end justify-content-center" data-aos="fade-left" style={{ height: "100%" }}> */}
                                    <div className="image-holder col-8 col-xl-3 col-lg-4 col-md-6 zn2 d-inline-block position-relative" style={{ height: "100%", overflow: "hidden" }}>
                                        <Image
                                            width={200}
                                            height={220}
                                            src={elem.BookimageUrl ? elem.BookimageUrl : "/images/assets/nullBook.png"}
                                            alt="img"
                                            onError={onBookImageError}
                                            className="w-100 h-100"
                                        />
                                    </div>
                                    {/* </div> */}
                                    {/* End col-6 */}
                                    <div className="col-md-6 flex-grow-1 col-10 books-hero-secondDiv mt-md-0 mt-25">
                                        <div className="text-wrapper" data-aos="fade-right">
                                            <h1 className="hero-heading text-center text-md-start fw-500 tx-new">
                                                {elem.title}
                                            </h1>
                                            <p className="m-0 text-center text-md-start fst-italic">{elem.subtitle}</p>
                                            <p className="mb-0 text-center text-md-start"><span className="fw-bold">Author :</span> {elem.authorName}</p>
                                            {elem.yearPublished ? <p className=" mb-20 text-center text-md-start lg-mb-20"><span className="fw-bold">Publish Year :</span> {elem.yearPublished}</p> : null}
                                            <div className="d-flex align-items-center justify-content-center justify-content-md-start">
                                                <ul className="style-none d-flex">
                                                    {Array.from({ length: Math.ceil(elem.rating) }, (_, i) => (
                                                        Math.ceil(elem.rating) - ((elem.rating % Math.floor(elem.rating)) + (i)) < 1 ?
                                                            <li className="px-1" style={{ color: "#ffce4c" }} key={i}>
                                                                <i className="bi bi-star-half"></i>
                                                            </li> :
                                                            <li className="px-1" style={{ color: "#ffce4c" }} key={i}>
                                                                <i className="bi bi-star-fill" />
                                                            </li>
                                                    ))}
                                                    {Array.from({ length: 5 - Math.ceil(elem.rating) }, (_, i) => (
                                                        <li className="px-1" key={i}>
                                                            <i className="bi bi-star-fill" />
                                                        </li>
                                                    ))}
                                                </ul>
                                                <span className="fs-15 tx-dark ms-1">
                                                    ({elem.reviewCount})
                                                </span>
                                            </div>
                                            <div className="theme-main-menu position-static col-8 m-auto m-md-0 col-sm-6 col-md-8 col-lg-5 px-0">
                                                <Link
                                                    href={elem.buyLink}
                                                    target='_blank'
                                                    rel="sponsored nofollow"
                                                    className="start-btn-one fs-18 fw-500 tran3s position-relative w-100 text-center"
                                                >
                                                    View on Amazon
                                                </Link>
                                            </div>
                                            <div
                                                className="card-style d-flex flex-column mt-2"
                                            >
                                                <h5>Recommended by</h5>
                                                <div className="avatar d-flex flex-wrap align-items-center">

                                                    {elem.recommenders ?
                                                        elem.recommenders.map((elem, index) => (
                                                            <div className="d-flex align-items-center flex-column m-2" key={index}>
                                                                <img src={elem.imageUrl120 ? elem.imageUrl120 : "/images/assets/blank_people.jpg"} alt="" />
                                                                <Link href={"/people/" + elem.slug} className="text-center mt-1" style={{ fontSize: "12px", color: "#26547C", lineHeight: "14px" }}>{elem.name}</Link>
                                                            </div>
                                                        )) :
                                                        elem.expertRecommenders.map((elem, index) => {
                                                            return (
                                                                <Link key={index} href={"/people/" + elem.slug} style={{ color: "#26547C", fontSize: "13px" }} className="pe-2 text-nowrap">
                                                                    {elem.name},
                                                                </Link>
                                                            )

                                                        })
                                                    }
                                                    {/* {elem.recommenders ?
                                                        elem.recommenders.map((element, index) => {
                                                            return <img key={index} src={"author_images" + element.name + ".jpg"} alt="" />
                                                        }) : null

                                                    } */}
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    {/* End col-6 */}
                                </div>
                                {/* /.row */}
                            </div >
                            {/* /.container */}
                        </div >
                    }) : null
            }
        </>
    )
}

export default Books_Hero;
