"use client"
import Link from 'next/link';
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

export const Client = () => {
    const [apires, setRes] = useState({});
    const router = useRouter()

    const handleSubmit = async(event)=>{
        event.preventDefault()
        const formData = new FormData(event.target)
        const user = {
            email: formData.get("email"),
            password: formData.get("password"),
            remember: formData.get("remember")
        }
        try{
            let res = await fetch("/api/user/login",{
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
                    router.push("/")
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
                <label htmlFor="email">Email</label>
                <input type="email" placeholder='example@gmail.com' name="email" id="email" />
            </div>
            <div className='mt-3'>
                <label htmlFor="password">Password</label>
                <input type="password" placeholder='Enter password' name="password" id="password" />
            </div>
            <div className="mt-3 d-flex justify-content-between">
                <div>
                    <input type="checkbox" style={{ width: "fit-content" }} name="remember" id="remember" />
                    <label htmlFor="" className="ms-2">Remember me</label>
                </div>
                <Link href="" className="text-dark text-decoration-none border-0 bg-transparent fw-">Forgot Password</Link>
            </div>
            <div className='mt-5 d-flex justify-content-center'>
                <button type='submit' className='yellow_button  border-0'>Login</button>
            </div>
        </form>
    )
}
