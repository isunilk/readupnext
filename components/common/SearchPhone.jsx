import React, { useEffect, useState } from 'react'
import { Search } from '../team/Search'
import { useRouter } from 'next/router'

export const SearchPhone = () => {
    const router = useRouter();
    const[showSearch, setShowSearch] = useState(false)

    // useEffect(()=>{
    //     window.addEventListener("click",()=>{
    //         if(showSearch){
    //             setShowSearch(false)
    //         }
    //     })
    // },[])
    const hideSearch = ()=>{
        setShowSearch(!showSearch)
    }
    return (
        <div className='search-phone w-100 justify-content-end d-md-none position-fixed ' style={{ top: "8rem", right: "0px", zIndex: "200", display:router.route!=="/"?"flex":"none" }}>
            <div className='d-flex justify-content-end ps-2 col-12 gap-2'>
                <div className='w-100' style={{display:showSearch?"block":"none"}}>
                    <Search call={hideSearch} />
                </div>
                <button className='d-flex justify-content-center align-items-center me-2'
                    style={{
                        height: "40px",
                        minWidth: "40px",
                        borderRadius: "50px",
                        background: "#ffed4e",
                        color: "white",
                        // border:"1px solid black"
                    }}
                    onClick={()=>{setShowSearch(!showSearch)}}
                >
                    <img src="/images/icon/icon_122.svg" alt="search" />
                </button>
            </div>
        </div>
    )
}
