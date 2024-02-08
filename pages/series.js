import Link from "next/link";
import DefaultFooter from "../components/footer/DefaultFooter";
import Header1 from "../components/header/Header1"
import SeriesMap from "../components/team/SeriesMap";
import { Search } from "../components/team/Search";
import Seo from "../components/common/Seo";
import SearchBar1 from "../components/team/SearchBar1";
import SearchBar2 from "../components/team/SearchBar2";
import InfiniteScroll from 'react-infinite-scroll-component';
import { useRef, useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Head from "next/head";

const series = () => {

    // const [series, setSeries] = useState();
    // const [call, setCall] = useState(false);
    // const pageValue = useRef(0)
    // const getSeries = async (page) => {
    //     try {
    //         console.log("api call for page no.", page)
    //         let res = await fetch(`/api/series?page=${page}`, {
    //             method: "GET",
    //             headers: {
    //                 "Authorization": `Bearer ${process.env.NEXT_PUBLIC_FRONTEND_KEY}`
    //             }
    //         })
    //         res = await res.json();
    //         if (page === 0) {
    //             setSeries(res);
    //         } else {
    //             setSeries((prev) => [...prev, ...res])
    //         }
    //         setCall(false);

    //     } catch (err) {
    //         console.log(err)
    //     }
    // }

    // const handelScroll = () => {
    //     let scrollHeight = document.documentElement.scrollHeight;
    //     let innerHieght = window.innerHeight;
    //     let scrollTop = document.documentElement.scrollTop
    //     let eightyPre = (scrollHeight / 10) * 9

    //     if (eightyPre <= (innerHieght + scrollTop) && call === false) {
    //         setCall(true);
    //         console.log("call true", eightyPre, (innerHieght + scrollTop))
    //     }

    // }

    // let x = 0
    // useEffect(() => {

    //     if (x === 0) {
    //         getSeries(pageValue.current)
    //         window.addEventListener("scroll", handelScroll);
    //         pageValue.current = pageValue.current + 1
    //         x++
    //     }
    // }, []);
    // useEffect(() => {
    //     if (call) {
    //         console.log("api call", pageValue.current)
    //         getSeries(pageValue.current)
    //         pageValue.current = pageValue.current + 1
    //         return
    //     }
    // }, [call])






    /*^^^^^^^^^^^^^^new code^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*/

    const [series, setSeries] = useState([]);
    const [count, setCount] = useState(0)
    const pathName = usePathname()

    const fetchData = async () => {
        let res = await fetch(`/api/series?page=${count}`)
        setCount(count + 1)
        let data = await res.json()
        setSeries((prev) => [...prev, ...data])
    };

    useEffect(() => {
        fetchData()
    }, [])

    const seriesSchema = {
        "@context": "http://schema.org",
        "@graph": [
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "item": {
                            "@id": "https://www.readupnext.com/",
                            "name": "Home"
                        }
                    },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "item": {
                            "@id": "https://www.readupnext.com/series",
                            "name": "Find your favorite Book Series & read them in perfect order"
                        }
                    }
                ]
            },
            {
                "@type": "CollectionPage",
                "@id": "https://www.readupnext.com/book-series",
                "name": "Find your favorite Book Series & read them in perfect order",
                "description": "Welcome to our 'Series' section. Browse our comprehensive list of book series, showcasing over 6,000+ titles in their correct reading order. From the first book to the last, relish each tale across various genres as the author intended.",
                "about": {
                    "@type": "ItemList",
                    "numberOfItems": "5908",
                    "description": "Comprehensive list of book series."
                }
            }
        ]
    }

    return (
        <>
            <Seo
                pageTitle="Find your favorite Book Series & read them in perfect order"
                descr="Explore our extensive list of book series, with over 5,900+ titles in order. Dive into various genres and enjoy tales as the authors intended."
                metaTitle="Find your favorite Book Series & read them in perfect order"
                canonical={pathName}
                ogImage="https://www.readupnext.com/opengraph_image.png"
            />
            <Head>
                <script type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(seriesSchema) }}
                />
            </Head>
            <Header1 />
            <div className="fancy-feature-fiftyOne position-relative sm-mt-120 mb-60 sm-mb-20 mt-150">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12" data-aos="fade-right">
                            <div className="title-style-five d-flex flex-column align-items-center">
                                {/* <div className="sc-title-two fst-italic position-relative">
                                    Service Details
                                </div> */}
                                <h1 className="main-title fw-500 tx-dark">
                                    {/* Comprehensive List of Book Series in Reading Order */}
                                    Find your favorite Book Series & read them in perfect order

                                </h1>
                                <p className="col-lg-10 col-xl-9 text-center">Welcome to our 'Series' section. Browse our comprehensive list of book series, showcasing over 5,900+  titles in their correct reading order. From the first book to the last, relish each tale across various genres as the author intended</p>
                                {/* <div className="col-md-7">
                                    <Search searchField="series" placehold="Search any series. Ex- Harry Potter, Dune..." />
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* /.container */}
                <img
                    src="/images/shape/shape_172.svg"
                    alt="shap"
                    className="lazy-img shapes shape-two"
                />
                <img
                    src="/images/shape/shape_175.svg"
                    alt="shap"
                    className="lazy-img shapes shape-three"
                />
            </div>



            <div className="service-details position-relative mt-50 mb-170 md-mt-50 lg-mb-120">
                <div className="container">
                    {/* <div className="row justify-content-center"> */}
                    {/* <SeriesMap series={series} link="series" /> */}

                    <InfiniteScroll
                        dataLength={series.length} //This is important field to render the next data
                        next={fetchData}
                        className="w-100 overflow-hidden"
                        hasMore={4305 !== series.length}
                        loader={<div className="d-flex justify-content-center " >
                            <SearchBar2 />
                        </div>}
                        endMessage={
                            <p style={{ textAlign: 'center' }}>
                                <b>Yay! You have seen it all</b>
                            </p>
                        }
                    >
                        <div className="w-100 d-flex justify-content-center">
                            <div className="row justify-content-center justify-content-md-between justify-content-lg-start col-md-10">
                                <SeriesMap series={series} link="series" />

                            </div>
                        </div>

                    </InfiniteScroll>
                    {/* </div> */}
                </div>
            </div>

            {/* <div className="justify-content-center" style={{ display: call ? "flex" : "none" }}>
                <SearchBar2 />
            </div>
            <div className='position-fixed top-0 start-0 justify-content-center align-items-center w-100 h-100' style={{ display: series ? "none" : "flex", background: "#ffffffeb", zIndex: "20" }}>
                <SearchBar1 />
            </div> */}

            <DefaultFooter />
        </>
    )
}
export default series;
