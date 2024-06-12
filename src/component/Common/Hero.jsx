import style from "./common.module.css"

export const Hero = ({ heading, para }) => {
    return (
        <section className={'py-5 position-relative ' + style.common_hero}>
            <div className="container">
                <h1 className='text-center fw-semibold'>{heading}</h1>
                <p className='text-center'>{para}</p>
            </div>
            <img src="/assets/sape/shape_175.svg" alt="shape" className="position-absolute " style={{ left: "5%", bottom: "0" }} />
            <img src="/assets/sape/shape_172.svg" alt="shape" className="position-absolute " style={{ right: "0%", bottom: "0" }} />
        </section>
    )
}
