import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'

const PeopleList_layout = ({ data, person }) => {


    const showPeople = (index) => {
        console.log("show index", index)
        let tartget = document.querySelectorAll(".recommended-parent")[index];
        let nameDiv = tartget.querySelector(".recommended-people");
        nameDiv.style.maxHeight = "fit-content";
        tartget.querySelector(".fadeup-div").style.display = "none"
    }

    // useEffect(()=>{
    //     // document.body.addEventListener("load", selector)
    //     selector
    // },[data])

    const onBookImageError = (e) => {
        e.target.src = "/images/assets/nullBook.PNG"
    }

    const onImageError = (e) => {
        e.target.src = "/images/assets/blank_people.jpg"
    }
    return (
        <>
            {data ?
                data.map((item, index) => {
                    return <div key={index} className='listlayoutCard flex-column justify-content-between flex-lg-row col-sm-12 p-2 pb-lg-2 d-flex my-4'>
                        <div className='d-flex mb-lg-0 flex-column flex-sm-row align-items-center align-items-md-start w-100'>
                            <Image
                                width={220}
                                height={330}
                                src={item.imageUrl ? item.imageUrl : "/images/assets/nullBook.PNG"}
                                alt={item.title}
                                onError={onBookImageError}
                                style={{ cursor: "pointer" }}
                                className="team-img position-relative mb-2 mb-sm-0"
                                onClick={() => { window.open(item.buyLink) }}
                            />
                            <div className='ps-sm-3 d-flex flex-column justify-content-between h-100 w-100'>
                                <Link href={item.buyLink} target='_blank' className='w-100'>
                                    <h3 className='fw-bold tx-new mb-0 text-center text-sm-start w-100'>{item.title}</h3>
                                </Link>
                                <p className='fs-15 mb-0 fst-italic text-center text-sm-start'>{item.subtitle}</p>
                                <p className='fs-15 d-flex align-items-center d-flex justify-content-center justify-content-sm-start gap-2'><span className='fw-bold'>Author :</span>{item.authorName}</p>

                                <div className='p-2 mb-2 rounded h-75'>
                                    <div className='d-flex gap-2 align-items-center'>
                                        <Image
                                            width={70}
                                            height={70}
                                            src={person.imageUrl ? person.imageUrl : "/images/assets/blank_people.jpg"}
                                            alt={person.name}
                                            onError={onImageError}
                                            style={{ borderRadius: "100px" }}
                                        />
                                        <span className='fs-15 fw-bold tx-new'>- {person.name}</span>
                                    </div>
                                    <p className="fs-6 overflow-auto mb-0" style={{ maxheight: "5rem" }}>{item.quote} <Link className='fst-italic sourceLink' style={{ fontSize: "0.8rem" }} href={item.source} target='_blank' rel='nofollow'>[Source]</Link></p>
                                </div>

                                <div className="theme-main-menu position-static col-lg-4 col-8 pt-0 pb-1 px-0">
                                    <Link
                                        href={item.buyLink}
                                        target='_blank'
                                        rel='sponsored nofollow'
                                        className="start-btn-one fs-18 fw-500 tran3s position-relative w-100 px-0 text-center"
                                    >
                                        View on Amazon
                                    </Link>
                                </div>
                            </div>

                        </div>

                        <div className='px-2 col-lg-3 mt-20 mt-lg-0 position-relative recommended-parent' >
                            {
                                item.expertRecommenders.length > 1 ?
                                    <h5 className='fs-15 text-nowrap'>Also Recommended by</h5>
                                    : null
                            }
                            <div className='row recommended-people m-0' style={{ borderLeft: "3px solid #c475e3" }}>
                                {
                                    item.expertRecommenders ?

                                        item.expertRecommenders.map((recom, id) => {
                                            return (
                                                recom.name !== person.name ? <Link key={id} href={"/people/" + recom.slug} className='px-0 mx-2' style={{ width: "fit-content", color: "#26547C", fontSize: "13px" }}>{recom.name}{item.expertRecommenders.length - 1 > id ? "," : ""}</Link> : null
                                            )
                                        }) : null
                                }
                            </div>
                            {/* {selector} */}
                            <div className='fadeup-div position-absolute bottom-0 start-0 w-100 align-items-end justify-content-center' onClick={() => showPeople(index)}><i className="bi bi-chevron-double-down"></i></div>
                        </div>
                    </div >
                }) : null
            }
        </>
    )
}

export default PeopleList_layout;
