import Link from "next/link"
import NewsLetter from "./NeswLetter"
import style from "./footer.module.css"

export const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className="d-flex flex-sm-row flex-column flex-wrap  justify-content-center pb-3 pt-5 gap-sm-3 gap-4 justify-content-sm-between px-md-5 px-3 px-lg-2 container">
                <div className="col-lg-3 col-sm-5 col-12">
                    <Link href="/">
                        <img src="/assets/icon/logo.svg" alt="" width="80%" />
                    </Link>
                    <p className="mb-0">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore placeat id nulla aperiam, aliquid totam molestiae ipsam </p>
                </div>
                <div className="col-lg-2">
                    <h4>Quick Links</h4>
                    <ul className="list-unstyled mb-0">
                        <li><Link href="/about">About Us</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                        <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                        <li><Link href="/affiliate-disclosure">Affiliate Disclosure</Link></li>
                        <li><Link href="https://bookshop.org/shop/readupnext">Visit Bookshop</Link></li>
                    </ul>
                </div>
                <div className="col-lg-2">
                    <h4>Categories</h4>
                    <ul className="list-unstyled mb-0">
                        <li><Link href="/people">People</Link></li>
                        <li><Link href="/author">Author</Link></li>
                        <li><Link href="/list">Best List</Link></li>
                        <li><Link href="/series">Series</Link></li>
                        <li><Link href="/quotes">Quotes</Link></li>
                        <li><Link href="/blog">Blog</Link></li>
                    </ul>
                </div>
                <div className={"col-lg-4 col-md-10 col-12 " + style.newsletter} >
                    <h4 className="mb-sm-4 mb-2">Newsletter</h4>
                    <span className="py-2">Join our newsletter</span>
                    <NewsLetter />
                    <p>We only send interesting and relevant emails.</p>
                </div>
            </div>
            <div style={{borderTop:"1px solid #d3d3d3"}}>
                <div className="d-flex flex-sm-row flex-column container justify-content-sm-between py-2 align-items-center">
                    <p className="mb-0">Copyright © 2024 Readupnext.com</p>
                    <ul className="list-unstyled mb-0 d-flex gap-3">
                        <li><Link href="https://www.facebook.com/readupnext" target="_blank" rel="noopener noreferrer"><i className="bi bi-facebook"></i></Link></li>
                        <li><Link href="https://www.instagram.com/readupnext/" target="_blank" rel="noopener noreferrer"><i className="bi bi-instagram"></i></Link></li>
                        <li><Link href="http://www.pinterest.com/readupnext" target="_blank" rel="noopener noreferrer"><i className="bi bi-pinterest"></i></Link></li>
                        <li><Link href="https://twitter.com/readupnext" target="_blank" rel="noopener noreferrer"><i className="bi bi-twitter-x"></i></Link></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}
