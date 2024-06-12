"use client"
import { useEffect, useRef, useState } from 'react'
import style from './list.module.css'
import Link from 'next/link';
import InfiniteScroll from 'react-infinite-scroll-component';

export const Client = () => {
    const [list, setList] = useState([]);
    const [store, setStor] = useState([])
    const page = useRef(0)
    const stop = useRef(false)


    const get_list = async () => {
        let res = await fetch(`/api/fetch-data/list-name`)
        res = await res.json();
        console.log(res.data)
        setList(res.data);
    }

    let fetchData = async () => {
        try {
            if (stop.current) return;
            let res = await fetch(`/api/fetch-data/list?page=${page.current}`)
            res = await res.json();
            console.log(res)
            page.current === 0 ? setStor(res.data) : setStor([...store, ...res.data])
            page.current = page.current + 1
        } catch (err) {
            console.log(err)
        }
    }


    const fillter = async (e) => {
        try {
            let doc = document.querySelector(".active")
            doc.classList.remove("active")
            e.target.classList.add('active')
            if (e.target.name === "All") {
                stop.current = false;
                return fetchData()
            }
            stop.current = true;
            let res = await fetch(`/api/fetch-data/list?search=${e.target.name}`)
            res = await res.json();
            // console.log(res)
            page.current = 0
            setStor(res.data)
        } catch (err) {
            console.log(err)
        }
    }

    let flage = true;
    useEffect(() => {
        if (flage) {
            get_list()
            fetchData()
            flage = false;
        }
    }, [])
    return (
        <>
            <div className={"col-lg-3 list_menu  " + style.list_menu}>
                <ul className="list-unstyled p-2  m-0">
                    <li>
                        <button className="text-start w-100 border-0 py-3 px-3 active" name='All' onClick={fillter}>All</button>
                    </li>
                    {
                        list.map((item, index) => (
                            <li key={index}>
                                <button className="text-start w-100 border-0 py-3 px-3 " name={item._id} onClick={fillter}>{item._id} </button>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <InfiniteScroll
                dataLength={store.length}
                next={fetchData}
                className="w-100 overflow-hidden"
                hasMore={4305 !== store.length}
                endMessage={
                    <p style={{ textAlign: 'center' }}>
                        <b>Yay! You have seen it all</b>
                    </p>
                }
            >

                <div className="row">
                    {
                        store.map((item, index) => (
                            <Link key={index} href={"/list/"+(item.Best_Book_List).toLowerCase().replace(/ /g, "-")} className="text-decoration-none text-dark col-6 py-3">
                                <div className={"p-2 rounded overflow-hidden " + style.listCard}>
                                    <div className="position-relative d-flex justify-content-between" style={{ height: "200px" }}>
                                        {
                                            item.imgArr.map((link, index) => (
                                                index !== 2 ? <img key={index} src={link} alt="" /> :
                                                    <img src={link} key={index} className="position-absolute" style={{ top: "4%", left: "50%", transform: "translateX(-50%)" }} alt="" />
                                            ))
                                        }
                                        {/* <img src="/modalbook.png" alt="" /> */}
                                    </div>
                                    <div className="position-relative">
                                        <h3 className="text-center mt-3 fs-4 fw-semibold">{item.Best_Book_List}</h3>
                                        <span className="text-center d-block">{item.count} Books</span>
                                        <div className={"d-flex position-absolute justify-content-center " + style.list_card_arrow}><i class="bi bi-arrow-right"></i></div>
                                    </div>
                                </div>
                            </Link>

                        ))
                    }

                </div>
            </InfiniteScroll>
        </>
    )
}
