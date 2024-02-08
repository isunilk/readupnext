"use client"
import { useEffect, useState } from "react"


const Books_category = ({ data }) => {
    const [booksCategory, setCategory] = useState([]);

    const lidetactor = (index, category) => {
        let liList = document.querySelectorAll('.books-category-li')
        let firstSibling = document.getElementsByClassName("active-category-sibling1")[0];
        firstSibling ? firstSibling.classList.remove("active-category-sibling1") : null;

        let secondSibling = document.getElementsByClassName("active-category-sibling2")[0];
        secondSibling ? secondSibling.classList.remove("active-category-sibling2") : null

        document.getElementsByClassName("active-category")[0].classList.remove("active-category")

        liList[index].classList.add("active-category")

        liList[index - 1] ?
            liList[index - 1].classList.add("active-category-sibling1")
            : null;

        liList[index + 1] ?
            liList[index + 1].classList.add("active-category-sibling2")
            : null;
    }

    useEffect(()=>{
        setCategory(data)
    },[data])

    return (
        <>
            <ul className="px-0">
                <li className="books-category-li list-group-item pt-1 active-category-sibling1"></li>
                <li onClick={() => { lidetactor(1) }} className="active-category books-category-li list-group-item d-flex justify-content-sm-between py-2 px-3">
                    <span>All</span>
                </li>
                {
                    booksCategory.map((item, index) => {
                        return (
                            <li onClick={() => { lidetactor(index + 2), item}} className={index == 0 ? "books-category-li list-group-item d-flex justify-content-sm-between py-2 px-3 active-category-sibling2" : "books-category-li list-group-item d-flex justify-content-sm-between py-2 px-3"} key={index}>
                                <span>{item}</span>
                                {/* <span>{item.count}</span> */}
                            </li>
                        )
                    })
                }
                <li className="books-category-li list-group-item pt-1"></li>
            </ul>
        </>
    )
}
export default Books_category;


