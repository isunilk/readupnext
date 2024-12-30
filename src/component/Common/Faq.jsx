"use client"
import { useState } from "react"
import style from "./common.module.css"


export const Faq = ({faq}) => {
    const [active, setActive] = useState(0)
    return (
        <>
        {
            Object.keys(faq).map((key, index) => (
            <div className={"p-3 position-relative mb-3 " + style.faq}>
                <h5 className="fs-6 fw-semibold">{faq[key][`q${index + 1}`]}</h5>
                {active === index ?
                    <button className="border-0 bg-transparent position-absolute" style={{ right: "10px", top: "10px" }} onClick={()=>setActive(null)}>
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.9264 20.1666C15.9681 20.1666 20.0931 16.0416 20.0931 10.9999C20.0931 5.95825 15.9681 1.83325 10.9264 1.83325C5.88477 1.83325 1.75977 5.95825 1.75977 10.9999C1.75977 16.0416 5.88477 20.1666 10.9264 20.1666Z" stroke="#292D32" stroke-width="2" stroke-linecap="round" strokeLinejoin="round" />
                            <path d="M7.25977 11H14.5931" stroke="#292D32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button> :
                    <button className="border-0 bg-transparent position-absolute" style={{ right: "10px", top: "50%", transform:"translateY(-50%)" }} onClick={()=>setActive(index)}>
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.0007 20.1666C16.0423 20.1666 20.1673 16.0416 20.1673 10.9999C20.1673 5.95825 16.0423 1.83325 11.0007 1.83325C5.95898 1.83325 1.83398 5.95825 1.83398 10.9999C1.83398 16.0416 5.95898 20.1666 11.0007 20.1666Z" stroke="#292D32" stroke-width="2" stroke-linecap="round" strokeLinejoin="round" />
                            <path d="M7.33398 11H14.6673" stroke="#292D32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M11 14.6666V7.33325" stroke="#292D32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                }
                <p className="mb-0" style={{ maxHeight: active === index ? "200px" : "0",overflow:"hidden"}}>{faq[key][`a${index + 1}`]}</p>
            </div>

            ))
        }
      
        </>
    )
}
