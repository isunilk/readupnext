import Link from "next/link";
import Seo from "../components/common/Seo";
// import DefaulHeader from "../components/header/DefaulHeader";
import Header1 from "../components/header/Header1";

const Pricing = () => {
  return (
    <>
      <Seo pageTitle="404 || readupnext.com" />

      {/* <!-- 
      =============================================
      Theme Default Menu
      ============================================== 	
      --> */}
      <Header1 />

      {/* 
			=============================================
			Error Page
			============================================== 
			*/}
      <div className="error-page-content d-flex align-items-center justify-content-center">
        <div className="container">
          <div className="row">
            <div className="col-xxl-6 d-flex flex-column align-items-center justify-content-center col-lg-7 m-auto">
              <h1><span style={{color:"#c475e3"}}>4</span>0<span style={{color:"#c475e3"}}>4</span></h1>
              <h3 className="fs-6">It seems you've stumbled upon a chapter that doesn't exist.</h3>
              <p className="me-xxl-5 ms-xxl-5">
              Try searching for your desired book or author in the search bar. Or, return to <Link href="/" style={{ color: '#c475e3' }}>homepage</Link> to start a new reading journey.
              </p>
              <Link href="/" className="btn-twentyOne fw-500 tran3s">
                Back to home
              </Link>
              <img src="/images/icon/open-book.svg" width={400} alt="open-book" />
            </div>
          </div>
          <img src="/images/assets/ils_06.svg" alt="" className="m-auto" />
        </div>
        {/* End .container */}

        <img
          src="/images/shape/shape_178.svg"
          alt="shape"
          className="shapes shape-one w-100"
        />
      </div>
      {/* /.error-page-content */}
    </>
  );
};

export default Pricing;
