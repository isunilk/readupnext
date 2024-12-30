import { BookDetail } from "@/component/Common/BookDetail"
// import { Navhome } from "@/component/Navbar/Navhome"
import style from "@/app/list/list.module.css"
import { Faq } from "@/component/Common/Faq"
import { Navbar } from "@/component/Navbar/Navbar"
import Link from "next/link"
import { Footer } from "@/component/Footer/Footer"
import dbConnect from "../../../../utils/connection"
import { listInternal } from "@/app/api/fetch-data/[action]/action"
import { Share } from "@/app/author/[name]/Share"

const page = async ({ params }) => {
    await dbConnect();
    let data = await listInternal(params.url)
    let list = data.similarCategories.searchCategory
    // console.log(data.getData[0])
    return (
        <>
            <Navbar />
            <section className="container my-5">
                <div className={"d-flex justify-content-center align-items-center positon-relative " + style.list_banner}>
                    {
                        list.imgArr.map((item, index) => (
                            index !== 1 ? <img src={item} alt="" /> :
                                <img src={item} alt="" className={style.main_img} />
                        ))
                    }
                    {/* <img src="/modalbook.png" alt="" /> */}
                </div>
                <div className={style.list_details}>
                    <h1 className="text-center">{list.count} {list.Best_Book_List} Of All Time (Updated 2023).</h1>
                    <p className="text-center">{list.metaDescription}</p>
                    <div className="d-flex justify-content-center gap-sm-5 gap-3">
                        {/* <button className="border-0 ">
                            <svg width="25" height="25" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.1888 18C11.7621 17.9998 11.3493 17.8469 11.0226 17.5683L7.00007 14.134L2.97724 17.5685C2.65066 17.847 2.23788 17.9997 1.81139 18C1.54532 18 1.28822 17.9422 1.04665 17.8282C0.734395 17.6797 0.47018 17.4441 0.284854 17.1489C0.0995269 16.8537 0.00073485 16.511 1.09426e-05 16.161V3.23945C-0.00109023 2.81389 0.0809288 2.39234 0.241324 1.99917C0.401719 1.606 0.637306 1.24902 0.934458 0.94888C1.23002 0.647134 1.58159 0.4079 1.96883 0.245027C2.35607 0.0821536 2.77128 -0.00112488 3.19043 1.17827e-05H10.8094C11.2286 -0.00113969 11.6438 0.0821165 12.0311 0.244963C12.4183 0.407809 12.7699 0.647012 13.0655 0.948729C13.3627 1.24883 13.5984 1.60581 13.7588 1.99898C13.9192 2.39216 14.0011 2.81373 14 3.2393V16.1608C14 16.8731 13.5892 17.5275 12.9532 17.828C12.714 17.9417 12.4529 18.0005 12.1888 18ZM7.00007 12.7345C7.13677 12.7345 7.27361 12.782 7.38476 12.8768L11.792 16.6396C11.8823 16.7153 11.9918 16.7637 12.1079 16.7794C12.2241 16.795 12.3422 16.7772 12.4488 16.7281C12.5551 16.6776 12.645 16.5974 12.7081 16.497C12.7712 16.3965 12.8048 16.2799 12.805 16.1608V3.23945C12.805 2.69828 12.5975 2.18957 12.2206 1.8069C11.8437 1.42422 11.3426 1.2134 10.8096 1.2134H3.19058C2.6577 1.2134 2.15663 1.42422 1.77972 1.8069C1.4028 2.18957 1.19515 2.69828 1.19515 3.23945V16.161C1.19515 16.4033 1.33483 16.6258 1.55115 16.7281C1.65777 16.7773 1.77586 16.7951 1.89198 16.7795C2.00809 16.7639 2.11755 16.7155 2.20788 16.6398L6.61524 12.8768C6.72302 12.7848 6.8593 12.7345 7.00007 12.7345Z" fill="black" />
                            </svg>
                        </button>
                        <button className="border-0">
                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.6672 16.8161C16.4694 16.8161 15.3902 17.3334 14.6412 18.1562L7.90423 13.9837C8.08919 13.5109 8.18402 13.0077 8.18382 12.5C8.18405 11.9923 8.08922 11.489 7.90423 11.0162L14.6412 6.84354C15.3902 7.66639 16.4694 8.18387 17.6672 8.18387C19.9235 8.18387 21.7592 6.34823 21.7592 4.09184C21.7592 1.83545 19.9235 0 17.6672 0C15.4108 0 13.5752 1.83564 13.5752 4.09203C13.5751 4.5997 13.6699 5.10291 13.8548 5.57572L7.118 9.74827C6.36898 8.92542 5.28983 8.40794 4.09203 8.40794C1.83564 8.40794 0 10.2438 0 12.5C0 14.7563 1.83564 16.592 4.09203 16.592C5.28978 16.592 6.36903 16.0747 7.118 15.2517L13.8548 19.4242C13.6699 19.8971 13.5751 20.4004 13.5752 20.9081C13.5752 23.1643 15.4108 25 17.6672 25C19.9235 25 21.7592 23.1643 21.7592 20.9082C21.7592 18.6517 19.9235 16.8161 17.6672 16.8161ZM15.0673 4.09203C15.0673 2.65844 16.2336 1.49214 17.6672 1.49214C19.1007 1.49214 20.267 2.65844 20.267 4.09203C20.267 5.52562 19.1007 6.69193 17.6672 6.69193C16.2336 6.69193 15.0673 5.52558 15.0673 4.09203ZM4.09203 15.0999C2.65825 15.0999 1.49194 13.9335 1.49194 12.5C1.49194 11.0664 2.65825 9.90008 4.09203 9.90008C5.52562 9.90008 6.69173 11.0664 6.69173 12.5C6.69173 13.9335 5.52557 15.0999 4.09203 15.0999ZM15.0673 20.908C15.0673 19.4744 16.2336 18.308 17.6672 18.308C19.1007 18.308 20.267 19.4744 20.267 20.9079C20.267 22.3415 19.1007 23.5078 17.6672 23.5078C16.2336 23.5078 15.0673 22.3415 15.0673 20.9079V20.908Z" fill="black" />
                            </svg>
                        </button> */}
                        <Share/>
                        <span></span>
                    </div>
                </div>
            </section>
            <section className="container my-5">
                <h2 className={"text-center fw-semibold " + style.subtitle} >{list.count} {list.Best_Book_List}</h2>
                <div className="d-flex justify-content-center gap-2 mb-5 mt-3">
                    <button className="border-1 border-dark rounded-pill px-3 bg-white">Featured</button>
                    <button className="border-1 opacity-50 border-dark rounded-pill px-3 bg-white">Ending</button>
                    <button className="border-1 opacity-50 border-dark rounded-pill px-3 bg-white">Recent</button>
                    <button className="border-1 opacity-50 border-dark rounded-pill px-3 bg-white">Popular</button>
                </div>
                {
                    data.getData.map((item, index)=>(
                        <BookDetail book={item} key={index}/>
                    ))
                }
                {/* <BookDetail />
                <BookDetail />
                <BookDetail /> */}
            </section>
            <section className="container my-5">
                <h2 className={"text-center fw-semibold " + style.subtitle} >FAQs</h2>
                <Faq faq={list.questions_answers} />
            </section>
            <section className="container my-5">
                <h2 className={"text-center fw-semibold " + style.subtitle} >Similar Lists</h2>
                <div className="row">
                    {
                        data.similarCategories.similarCategory.map((item, index) => (
                            <Link href={"/list/" + (item.Best_Book_List).toLowerCase().replace(/ /g, "-")} key={index} className="text-decoration-none text-dark col-4 py-3">
                                <div className={"p-2 rounded overflow-hidden " + style.listCard}>
                                    <div className="position-relative d-flex justify-content-between" style={{ height: "180px" }}>
                                        {
                                            item.imgArr.map((link, index) => (
                                                index !== 2 ? <img key={index} src={link} alt="" /> :
                                                    <img src={link} key={index} className="position-absolute" style={{ top: "4%", left: "50%", transform: "translateX(-50%)" }} alt="" />
                                            ))
                                        }
                                    </div>
                                    <div className="position-relative">
                                        <h3 className="text-center mt-3 fs-4 fw-semibold">{item.Best_Book_List}</h3>
                                        <span className="text-center d-block">{item.count} Books</span>
                                        <div className={"d-flex position-absolute justify-content-center " + style.list_card_arrow}><i class="bi bi-arrow-right"></i></div>
                                    </div>
                                </div>
                            </Link>
                        ))
                    }

                </div>
            </section>
            <Footer />
        </>
    )
}

export default page