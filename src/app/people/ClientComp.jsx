"use client"
import style from "./person.module.css"
import { useEffect, useRef, useState } from "react"
import InfiniteScroll from "react-infinite-scroll-component"
import { Person } from "@/component/Common/Person"

const recommenderCategories = [
    "Actor",
    "Athlete",
    "Author",
    "Billionaire",
    "BookToker",
    "Chef",
    "Comedian",
    "Doctor",
    "Entrepreneur",
    "Executive",
    "Filmmaker",
    "Fitness",
    "Investor",
    "Journalist",
    "Model",
    "Musician",
    "Other",
    "Politician",
    "Producer",
    "Scientist"
]
export const ClientComp = () => {
    const [store, setStor] = useState([])
    const stop = useRef(false)
    const page = useRef(0);

    let fetchData = async () => {
        try {
            if (stop.current) return;
            let res = await fetch(`/api/fetch-data/peoples?page=${page.current}`)
            res = await res.json();
            // console.log(res)
            page.current===0? setStor(res.data):   setStor([...store, ...res.data])
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
            if(e.target.name==="All"){
                stop.current=false;
                return fetchData()
            }
            stop.current = true;
            let res = await fetch(`/api/fetch-data/peoples?search=${e.target.name}`)
            res = await res.json();
            // console.log(res)
            page.current = 0
            setStor(res.data)
        } catch (err) {
            console.log(err)
        }
    }

    let flag = true;
    useEffect(() => {
        if(flag){
            fetchData()
            flag =false
        }
    }, [])
    return (
        <section className="container d-flex gap-3">
            <div className={"col-lg-3 list_menu  " + style.list_menu}>
                <ul className="list-unstyled p-2  m-0">
                    <li>
                        <button className="text-start w-100 border-0 py-3 px-3 active" name="All" onClick={fillter}>All</button>
                    </li>
                    {
                        recommenderCategories.map((item, index) => (
                            <li key={index}>
                                <button className="text-start w-100 border-0 py-3 px-3 " name={item} onClick={fillter}>{item}</button>
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
                <div className="row ps-1">
                    {
                        store.map((item, index) => (
                            <Person people={item} page={true} key={index} />
                        ))
                    }
                </div>

            </InfiniteScroll>
        </section>
    )
}
