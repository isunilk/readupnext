import Link from 'next/link'
import style from "@/app/list/list.module.css"

export const ListCard = ({list}) => {
    return (
        <div className={"p-2 rounded overflow-hidden " + style.listCard}>
        <div className="position-relative d-flex justify-content-between" style={{height:"200px"}}>
            {
                list.imgArr.map((link, index) => (
                    index !== 2 ? <img key={index} src={link} alt="" /> :
                        <img src={link||"/assets/nullBook.PNG"} key={index} className="position-absolute" style={{ top: "4%", left: "50%", transform: "translateX(-50%)" }} alt="" />
                ))
            }
        </div>
        <div className="position-relative">
            <h3 className="text-center mt-3">{list.series_name}</h3>
            <span className="text-center d-block">{list.count} Books</span>
            <div className={"d-flex position-absolute justify-content-center " + style.list_card_arrow}><i className="bi bi-arrow-right"></i></div>
        </div>
    </div>
    )
}
