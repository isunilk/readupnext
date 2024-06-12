import { Hero } from "@/component/Common/Hero"
import { Person } from "@/component/Common/Person"
import { Footer } from "@/component/Footer/Footer"
import { Navbar } from "@/component/Navbar/Navbar"
import { Client } from "./Client"

const content = {
    heading: "Find books written by your favorite Authors, all in order.",
    para: "Explore our 'Best Books List', curated by scanning the web and sourcing expert recommendations. With 1300+ categories, find top picks from music to engineering and more. Your next great read awaits."
}
const page = () => {
    return (
        <>
            <Navbar />
            <Hero heading={content.heading} para={content.para} />
            <section className="container">
                <Client/>
            </section>
            <Footer/>
        </>
    )
}

export default page