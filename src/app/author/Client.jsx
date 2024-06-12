"use client"
import { AuthorCard, Person } from '@/component/Common/Person'
import React, { useEffect, useRef, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'

export const Client = () => {
    const [store, setStore] = useState([])
    const page = useRef(0)

    const fetchData = async()=>{
        try{
            let res = await fetch(`/api/fetch-data/author?page=${page.current}`)
            res = await res.json();
            console.log(res)
            setStore([...store, ...res.data])
            page.current = page.current + 1
        }catch(err){
            console.log(err)
        }
    }

    let flage = true;
    useEffect(()=>{
        if(flage){
            fetchData()
            flage = false;
        }
    },[])
    return (
        <InfiniteScroll
            dataLength={store.length} //This is important field to render the next data
            next={fetchData}
            className="w-100 overflow-hidden"
            hasMore={4305 !== store.length}
            endMessage={
                <p style={{ textAlign: 'center' }}>
                    <b>Yay! You have seen it all</b>
                </p>
            }
        >
            <div className="row justify-content-center">
                {
                    store.map((item, index) => (
                        <AuthorCard people={item} page={true} key={index} />
                    ))
                }
            </div>

        </InfiniteScroll>
    )
}
