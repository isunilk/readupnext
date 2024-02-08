import Link from "next/link";
import Footer2 from "./Footer2";
import NewsLetter from "./NewsLetter";
import CopyrightFooter2 from "./CopyrightFooter2";

const DefaultFooter = () => {
  return (
    <div className="footer-style-eleven overflow-hidden theme-basic-footer position-relative" style={{borderTop:"1px solid lightgray"}}>
      <div className="bg-wrapper position-relative">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-3 footer-intro mb-40">
              <div className="logo">
                <Link href="/" className="text-dark fs-3 fw-bold">
                  <img src="/images/assets/logo-4.webp" alt="" width={250} />
                </Link>
                <p style={{color:"gray"}}>Discover Your Next Recommended Book</p>
              </div>
            </div>
            {/* End .col */}

            <Footer2 />

            <div className="col-xl-4 col-lg-5 mb-30 form-widget">
              <h5 className="fs-6 text-uppercase mb-20 fw-bold">Newsletter</h5>
              <h6 className="footer-title tx-dark fw-normal pt-15 pb-20 mb-0 md-pt-10">Join our newsletter</h6>
              <NewsLetter />
              <div className="fs-14 mt-10">
                We only send interesting and relevant emails.
              </div>
            </div>
            {/* End .col-xl-4 */}
          </div>
          {/* End .row */}
        </div>
        {/* /.container */}
      </div>
      {/* /.bg-wrapper */}
      <CopyrightFooter2 />
      {/* /.bottom-footer */}
      <img
        src="/images/shape/shape_158.svg"
        alt="shape"
        className="lazy-img shapes shape-one"
      />
    </div>
  );
};

export default DefaultFooter;
