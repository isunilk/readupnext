import style from "@/app/signup/signup.module.css"
import Link from "next/link"
import { Client } from "./Client"

const page = () => {
    return (
        <div className={"pt-3 " + style.sign_cont}>
            <Link href="/" className='p-3 '>Go to home</Link>
            <div className={'position-absolute top-50 start-50 translate-middle px-sm-5 px-3 py-4 ' + style.center_div}>
                <h1 className='text-center fw-semibold'>LogIn</h1>
                <Client/>
                <p className='text-center mt-2'>If you have alredy account please- <Link href="/signup" >Sign Up</Link></p>
            </div>
            <img src="/assets/bg/ils_11.png" className='position-absolute end-0 bottom-0' style={{ zIndex: "-1" }} alt="" />
            <img src="/assets/bg/ils_12.png" className='position-absolute d-none d-md-block start-0 bottom-0' style={{ zIndex: "-1" }} alt="" />
        </div>
    )
}

export default page