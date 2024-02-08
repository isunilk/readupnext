import Head from "next/head"
import Image from "next/image"
import Link from "next/link"


export const PeopleHero = ({ details }) => {
    const onImageError = (e) => {
        e.target.src = "/images/assets/blank_people.jpg"
    }
    function media(){
        let arr = []
        if(details.main_p.twitterHandle!=="-"){
            arr.push(`https://twitter.com/${details.main_p.twitterHandle}`)
        }
        if(details.main_p.instagramHandle !== "-"){
            arr.push(`https://www.instagram.com/${details.main_p.instagramHandle}`)
        }
        if(details.main_p.youtubeHandle !=="-"){
            arr.push(`https://www.youtube.com/${details.main_p.youtubeHandle}`)
        }
        if(details.main_p.wikipediaLink !=="-"){
            arr.push(details.main_p.wikipediaLink)
        }
        if(details.main_p.website !=="-"){
            arr.push(details.main_p.website)
        }
        return arr
    }

    const peopleSchema = {
        "@context": "https://schema.org",
        "@type": "Person",
        name: details.main_p.name,
        image:details.main_p.imageUrl,
        sameAs: media()
        // [
        //     details.main_p.twitterHandle !== "-" ? `https://twitter.com/${details.main_p.twitterHandle}` : null,
        //     details.main_p.instagramHandle !== "-" ? `https://www.instagram.com/${details.main_p.instagramHandle}` : null,
        //     details.main_p.youtubeHandle !== "-" ? `https://www.youtube.com/${details.main_p.youtubeHandle}` : null,
        //     details.main_p.wikipediaLink !== "-" ? details.main_p.wikipediaLink : null,
        //     details.main_p.website !== "-" ? details.main_p.website : null,
        // ]
    }
    return (
        <>
            {/* <Head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(peopleSchema) }}
                />
            </Head> */}
            <div className="hero-banner-twelve pt-120 sm-pt-120 pb-20 sm-pb-20 lg-pb-80 md-pt-200">
                < div className="container" >
                    <div className="row align-items-start">
                        <div className="col-xxl-2 col-xl-3 col-md-4 d-flex flex-column align-items-center align-items-md-end" data-aos="fade-left">
                            <div className="image-holder zn2 d-inline-block position-relative" style={{ maxHeight: "542px", width: "fit-content", overflow: "hidden" }}>
                                {details ?
                                    <Image
                                        width={200}
                                        height={200}
                                        src={details.main_p.imageUrl ? details.main_p.imageUrl : "/images/assets/blank_people.jpg"}
                                        alt={details ? details.main_p.name : null}
                                        // className="w-100"
                                        onError={onImageError}
                                        style={{ borderRadius: "500px", width: "200px", height: "200px" }}
                                    /> : null}
                                {details ?
                                    <div className='social-link mt-10 d-flex align-items-center justify-content-center fs-5 gap-3 w-100'>
                                        {
                                            details.main_p.twitterHandle !== "-" ?
                                                <Link href={"https://twitter.com/" + details.main_p.twitterHandle} target='_blank' rel='nofollow' style={{ lineHeight: "19px" }}>
                                                    {/* <i class="bi bi-twitter-x"></i> */}
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter-x" viewBox="0 0 16 16">
                                                        <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z" />
                                                    </svg>
                                                </Link> : null
                                        }
                                        {
                                            details.main_p.instagramHandle !== "-" ?
                                                <Link href={"https://www.instagram.com/" + details.main_p.instagramHandle} target='_blank' rel='nofollow'>
                                                    <i className="bi bi-instagram"></i>
                                                </Link> : null
                                        }
                                        {details.main_p.youtubeHandle !== "-" ?
                                            <Link href={"https://www.youtube.com/" + details.main_p.youtubeHandle} target='_blank' rel='nofollow'>
                                                <i className="bi bi-youtube"></i>
                                            </Link> : null
                                        }
                                        {details.main_p.wikipediaLink !== "-" ?
                                            <Link href={details.main_p.wikipediaLink} target='_blank' rel='nofollow' className='d-flex align-items-center'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-wikipedia" viewBox="0 0 16 16">
                                                    <path d="M8.835 3.003c.828-.006 2.688 0 2.688 0l.033.03v.288c0 .08-.045.12-.133.12-.433.02-.522.063-.68.29-.087.126-.258.393-.435.694l-1.52 2.843-.043.089 1.858 3.801.113.031 2.926-6.946c.102-.28.086-.478-.044-.595-.132-.114-.224-.18-.563-.195l-.275-.014a.161.161 0 0 1-.096-.035.1.1 0 0 1-.046-.084v-.289l.042-.03h3.306l.034.03v.29c0 .078-.045.117-.133.117-.433.02-.754.113-.962.281a1.64 1.64 0 0 0-.488.704s-2.691 6.16-3.612 8.208c-.353.672-.7.61-1.004-.019A224.05 224.05 0 0 1 8.044 8.81c-.623 1.285-1.475 3.026-1.898 3.81-.411.715-.75.622-1.02.019-.45-1.065-1.131-2.519-1.817-3.982-.735-1.569-1.475-3.149-1.943-4.272-.167-.4-.293-.657-.412-.759-.12-.1-.368-.16-.746-.18C.069 3.429 0 3.395 0 3.341v-.303l.034-.03c.615-.003 3.594 0 3.594 0l.034.03v.288c0 .08-.05.118-.15.118l-.375.016c-.322.013-.483.11-.483.288 0 .083.034.217.109.4.72 1.753 3.207 6.998 3.207 6.998l.091.023 1.603-3.197-.32-.71L6.24 5.095s-.213-.433-.286-.577l-.098-.196c-.387-.77-.411-.82-.865-.88-.137-.017-.208-.035-.208-.102v-.304l.041-.03h2.853l.075.024v.303c0 .069-.05.104-.15.104l-.206.03c-.523.04-.438.254-.09.946l1.057 2.163 1.17-2.332c.195-.427.155-.534.074-.633-.046-.055-.202-.144-.54-.158l-.133-.015a.159.159 0 0 1-.096-.034.099.099 0 0 1-.045-.085v-.288l.041-.03Z" />
                                                </svg>
                                            </Link> : null
                                        }
                                        {details.main_p.website !== "-" ?
                                            <Link href={details.main_p.website} target='_blank' rel='nofollow'>
                                                <i className="bi bi-link-45deg"></i>
                                            </Link> : null
                                        }
                                    </div> : null
                                }
                            </div>
                        </div>

                        {/* End col-6 */}
                        <div className="col-md-8 books-hero-secondDiv d-flex flex-column align-items-center align-items-md-start mt-25 mt-md-0">
                            <div className="text-wrapper" data-aos="fade-right">
                                <h1 className="fs-2 fw-500 tx-new text-center text-md-start">
                                    {/* {details ? details.main_p.name : null} Recommended Books ({details ? details.main_p.booksCount : null}) */}
                                    {details ? details.main_p.booksCount : null} {details ? details.main_p.name : null} Recommended Books
                                </h1>
                                {/* <p className="text-lg tx-dark mb-30 lg-pt-20 lg-mb-20">
                                    Recommended {details ? details.main_p.booksCount : null} Books
                                </p> */}
                                <p className='text-center font-14 text-md-start'>
                                    {details ? details.main_p.bio : null}
                                </p>
                                {/* <div className="mt-60 d-flex justify-content-center">
                                    <p className='text-center col-lg-10'> You've landed on {details ? details.main_p.name : null}'s bookshelf. Discover the titles they've recommended as influential in their life and career.
                                        Understand their world and learn what fuels their passions, one book at a time.
                                    </p>
                                </div> */}
                            </div>
                        </div>
                        {/* End col-6 */}
                    </div>
                    {/* /.row */}

                </div >

                {/* /.container */}
            </div >
        </>
    )
}
