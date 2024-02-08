import React from 'react'
import Header1 from '../../../components/header/Header1'
import Image from 'next/image'
import DefaultFooter from '../../../components/footer/DefaultFooter'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/router'

const colorClass = ["skyBlue", "pink", "violet", "green"]

const authorName = () => {

    function shareOnTwitter() {
        const twitterIntentURL = "https://twitter.com/intent/tweet";
        const contentQuery = `?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent("Dr. Seuss Quotes")}`;
        const shareURL = twitterIntentURL + contentQuery;
        window.open(shareURL, "_blank");
    }
    function shareOnFacebook() {
        const facebookIntentURL = "https://www.facebook.com/sharer/sharer.php";
        const contentQuery = `?u=${encodeURIComponent(window.location.href)}&quote=${encodeURIComponent("text")}`;
        const shareURL =  facebookIntentURL + contentQuery;
        window.open(shareURL, "_blank");
    }
    function shareOnPintrenst() {
        const facebookIntentURL = "http://pinterest.com/pin/create/link/";
        const contentQuery = `?url=${encodeURIComponent(window.location.href)}&quote=${encodeURIComponent("text")}`;
        const shareURL =  facebookIntentURL + contentQuery;
        window.open(shareURL, "_blank");
    }
    return(
        <>
            <Header1/>
            <h1 className="pt-120 container">Available Soon... </h1>
            <DefaultFooter/>
        </>
    )
    return (
        <>
            <Header1 />
            <div className='container pt-120'>
                <div className="hero">
                    <h1 className='fs-1 fw-500'>Dr. Seuss Quotes </h1>
                    <p>100+ of the best book quotes from Dr. Seuss</p>
                </div>
                <div className="content row mt-50">
                    <div className="col-3">
                        <Image
                            width={150}
                            height={150}
                            src="/author_images/Bill_Gates.jpg"
                            alt='book_Image'
                        />
                    </div>
                    <div className="col-9 px-2">
                        <div className='py-3 px-4 col-8 author-quotes'>
                            <div className='d-flex align-items-center justify-content-between mb-4'>
                                <h2 className='fs-4 fw-500'>
                                    <i class={`bi bi-chat-quote-fill me-2 ${colorClass[(Math.floor(Math.random() * colorClass.length))]}`}></i>
                                    01
                                </h2>
                                <div className='d-flex align-items-center fw-500'>
                                    share
                                    <button className='btn  fs-5'><i class="bi bi-facebook" onClick={shareOnFacebook}></i></button>
                                    <button className='btn fs-5 pt-0' onClick={shareOnTwitter}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
                                            <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z" />
                                        </svg>
                                    </button>
                                    <button className="btn fs-5" onClick={shareOnPintrenst}><i class="fab fa-pinterest"></i></button>
                                </div>
                            </div>
                            <p className='fw-500 text-dark'>“I do so like green eggs and ham. Thank you! Thank you, Sam-I-am.”</p>
                        </div>
                    </div>
                </div>
            </div>
            <DefaultFooter/>
        </>
    )
}

export default authorName
