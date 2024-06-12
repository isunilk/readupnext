"use client"
import Link from "next/link"
import style from "./common.module.css"
import { useState } from "react"

export const RightTab = ({ list, recom, openDefault }) => {
    const [show, setShow] = useState(openDefault)
    // console.log(list)
    return (
        <div className={style.recom_tab}>
            <div className="p-2 d-flex justify-content-lg-between justify-content-around border-bottom border-dark">
                <button className="bg-transparent px-xl-3 px-lg-2 px-sm-3 px-2 py-2" style={{ border:!show?"1px solid rgba(0, 0, 0, 0.2)":"none" }} onClick={()=>setShow(false)}>Recommended By</button>
                <button className="bg-transparent px-xl-3 px-lg-2 px-sm-3 px-2 py-2"style={{ border:show?"1px solid rgba(0, 0, 0, 0.2)":"none" }} onClick={()=>setShow(true)}>Featured in Articles</button>
            </div>
            <div className="p-3" style={{display:show?"none":"block"}}>
                {/* <div className="d-flex"> */}
                <img src="/modalbook.png" alt="" />
                <img src="/modalbook.png" alt="" />
                <img src="/modalbook.png" alt="" />
                <span>54+</span>&nbsp;&nbsp;
                Recommended by {recom.map((item, index) => (
                    index === recom.length - 1 ? item.name + " " : item.name + ", "
                ))}
            </div>
            <div style={{display:show?"block":"none"}}>
                <ul className="list-unstyled ms-3">
                    {list.map((item, index) => (
                        <li key={index}>
                            <Link className="text-dark" href={item.link}>{item.title}</Link>
                        </li>

                    ))}
                </ul>
            </div>
        </div>

    )
}
