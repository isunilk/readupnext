import { Hero } from "@/component/Common/Hero"
import { Navbar } from "@/component/Navbar/Navbar"
// import style from "@/app/best-list/list.module.css"
import { Footer } from "@/component/Footer/Footer"
// import { Person } from "@/component/Common/Person"
import { ClientComp } from "./ClientComp"

const content = {
    heading: "Find Books Recommended by Influential People",
    para: "This is a collection of book recommendations by 700+ influential figures. Discover the books that inspire and shape some of the world's greatest minds, from entrepreneurs, and artists to scientists and leaders."
}


const page = () => { 
    return (
        <>
            <Navbar />
            <Hero heading={content.heading} para={content.para} />
            <ClientComp/>
            <Footer />
        </>
    )
}

export default page