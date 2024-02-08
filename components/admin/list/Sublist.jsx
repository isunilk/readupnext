import Link from "next/link"
import { useEffect, useState } from "react"

export const Sublist = ({ list }) => {
    const [sublist, setSublist] = useState();

    const getSublist = async()=>{
        try{
            let res = await fetch(`/api/admin/list/edit-list?list=${list}`, {
                method:"GET",
                headers:{
                    "Content-type":"application/json"
                }
            })
            res = await res.json();
            if(res){
                setSublist(res.sublistArr)
            }
        }catch(err){
            console.log(err)
        }
    }


    // let deleteReq = async(id,listName)=>{
    //     try{
    //         let res = await fetch("/api/admin/list/edit-list",{
    //             method:"DELETE",
    //             headers:{
    //                 "Content-Type":"application/json"
    //             },
    //             body:JSON.stringify({
    //                 id, listName
    //             })
    //         })
    //         res = await res.json();
    //         alert(res.message)
    //     }catch(err){
    //         console.log(err)
    //     }
    // }

    // const deleteSublist = (id, list)=>{
    //     let conf = confirm(`You want to permanently delete the "${list}" and the books in it will also be deleted`)
    //     console.log(id, conf)
    //     if(conf){
    //         deleteReq(id,list)
    //     }
    // }

    useEffect(()=>{
        if(list){
            getSublist();
        }
    },[list])

    return (
        <div className="container show-sublist">
            <ul className=" p-3 rounded border overflow-auto">
                <h3 className="text-center">Sublist of {list}</h3>
                <Link href={`list?addsublist=true&list=${list}`} className="btn addBtn" style={{ float: "right" }}>Add Sub-List</Link>

                {
                    sublist ?
                        sublist.map((item, index) => (
                            <li className="d-flex w-100 gap-5 justify-content-between align-items-center px-3 py-2 border-bottom boder-secondary">
                                <span className="fw-500">{item.Best_Book_List}</span>
                                <div className="d-flex align-items-center">
                                    <Link href={`list/${item.Best_Book_List}`}><i class="bi bi-box-arrow-up-right"></i></Link>
                                    {/* <button className="btn py-0 fs-4" onClick={()=>{deleteSublist(item._id, item.Best_Book_List)}}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" style={{ marginTop: "-15px" }} className="bi bi-trash3" viewBox="0 0 16 16">
                                            <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                                        </svg>
                                    </button> */}
                                </div>
                            </li>
                        )):
                        <h5 className="fs-5 text-center text-warning">Prossecing...</h5>
                }


            </ul>
        </div>
    )
}
