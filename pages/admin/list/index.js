import { useState } from "react"
import { ListName } from "../../../components/admin/list/ListName"
import Header1 from "../../../components/header/Header1"
import { Sublist } from "../../../components/admin/list/Sublist";
import { useRouter } from "next/router";
import { AddList } from "../../../components/admin/list/AddList";
import { AddSublist } from "../../../components/admin/list/AddSublist";
import Link from "next/link";

const index = ({ data }) => {
    const [changeList, setChangeList] = useState();
    const [sublistOf, setSublistOf] = useState()
    const router = useRouter()
    if (router.query.addlist === "true") {
        return <AddList />
    }
    if (router.query.addsublist === "true" && router.query.list) {
        return <AddSublist list={router.query.list} />
    }
    return (
        <>
            <Header1 />
            <div className="position-fixed popup-form-div top-0 start-0 w-100 h-100 justify-content-center align-items-center" style={{ display: changeList ? "flex" : "none" }}>
                <button className="btn position-absolute top-0 end-0 me-5 mt-5" onClick={() => { setChangeList(null) }}><i className="bi bi-x-lg"></i></button>
                <ListName listDetails={changeList} />
            </div>
            <div className="position-fixed popup-form-div top-0 start-0 w-100 h-100 justify-content-center align-items-center" style={{ display: sublistOf ? "flex" : "none" }}>
                <button className="btn position-absolute top-0 end-0 me-5 mt-5" onClick={()=>{setSublistOf(null)}}><i className="bi bi-x-lg"></i></button>
                <Sublist list={sublistOf}/>
            </div>
            <div className="container pt-120">
                <p className="fw-500">Welcome Back Admin</p>
                <h1 className="fs-1">Manage Web Content</h1>
                <div className="d-flex justify-content-end">
                    <Link href={"list?addlist=true"} className="btn addBtn">Add New List</Link>
                </div>
                <div className="adminlist mt-4">
                    {
                        data.map((item, index) => (
                            <div key={index} className="d-flex py-3 list-items justify-content-between">
                                <p className="fw-500 mb-0 ps-2">{item._id}
                                    <button className="btn fs-4 py-0" onClick={() => { setChangeList(item._id) }}>
                                        <i className="bi bi-pencil"></i>
                                        <span className="tooltips">Change list Name
                                            <i className="bi bi-caret-down-fill"></i>
                                        </span>
                                    </button>
                                </p>
                                <div className="d-flex align-items-center">
                                    <button className="btn py-0 fs-4" onClick={()=>{setSublistOf(item._id)}}>
                                        <i className="bi bi-pencil-square"></i>
                                        <span className="tooltips">
                                            Add/Remove Sublist
                                            <i className="bi bi-caret-down-fill"></i>
                                        </span>
                                    </button>
                                    {/* <button className="btn py-0 fs-4">
                                        <i className="bi bi-eye"></i>
                                        <span className="tooltips">
                                            View Sublist
                                            <i className="bi bi-caret-down-fill"></i>
                                        </span>
                                    </button> */}
                                    {/* <button className="btn py-0 fs-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" style={{ marginTop: "-15px" }} className="bi bi-trash3" viewBox="0 0 16 16">
                                            <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                                        </svg>
                                        <span className="tooltips">
                                            Remove list
                                            <i className="bi bi-caret-down-fill"></i>
                                        </span>
                                    </button> */}
                                </div>
                            </div>
                        ))
                    }
                    {/* <div className="d-flex py-3 list-items justify-content-between">
                        <p className="fw-500 mb-0 ps-2">Science and Nature
                            <button className="btn fs-4 py-0">
                                <i className="bi bi-pencil"></i>
                                <span className="tooltips">Change list Name
                                    <i className="bi bi-caret-down-fill"></i>
                                </span>
                            </button>
                        </p>
                        <div className="d-flex align-items-center">
                            <button className="btn py-0 fs-4">
                                <i className="bi bi-pencil-square"></i>
                                <span className="tooltips">
                                    Add/Remove Sublist
                                    <i className="bi bi-caret-down-fill"></i>
                                </span>
                            </button>
                            <button className="btn py-0 fs-4">
                                <i className="bi bi-eye"></i>
                                <span className="tooltips">
                                    View Sublist
                                    <i className="bi bi-caret-down-fill"></i>
                                </span>
                            </button>
                            <button className="btn py-0 fs-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" style={{ marginTop: "-15px" }} className="bi bi-trash3" viewBox="0 0 16 16">
                                    <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                                </svg>
                                <span className="tooltips">
                                    Remove list
                                    <i className="bi bi-caret-down-fill"></i>
                                </span>
                            </button>
                        </div>
                    </div> */}
                </div>
            </div>
        </>
    )
}
export async function getServerSideProps(context) {
    let token = context.req.cookies.art_ad;
    const res = await fetch(`${process.env.NEXT_API_URL}/api/admin/list/parent-list`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    })

    if (!res.ok) return {
        redirect: {
            destination: '/adminlogin',
            permanent: false,
        }
    }

    let data = await res.json()

    // Pass data to the page via props

    return { props: { data } }
}
export default index
