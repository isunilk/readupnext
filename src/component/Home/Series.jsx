import style from "@/app/page.module.css"
import Link from "next/link";


const coursesData = [
    {
        id: 1,
        link_slug: "/series/foundation",
        img1: "/books_images/Foundation.jpg",
        img2: "/books_images/Foundation and Empire.jpg",
        img3: "/books_images/Second Foundation.jpg",
        numBooks: 7,
        series_name: "Foundation",
    },
    {
        id: 2,
        link_slug: "/author/toni-morrison",
        img1: "/books_images/The Bluest Eye.jpg",
        img2: "/books_images/Sula.jpg",
        img3: "/books_images/Song of Solomon.jpg",
        numBooks: 30,
        series_name: "Toni Morrison",
    },
    {
        id: 3,
        link_slug: "/series/dune",
        img1: "/books_images/Dune.jpg",
        img2: "/books_images/Dune Messiah.jpg",
        img3: "/books_images/Children of Dune.jpg",
        numBooks: 30,
        series_name: "Dune",
    },
    {
        id: 4,
        link_slug: "/series/nikki-heat",
        img1: "/books_images/Heat Wave.jpg",
        img2: "/books_images/Naked Heat.jpg",
        img3: "/books_images/Heat Rises.jpg",
        numBooks: 10,
        series_name: "Nikki Heat",
    },
];
export const Series = () => {
    return (
        <div className={"position-relative pe-sm-5  col-md-6 col-sm-10 col-12 mt-5 mt-md-0 " + style.series}>
            <div className="p-3 gap-3 position-relative justify-content-between row m-0 w-100">
                {
                    coursesData.map((item, index) => (

                        <Link href={item.link_slug} className="position-relative d-flex justify-content-between align-items-start p-2" key={index}>
                            <img src={item.img1} alt="" />
                            <span className="bg-dark text-white px-2">Book {item.numBooks}</span>
                            <span className="text-uppercase position-absolute border text-dark border-dark px-2" style={{ left: "10px", bottom: '10px' }}>{item.series_name}</span>
                            <img src={item.img2} alt="" className="position-absolute top-50 start-50 translate-middle" />
                            <img src={item.img3} alt="" className="position-absolute" style={{ right: "10px", bottom: '10px' }} />
                        </Link>
                    ))
                }
                {/* <div className="position-relative d-flex justify-content-between align-items-start p-2">
                    <img src="/Home.jpg" alt="" />
                    <span className="bg-dark text-white px-2">Book 30+</span>
                    <span className="text-uppercase position-absolute border border-dark px-2" style={{ left: "10px", bottom: '10px' }}>Foundtion</span>
                    <img src="/Home.jpg" alt="" className="position-absolute top-50 start-50 translate-middle" />
                    <img src="/Home.jpg" alt="" className="position-absolute" style={{ right: "10px", bottom: '10px' }} />
                </div>
                <div className="position-relative d-flex justify-content-between align-items-start p-2">
                    <img src="/Home.jpg" alt="" />
                    <span className="bg-dark text-white px-2">Book 30+</span>
                    <span className="text-uppercase position-absolute border border-dark px-2" style={{ left: "10px", bottom: '10px' }}>Foundtion</span>
                    <img src="/Home.jpg" alt="" className="position-absolute top-50 start-50 translate-middle" />
                    <img src="/Home.jpg" alt="" className="position-absolute" style={{ right: "10px", bottom: '10px' }} />
                </div>
                <div className="position-relative d-flex justify-content-between align-items-start p-2">
                    <img src="/Home.jpg" alt="" />
                    <span className="bg-dark text-white px-2">Book 30+</span>
                    <span className="text-uppercase position-absolute border border-dark px-2" style={{ left: "10px", bottom: '10px' }}>Foundtion</span>
                    <img src="/Home.jpg" alt="" className="position-absolute top-50 start-50 translate-middle" />
                    <img src="/Home.jpg" alt="" className="position-absolute" style={{ right: "10px", bottom: '10px' }} />
                </div> */}
                <img
                    src="/assets/sape/shape_152.svg"
                    alt="shape"
                    className="position-absolute w-100 p-0"
                    style={{ top: "-10px", left: "0px" }}
                />
            </div>
            <img
                src="/assets/sape/shape_153.svg"
                alt="shape"
                className="position-absolute d-sm-block d-none p-0"
                style={{ left: "calc(100% - 3rem)", bottom: ".5rem" }}
            />
        </div>
    )
}
