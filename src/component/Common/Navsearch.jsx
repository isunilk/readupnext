"use client"
import style from "@/app/page.module.css"
import Link from "next/link";
import { useEffect, useState } from "react"

export const Navsearch = () => {
    const [searchResulte, setSearchResulte] = useState();
    let x = true
    const search = async (searchInput, url) => {
        try {
            let res = await fetch(`/api/${url}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    searchInput,
                })
            })
            res = await res.json();
            console.log(res)
            // let searchValue = document.getElementById('searchInputValue').value;
            if ((res.categories.length > 0 || res.series.length > 0 || res.books.length > 0 || res.people.length > 0 || res.author.length > 0)) {
                setSearchResulte(res)
            } else {
                setSearchResulte({ massage: "Not Found" })
            }
            x = true;
        } catch (err) {
            console.log(err)
        }
    }

    let y = true
    let z = 0

    const callApi = (e) => {
        // console.log(e)
        setTimeout(() => {
            y = false;
        }, [1000]);
        setTimeout(() => {
            // let searchValue = e?e.value:null;
            let searchValue = e ? e.value : null;
            console.log(searchValue)
            if (y === false && searchValue) {
                z = 0;
                search(searchValue, "search");
            } else {
                callApi(e);
                setSearchResulte(null)
            }
        }, [1200])
    }
    const handleSearch = (e) => {
        y = true
        if (z === 0) {
            callApi(e.target)
            z++
        }
        // if(e.key==="Enter"){
        //     callApi()
        // }
    }
    useEffect(() => {
        window.addEventListener("click", () => {
            let data = document.querySelector(".search-section:hover");
            if (!data) {
                setSearchResulte(null);
            }
        })
    }, [])
    return (
        <div className={`d-flex flex-grow-1 position-relative p-0 align-items-center ${style.search}`}>
            <input type="text" name="" placeholder="Search any book, person or series..." id="" className="w-100 px-2 fst-italic" onInput={handleSearch}/>
            <button className="p-1">
                <svg width="27" height="20" viewBox="0 0 37 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.002 22.2972C22.5249 22.2972 27.002 18.4856 27.002 13.7837C27.002 9.08178 22.5249 5.27014 17.002 5.27014C11.4791 5.27014 7.00195 9.08178 7.00195 13.7837C7.00195 18.4856 11.4791 22.2972 17.002 22.2972Z" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M30 23.9189L24 19.8649" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
            {searchResulte ?
                <div className={`position-absolute  ${style.searchResulte}`}>
                    <ul className='ps-0' style={{ maxHeight: "230px", overflowY: "auto" }}>
                        {searchResulte.books ? searchResulte.books.length > 0 ?
                            <>
                                <li className='list-group-item fw-500'>Books</li>
                                <ul>
                                    {
                                        searchResulte ?
                                            searchResulte.books.map((item, index) => {
                                                return <li key={index} className='fs-15 list-group-item py-1' onClick={()=>{setSearchResulte(null)}}>
                                                    <Link href={"/book/" + item._id}>{item.title} - <span style={{fontSize:'12px'}}>{item.subTitle}</span></Link>
                                                </li>
                                            }) : null
                                    }
                                </ul>
                            </> : null : null
                        }

                        {searchResulte.series ? searchResulte.series.length > 0 ?
                            <>
                                <li className='list-group-item fw-500'>Series</li>
                                <ul>
                                    {
                                        searchResulte.series.map((item, index) => {
                                            return <li key={index} className='fs-15 list-group-item py-1' onClick={()=>{setSearchResulte(null)}}>
                                                <Link href={"/series/" + item.series_slug+"-books-in-order"}>{item.series_name}</Link>
                                            </li>
                                        })
                                    }
                                </ul>
                            </> : null : null
                        }


                        {searchResulte.people ? searchResulte.people.length > 0 ?
                            <>
                                <li className='list-group-item fw-500'>People</li>
                                <ul>
                                    {
                                        searchResulte.people.map((item, index) => {
                                            return <li key={index} className='fs-15 list-group-item py-1' onClick={()=>{setSearchResulte(null)}}>
                                                <Link href={"/people/"+item.slug}>{item.name}</Link>
                                            </li>
                                        })
                                    }
                                </ul>
                            </> : null : null
                        }

                        {searchResulte.categories ? searchResulte.categories.length > 0 ?
                            <>
                                <li className='list-group-item fw-500'>Category</li>
                                <ul>
                                    {

                                        searchResulte.categories.map((item, index) => {
                                            return <li key={index} className='fs-15 list-group-item py-1' onClick={()=>{setSearchResulte(null)}}>
                                                <Link href={"/list/" + item.Best_Book_List.toLowerCase().replace(/ /g, "-")}>{item.Best_Book_List}</Link>
                                            </li>
                                        })
                                    }
                                </ul>
                            </> : null : null
                        }
                        {searchResulte.author ? searchResulte.author.length > 0 ?
                            <>
                                <li className='list-group-item fw-500'>Authors</li>
                                <ul>
                                    {

                                        searchResulte.author.map((item, index) => {
                                            return <li key={index} className='fs-15 list-group-item py-1' onClick={()=>{setSearchResulte(null)}}>
                                                <Link href={"/author/" + item.slug+"-books-in-order"}>{item.name}</Link>
                                            </li>
                                        })
                                    }
                                </ul>
                            </> : null : null
                        }

                    </ul>
                    {
                        searchResulte.massage?
                        <p className='text-center mb-0'>{searchResulte.massage}</p>
                        :null
                    }
                </div> : null
            }
        </div>
    )
}
