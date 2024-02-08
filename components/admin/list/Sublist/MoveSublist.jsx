import { useEffect, useState } from "react"

export const MoveSublist = ({listDetails}) => {
    const[listname, setListname] = useState();
    const saveName = () => {
        window.confirm("You want to change name")
    }
    const getList = async()=>{
        try{
            let res = await fetch("/api/list-name")
            res = await res.json()
            setListname(res)
        }catch(err){
            console.log(err)
        }
    }

    const saveMove = async(id, data)=>{
        try{
            let res = await fetch("/api/admin/list/sublist",{
                method:"PUT",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    id, data, opration:"move"
                })
            })
            res = await res.json();
            alert(res.message)
            location.reload();
        }catch(err){
            console.log(err)
            alert(err.message)
        }
    }

    const moveSublist = (e)=>{
        e.preventDefault();
        let value = document.querySelector("#selected-list").value
        if(!value || listDetails.category === value) return alert("New List requird")

        let conf = confirm(`${listDetails.Best_Book_List} move "${listDetails.category}" to "${value}"`)

        if(conf){
            saveMove(listDetails._id, {category:value})
        }
    }
    useEffect(()=>{
        getList();
    },[])
    return (

        <form action={saveName} className="border col-lg-5 rounded p-3 bg-white">
            <h3 className="text-center">Change Name</h3>
            <label htmlFor="">Current <strong>{listDetails?listDetails.Best_Book_List:null}</strong> is blong to <strong>{listDetails?listDetails.category:null}</strong>, Move new:</label>
            <input type="text" list="list" id="selected-list" className="d-block w-100 mt-3 px-3 py-1 text-secondary" />
            <datalist id="list">
                {
                    listname?
                    listname.map((item, index)=>(
                        <option key={index} value={item._id}/>
                    )):null
                }
            </datalist>
            <button type="submit" className="btn mt-3 submit-btn" onClick={moveSublist}>Move</button>
        </form>
    )
}
