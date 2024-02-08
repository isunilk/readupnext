import Link from "next/link";
import Image from "next/image";


const PeopleBooks = ({ data }) => {
    return (
        <>
            {data ?
                data.map((bookList, index) => {
                    return <div
                        className="recommended-books overflow-hidden position-relative mx-xl-3 pt-10 pb-10 d-flex flex-column justify-content-between align-items-center mt-10 mb-10 rounded"
                        key={index}
                        style={{ width: "220px" }}
                    >
                        <Image
                            width={180}
                            height={280}
                            src={bookList.imageUrl?bookList.imageUrl:"./images/assets/nullBook.PNG"}
                            alt={bookList.title}
                            style={{ cursor: "pointer" }}
                            className="team-img position-relative mb-2"
                            onClick={() => { window.open(bookList.buyLink) }}
                        />

                        <div className="col-lg-12 d-flex flex-column justify-content-between">
                            <Link href={bookList.buyLink} target="_blank">
                                <h3 className="fs-18 fw-bold text-center tx-new" >{bookList.title}</h3>
                            </Link>
                            <p className="fs-15 text-center" style={{ fontWeight: "400" }}>{bookList.authorName}</p>
                        </div>
                        <div className="theme-main-menu position-static w-100 py-0 px-0">
                            <Link
                                href={bookList.buyLink}
                                target='_blank'
                                rel='sponsored nofollow'
                                className="start-btn-one fs-18 fw-500 tran3s position-relative px-0 text-center w-100"
                            >
                                View on Amazon
                            </Link>
                        </div>
                    </div>
                }) : null
            }
        </>
    )
}

export default PeopleBooks;
