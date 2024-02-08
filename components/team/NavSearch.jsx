import Link from 'next/link';
import React, { useEffect, useState } from 'react'


export const NavSearch = ({ searchField }) => {

    const [navSearchResulte, setNavSearchResulte] = useState();
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
            let searchValue = document.getElementById('navSearchInputValue').value;
            if ((res.categories.length > 0 || res.series.length > 0 || res.books.length > 0 || res.people.length > 0 || res.author.length > 0) && searchValue) {
                setNavSearchResulte(res)
            } else {
                setNavSearchResulte({ massage: "Not Found" })
            }
            x = true;
        } catch (err) {
            console.log(err)
        }
    }

    let y = true
    let z = 0

    const callApi = (e) => {
        setTimeout(() => {
            y = false;
        }, [1000]);
        setTimeout(() => {
            let searchValue = e ? e.value : null;
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
                setNavSearchResulte(null)
            }
        }, [1200])
    }
    const handleSearch = (e) => {
        y = true
        if (z === 0) {
            callApi(e.target)
            z++
        }
        // if (e.key === "Enter") {
        //     callApi(e.target)
        // }
    }
    useEffect(() => {
        window.addEventListener("click", () => {
            let data = document.querySelector(".search-section:hover");
            if (!data) {
                setNavSearchResulte(null);
            }
        })
    }, [])



    return (

        <div className="right-widget position-relative search-section order-lg-2 w-100">
            <form
                className="header-search-two position-relative d-xl-block"
                onSubmit={(e) => { e.preventDefault() }}
                style={{ width: "30vw", maxWidth:"400px"}}
            >
                <input className='col-12 w-100' type="text" placeholder="Search any book, person or series..." id='navSearchInputValue' onKeyUp={handleSearch} />
                <img
                    src="/images/icon/icon_122.svg"
                    alt="icon"
                    className="icon searchIcon-design position-absolute"
                    // onClick={callApi}
                />

            </form>
            {navSearchResulte ?
                <div className='searchReasult-div position-absolute w-100'
                    style={{
                        // display: navSearchResulte ? "block" : "none",
                        zIndex: -2
                    }}>
                    <ul className='ps-0' style={{ maxHeight: "230px", overflowY: "auto" }}>
                        {navSearchResulte.books ? navSearchResulte.books.length > 0 ?
                            <>
                                <li className='list-group-item fw-500'>Books</li>
                                <ul>
                                    {
                                        navSearchResulte ?
                                            navSearchResulte.books.map((item, index) => {
                                                return <li key={index} className='fs-15 list-group-item py-1'>
                                                    <Link href={"/book/" + item._id} onClick={() => setNavSearchResulte(null)}>{item.title} - <span style={{ fontSize: '12px' }}>{item.subTitle}</span></Link>
                                                </li>
                                            }) : null
                                    }
                                </ul>
                            </> : null : null
                        }

                        {navSearchResulte.series ? navSearchResulte.series.length > 0 ?
                            <>
                                <li className='list-group-item fw-500'>Series</li>
                                <ul>
                                    {
                                        navSearchResulte.series.map((item, index) => {
                                            return <li key={index} className='fs-15 list-group-item py-1'>
                                                <Link href={"/series/" + item.series_slug + "-books-in-order"} onClick={() => setNavSearchResulte(null)}>{item.series_name}</Link>
                                            </li>
                                        })
                                    }
                                </ul>
                            </> : null : null
                        }


                        {navSearchResulte.people ? navSearchResulte.people.length > 0 ?
                            <>
                                <li className='list-group-item fw-500'>People</li>
                                <ul>
                                    {
                                        navSearchResulte.people.map((item, index) => {
                                            return <li key={index} className='fs-15 list-group-item py-1'>
                                                <Link href={"/people/" + item.slug} onClick={() => setNavSearchResulte(null)}>{item.name}</Link>
                                            </li>
                                        })
                                    }
                                </ul>
                            </> : null : null
                        }

                        {navSearchResulte.categories ? navSearchResulte.categories.length > 0 ?
                            <>
                                <li className='list-group-item fw-500'>Category</li>
                                <ul>
                                    {

                                        navSearchResulte.categories.map((item, index) => {
                                            return <li key={index} className='fs-15 list-group-item py-1'>
                                                <Link href={"/list/" + item.Best_Book_List.toLowerCase().replace(/ /g, "-")} onClick={() => setNavSearchResulte(null)}>{item.Best_Book_List}</Link>
                                            </li>
                                        })
                                    }
                                </ul>
                            </> : null : null
                        }

                        {navSearchResulte.author ? navSearchResulte.author.length > 0 ?
                            <>
                                <li className='list-group-item fw-500'>Authors</li>
                                <ul>
                                    {

                                        navSearchResulte.author.map((item, index) => {
                                            return <li key={index} className='fs-15 list-group-item py-1' onClick={() => { setSearchResulte(null) }}>
                                                <Link href={"/author/" + item.slug + "-books-in-order"}>{item.name}</Link>
                                            </li>
                                        })
                                    }
                                </ul>
                            </> : null : null
                        }

                    </ul>
                    {
                        navSearchResulte.massage ?
                            <p className='text-center mb-0'>{navSearchResulte.massage}</p>
                            : null
                    }
                </div> : null
            }
        </div>

    )
}
