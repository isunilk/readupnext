
"use client"
import { ListCard } from '@/component/Common/ListCard';
import Link from 'next/link';
import { useRef, useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component'

export const Client = () => {
    const [store, setStor] = useState([])
    const page = useRef(0);

    const fetchData = async () => {
        try {
            let res = await fetch(`/api/fetch-data/series?page=${page.current}`)
            res = await res.json();
            console.log(res)
            setStor([...store, ...res.data])
            page.current = page.current + 1
        } catch (err) {
            console.log(err)
        }
    }

    let flage = true;
    useEffect(() => {
        if (flage) {
            fetchData()
            flage = false;
        }
    }, [])
    return (
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
            <div className='row'>
                {
                    store.map((item, index) => (
                        <Link href={"/series/"+item.series_slug}  key={index} className="text-decoration-none text-dark col-4 py-3">
                            <ListCard list={item}/>
                            
                        </Link>
                    ))
                }
            </div>

        </InfiniteScroll>
    )
}
