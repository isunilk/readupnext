import Link from 'next/link';
import React, { useEffect, useState } from 'react'

export const Search = ({ searchField, placehold, call }) => {

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
            let searchValue = document.getElementById('searchInputValue').value;
            if ((res.categories.length > 0 || res.series.length > 0 || res.books.length > 0 || res.people.length > 0 || res.author.length > 0)) {
                setSearchResulte(res)
            } else {
                setSearchResulte({massage:"Not Found"})
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
            let searchValue = e?e.value:null;
            if (y === false && searchValue) {
                z = 0;
                switch (searchField) {
                    case "list": {
                        search(searchValue, "listSearch");
                        break;
                    }
                    case "series": {
                        search(searchValue, "seriesSearch");
                        break;
                    }
                    case "people": {
                        search(searchValue, "peopleSearch");
                        break;
                    }
                    default: {
                        search(searchValue, "search");
                    }
                }
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
    useEffect(()=>{
        window.addEventListener("click",()=>{
            let data = document.querySelector(".search-section:hover");
            if(!data){
                setSearchResulte(null);
            }
        })
    },[])



    return (

        <div className="right-widget search-section order-lg-2 w-100">
            <form
                className="header-search-two position-relative d-xl-block"
                onSubmit={(e) => { e.preventDefault() }}
            >
                <input className='col-12 w-100' type="text" placeholder={placehold? placehold:"Search any book, person or series..."} id='searchInputValue' style={{padding:"7px 12px"}} onKeyUp={handleSearch}/>
                <img
                    src="/images/icon/icon_122.svg"
                    alt="icon"
                    className="icon searchIcon-design position-absolute"
                    // onClick={callApi}
                    style={{padding:"7px 10px"}}
                />

            </form>
            {searchResulte ?
                <div className='searchReasult-div'
                    // style={{
                    //     display: searchResulte ? "block" : "none"
                    // }}
                    >
                    <ul className='ps-0' style={{ maxHeight: "230px", overflowY: "auto" }}>
                        {searchResulte.books ? searchResulte.books.length > 0 ?
                            <>
                                <li className='list-group-item fw-500'>Books</li>
                                <ul>
                                    {
                                        searchResulte ?
                                            searchResulte.books.map((item, index) => {
                                                return <li key={index} className='fs-15 list-group-item py-1' onClick={()=>{setSearchResulte(null), call? call():null}}>
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
                                            return <li key={index} className='fs-15 list-group-item py-1' onClick={()=>{setSearchResulte(null), call? call():null}}>
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
                                            return <li key={index} className='fs-15 list-group-item py-1' onClick={()=>{setSearchResulte(null), call? call():null}}>
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
                                            return <li key={index} className='fs-15 list-group-item py-1' onClick={()=>{setSearchResulte(null), call? call():null}}>
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
                                            return <li key={index} className='fs-15 list-group-item py-1' onClick={()=>{setSearchResulte(null), call? call():null}}>
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
