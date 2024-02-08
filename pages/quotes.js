import Seo from "../components/common/Seo";
import Header1 from "../components/header/Header1";
import DefaultFooter from "../components/footer/DefaultFooter";
import Image from "next/image";
import Link from "next/link";
import InfiniteScroll from 'react-infinite-scroll-component';
import { useRef, useState } from "react";
import SearchBar2 from "../components/team/SearchBar2";


const colorClass = ["skyBlue", "pink", "violet", "green"]

const quotes = ({ quotesData }) => {
    const [quotes, setQuotes] = useState()

    const getNewQuotes = async(e)=>{
        document.querySelector(".tab-list li.active").classList.remove("active")
        let target = e.target;
        target.classList.add("active")
        
        let data = await fetch("/api/") 
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
            <div className="container quotes-main pt-120">
                <div>
                    <h1 className="fs-2 main-title fw-500">Explore Book & Author Quotes</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat illum repellat similique officiis eum laudantium mollitia eos, rem ipsum, ullam esse! Sit dolorem, officiis fuga numquam nulla consequatur corporis rem.</p>
                </div>

                <div className="tab d-flex gap-2 align-items-center mb-50 justify-content-center mt-50">
                    <button className="rounded-0 fw-500 fs-4 px-4 active">Books</button>
                    <button className="rounded-0 fw-500 fs-4 px-4">Authors</button>
                </div>
                <div className="d-flex">
                    <ul className="list-unstyled tab-list col-xl-1 text-center">
                        <li className="active" role="button" onClick={getNewQuotes}>A</li>
                        <li role="button" onClick={getNewQuotes}>B</li>
                        <li role="button" onClick={getNewQuotes}>C</li>
                        <li role="button" onClick={getNewQuotes}>D</li>
                        <li role="button" onClick={getNewQuotes}>E</li>
                        <li role="button" onClick={getNewQuotes}>F</li>
                        <li role="button" onClick={getNewQuotes}>G</li>
                        <li role="button" onClick={getNewQuotes}>H</li>
                        <li role="button" onClick={getNewQuotes}>I</li>
                        <li role="button" onClick={getNewQuotes}>J</li>
                        <li role="button" onClick={getNewQuotes}>K</li>
                        <li role="button" onClick={getNewQuotes}>L</li>
                        <li role="button" onClick={getNewQuotes}>M</li>
                        <li role="button" onClick={getNewQuotes}>N</li>
                        <li role="button" onClick={getNewQuotes}>O</li>
                        <li role="button" onClick={getNewQuotes}>P</li>
                        <li role="button" onClick={getNewQuotes}>Q</li>
                        <li role="button" onClick={getNewQuotes}>R</li>
                        <li role="button" onClick={getNewQuotes}>S</li>
                        <li role="button" onClick={getNewQuotes}>T</li>
                        <li role="button" onClick={getNewQuotes}>U</li>
                        <li role="button" onClick={getNewQuotes}>V</li>
                        <li role="button" onClick={getNewQuotes}>W</li>
                        <li role="button" onClick={getNewQuotes}>X</li>
                        <li role="button" onClick={getNewQuotes}>Y</li>
                        <li role="button" onClick={getNewQuotes}>Z</li>
                    </ul>
                    <div className="d-flex link-div flex-wrap col-xl-11">
                        <a href="" className="col-lg-3 fw-500 py-2 px-2"><i class={`bi bi-circle-fill me-1 ${colorClass[(Math.floor(Math.random() * colorClass.length))]}`} style={{fontSize:"8px"}}></i>"Artificial friend"</a>
                        <a href="" className="col-lg-3 fw-500 py-2 px-2"><i class={`bi bi-circle-fill me-1 ${colorClass[(Math.floor(Math.random() * colorClass.length))]}`} style={{fontSize:"8px"}}></i>"Artificial friend"</a>
                        <a href="" className="col-lg-3 fw-500 py-2 px-2"><i class={`bi bi-circle-fill me-1 ${colorClass[(Math.floor(Math.random() * colorClass.length))]}`} style={{fontSize:"8px"}}></i>"Artificial friend"</a>
                        <a href="" className="col-lg-3 fw-500 py-2 px-2"><i class={`bi bi-circle-fill me-1 ${colorClass[(Math.floor(Math.random() * colorClass.length))]}`} style={{fontSize:"8px"}}></i>"Artificial friend"</a>
                        <a href="" className="col-lg-3 fw-500 py-2 px-2"><i class={`bi bi-circle-fill me-1 ${colorClass[(Math.floor(Math.random() * colorClass.length))]}`} style={{fontSize:"8px"}}></i>"Artificial friend"</a>
                        <a href="" className="col-lg-3 fw-500 py-2 px-2"><i class={`bi bi-circle-fill me-1 ${colorClass[(Math.floor(Math.random() * colorClass.length))]}`} style={{fontSize:"8px"}}></i>"Artificial friend"</a>
                        <a href="" className="col-lg-3 fw-500 py-2 px-2"><i class={`bi bi-circle-fill me-1 ${colorClass[(Math.floor(Math.random() * colorClass.length))]}`} style={{fontSize:"8px"}}></i>"Artificial friend"</a>
                        <a href="" className="col-lg-3 fw-500 py-2 px-2"><i class={`bi bi-circle-fill me-1 ${colorClass[(Math.floor(Math.random() * colorClass.length))]}`} style={{fontSize:"8px"}}></i>"Artificial friend"</a>
                        <a href="" className="col-lg-3 fw-500 py-2 px-2"><i class={`bi bi-circle-fill me-1 ${colorClass[(Math.floor(Math.random() * colorClass.length))]}`} style={{fontSize:"8px"}}></i>"Artificial friend"</a>
                        <a href="" className="col-lg-3 fw-500 py-2 px-2"><i class={`bi bi-circle-fill me-1 ${colorClass[(Math.floor(Math.random() * colorClass.length))]}`} style={{fontSize:"8px"}}></i>"Artificial friend"</a>
                        <a href="" className="col-lg-3 fw-500 py-2 px-2"><i class={`bi bi-circle-fill me-1 ${colorClass[(Math.floor(Math.random() * colorClass.length))]}`} style={{fontSize:"8px"}}></i>"Artificial friend"</a>
                        <a href="" className="col-lg-3 fw-500 py-2 px-2"><i class={`bi bi-circle-fill me-1 ${colorClass[(Math.floor(Math.random() * colorClass.length))]}`} style={{fontSize:"8px"}}></i>"Artificial friend"</a>
                        <a href="" className="col-lg-3 fw-500 py-2 px-2"><i class={`bi bi-circle-fill me-1 ${colorClass[(Math.floor(Math.random() * colorClass.length))]}`} style={{fontSize:"8px"}}></i>"Artificial friend"</a>
                        <a href="" className="col-lg-3 fw-500 py-2 px-2"><i class={`bi bi-circle-fill me-1 ${colorClass[(Math.floor(Math.random() * colorClass.length))]}`} style={{fontSize:"8px"}}></i>"Artificial friend"</a>
                        <a href="" className="col-lg-3 fw-500 py-2 px-2"><i class={`bi bi-circle-fill me-1 ${colorClass[(Math.floor(Math.random() * colorClass.length))]}`} style={{fontSize:"8px"}}></i>"Artificial friend"</a>
                        <a href="" className="col-lg-3 fw-500 py-2 px-2"><i class={`bi bi-circle-fill me-1 ${colorClass[(Math.floor(Math.random() * colorClass.length))]}`} style={{fontSize:"8px"}}></i>"Artificial friend"</a>
                        <a href="" className="col-lg-3 fw-500 py-2 px-2"><i class={`bi bi-circle-fill me-1 ${colorClass[(Math.floor(Math.random() * colorClass.length))]}`} style={{fontSize:"8px"}}></i>"Artificial friend"</a>
                        <a href="" className="col-lg-3 fw-500 py-2 px-2"><i class={`bi bi-circle-fill me-1 ${colorClass[(Math.floor(Math.random() * colorClass.length))]}`} style={{fontSize:"8px"}}></i>"Artificial friend"</a>
                        <a href="" className="col-lg-3 fw-500 py-2 px-2"><i class={`bi bi-circle-fill me-1 ${colorClass[(Math.floor(Math.random() * colorClass.length))]}`} style={{fontSize:"8px"}}></i>"Artificial friend"</a>
                        <a href="" className="col-lg-3 fw-500 py-2 px-2"><i class={`bi bi-circle-fill me-1 ${colorClass[(Math.floor(Math.random() * colorClass.length))]}`} style={{fontSize:"8px"}}></i>"Artificial friend"</a>
                        <a href="" className="col-lg-3 fw-500 py-2 px-2"><i class={`bi bi-circle-fill me-1 ${colorClass[(Math.floor(Math.random() * colorClass.length))]}`} style={{fontSize:"8px"}}></i>"Artificial friend"</a>
                        <a href="" className="col-lg-3 fw-500 py-2 px-2"><i class={`bi bi-circle-fill me-1 ${colorClass[(Math.floor(Math.random() * colorClass.length))]}`} style={{fontSize:"8px"}}></i>"Artificial friend"</a>
                        <a href="" className="col-lg-3 fw-500 py-2 px-2"><i class={`bi bi-circle-fill me-1 ${colorClass[(Math.floor(Math.random() * colorClass.length))]}`} style={{fontSize:"8px"}}></i>"Artificial friend"</a>
                        
                       
                    </div>
                </div>
            </div>
            <DefaultFooter />
        </>
    )
}

export default quotes


// export async function getServerSideProps() {
//     // Call an external API endpoint to get posts
//     const res = await fetch(`${process.env.NEXT_API_URL}/api/quotes?page=0`)
//     const quotes = res ? await res.json() : [{ _id: "loading" }]

//     // By returning { props: { posts } }, the Blog component
//     // will receive `posts` as a prop at build time
//     return {
//         props: {
//             quotes,
//         },
//     }
// }