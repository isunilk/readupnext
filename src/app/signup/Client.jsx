"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

export const Client = () => {
    const [apires, setRes] = useState({});
    const router = useRouter()

    const handleSubmit = async(event)=>{
        event.preventDefault()
        const formData = new FormData(event.target)
        const user = {
            user: formData.get("user"),
            email: formData.get("email"),
            password: formData.get("password"),
            terms: formData.get("terms") ? true : false,
            update_mail: formData.get("send_mail") ? true : false,

        }
        try{
            let res = await fetch("/api/user/signup",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(user)
            })
            res = await res.json()
            setRes(res)
            if(res.success){
                setTimeout(()=>{
                    router.push("/login")
                },1000)
            }
        }catch(err){
            console.log(err)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <p className='text-center text-capitalize' style={{color:apires.success?"#2db32d":"red"}}>{apires.message}</p>
            <div className='mt-3'>
                <label htmlFor="user">User Name</label>
                <input type="text" name="user" placeholder='Enter user name' id="user" />
            </div>
            <div className='mt-3'>
                <label htmlFor="email">Email</label>
                <input type="email" placeholder='example@gmail.com' name="email" id="email" />
            </div>
            <div className='mt-3'>
                <label htmlFor="password">Password</label>
                <input type="password" placeholder='Enter password' name="password" id="password" />
            </div>
            <div className='mt-5 d-flex justify-content-center'>
                <button type='submit' className='yellow_button  border-0'>SingUp</button>
            </div>
        </form>
    )
}
