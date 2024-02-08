import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'
// import { useRouter } from 'next/router'
import { selectorShow } from '../common/commen'

const List_layout = ({ data, counting, artical }) => {

    const showAll = (index, informer) => {
        let target = document.querySelectorAll(".artical-recom-parent")[index];
        if (informer === "artical") {
            let articalUl = target.querySelector("ul");
            articalUl.style.maxHeight = "fit-content";

            target.querySelectorAll(".fadeup-div")[0].style.display = "none"
        }
        if (informer === "recommender") {
            let recomDiv = target.querySelector(".recommender div")
            recomDiv.style.maxHeight = "fit-content";

            target.querySelector(".recommender div.fadeup-div").style.display = "none"
        }
    }

    const onBookImageError = (e) => {
        e.target.src = "/images/assets/nullBook.PNG"
    }
    return (
        <>
            {data ?
                data.map((item, index) => {
                    return <div key={index + 1000} className='listlayoutCard flex-column justify-content-between flex-lg-row col-sm-12 p-2 pb-lg-2 pb-4 d-flex my-4'>
                        <div className='d-flex position-relative col-lg-7 mb-4 mb-lg-0 flex-column flex-sm-row align-items-center align-items-sm-start'>

                            <Image
                                width={180}
                                height={280}
                                src={item.BookimageUrl ? item.BookimageUrl : "/images/assets/nullBook.PNG"}
                                alt={item.title}
                                style={{ cursor: "pointer" }}
                                onError={onBookImageError}
                                className="team-img position-relative mb-2 mb-sm-0"
                                onClick={() => { window.open(item.buyLink) }}
                            />
                            {
                                counting ? <div className="position-absolute top-0 start-0 px-3 py-2 fw-500" style={{ background: "#fff", borderRadius: "50px", marginTop: "-8px", marginLeft: "-8px" }}>{index + 1}</div> : null
                            }
                            {/* </div> */}


                            {/* </Link> */}
                            <div className='d-flex flex-column align-items-center align-items-sm-start ps-sm-3 h-100 w-100'>
                                <Link href={"/book/" + item.slug}>
                                    <h3 className='fw-400 mb-0 text-center tx-new text-md-start'>{item.title}</h3>
                                </Link>
                                <p className='fs-15 mb-0 fst-italic'>{item.subtitle}</p>
                                <p className='fs-15 d-flex align-items-center gap-2 mb-0'><span className='fw-bold'>Author:</span>{item.authorName}</p>
                                {
                                    item.yearPublished ? <p className='mb-0'><span className='fw-bold'>Publish Year :</span> {item.yearPublished}</p> : null
                                }
                                <div className="d-flex align-items-center mb-3">
                                    <ul className="style-none d-flex ps-0" style={{ borderLeft: "none" }}>
                                        {Array.from({ length: Math.ceil(item.rating) }, (_, i) => (
                                            Math.ceil(item.rating) - ((item.rating % Math.floor(item.rating)) + (i)) < 1 ?
                                                <li className="px-1" style={{ color: "#ffce4c" }} key={i}>
                                                    <i className="bi bi-star-half"></i>
                                                </li> :
                                                <li className="px-1" style={{ color: "#ffce4c" }} key={i}>
                                                    <i className="bi bi-star-fill" />
                                                </li>
                                        ))}
                                        {Array.from({ length: 5 - Math.ceil(item.rating) }, (_, i) => (
                                            <li className="px-1" key={i}>
                                                <i className="bi bi-star-fill" />
                                            </li>
                                        ))}
                                    </ul>
                                    <span className="fs-15 ms-1">{item.rating}</span>
                                    <span>&nbsp;({item.reviewCount})</span>
                                </div>
                                <p>{item.quote}</p>
                                <div className='d-flex gap-2 mt-auto mb-2'>
                                    <div className="theme-main-menu position-static w-auto py-0 px-0">
                                        <Link
                                            href={item.buyLink ? item.buyLink : "#"}
                                            target='_blank'
                                            rel='sponsored nofollow'
                                            className="start-btn-one tran3s position-relative w-100 px-2 text-center"
                                        >
                                            View on Amazon
                                        </Link>
                                    </div>
                                    <button >
                                        <Link className='text-dark' href={"/book/" + item.slug}>View Details</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='review col-lg-3 ms-md-2 mt-10 overflow-hidden artical-recom-parent'>
                            {artical?
                                item.articles.length > 0 ?
                                    <div className='position-relative mb-3'>
                                        <h6 className='fs-15'>Featured in <span>{item.articles.length} articles</span></h6>
                                        <ul className='mb-0'>
                                            {
                                                item.articles.map((artical, id) => {
                                                    return <li className='list-group-item py-1' key={id}>
                                                        <Link target='_blank' href={artical.link} rel='nofollow'>{artical.title}</Link>
                                                    </li>
                                                })
                                            }
                                        </ul>
                                        <div className='fadeup-div position-absolute bottom-0 start-0 w-100 d-md-none align-items-end justify-content-center' onClick={() => showAll(index, "artical")}> <i className="bi bi-chevron-double-down"></i></div>
                                    </div>
                                    : null
                                    :null
                            }
                            {
                                item.recommenders ?
                                    item.recommenders.length > 0 ?
                                        <div className='recommender'>
                                            <h5 className='fs-15 mb-1 fw-500'>Also Recommended by</h5>
                                            <div className='position-relative ps-2' style={{ borderLeft: "3px solid #c475e3" }}>
                                                {
                                                    item.recommenders.map((recmender, keyValue) => {
                                                        return (
                                                            <Link className='text-nowrap me-2' key={keyValue} href={"/people/" + recmender.slug}>
                                                                <span style={{ width: "fit-content", color: "#26547C", fontSize: "13px" }}>{recmender.name}</span>{item.recommenders.length - 1 !== keyValue ? "," : ""}&nbsp;
                                                            </Link>
                                                        )

                                                    })
                                                }
                                                <div className='fadeup-div position-absolute bottom-0 start-0 w-100 d-md-none align-items-end justify-content-center' onClick={() => showAll(index, "recommender")}> <i className="bi bi-chevron-double-down"></i></div>
                                            </div>
                                        </div> : null

                                    : item.expertRecommenders.length > 0 ?
                                        <div className='recommender'>
                                            <h5 className='fs-15 mb-1 fw-500'>Also Recommended by</h5>
                                            <div className='position-relative ps-2' style={{ borderLeft: "3px solid #c475e3" }}>
                                                {
                                                    item.expertRecommenders.map((recmender, keyid) => {
                                                        return (
                                                            < Link key={keyid} className='text-nowrap me-2' href={"/people/" + recmender.slug} >
                                                                <span style={{ width: "fit-content", color: "#26547C", fontSize: "13px" }}>{recmender.name}{item.expertRecommenders.length - 1 > keyid ? "," : ""}</span>
                                                            </Link>
                                                        )

                                                    })
                                                }
                                                <div className='fadeup-div position-absolute bottom-0 start-0 w-100 d-md-none align-items-end justify-content-center' onClick={() => showAll(index, "recommender")}> <i className="bi bi-chevron-double-down"></i></div>
                                            </div>
                                        </div>
                                        : null
                            }

                        </div>
                    </div >
                }) : null
            }
        </>
    )
}

export default List_layout
