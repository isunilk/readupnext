import Link from "next/link";
import Seo from "../components/common/Seo";
import BlockContact from "../components/contact/BlockContact";
import ContactForm from "../components/contact/ContactForm";
import Map from "../components/contact/Map";
import DefaultFooter from "../components/footer/DefaultFooter";
// import DefaulHeader from "../components/header/DefaulHeader";
import Header1 from "../components/header/Header1";

const contact = () => {
  return (
    <>
      <Seo pageTitle="Contact" />
      {/* <!-- 
      =============================================
      Theme Default Menu
      ============================================== 	
      --> */}
      <Header1 />

      {/* 
        =============================================
        Feature Section Fifty One
        ============================================== 
        */}
      <div className="fancy-feature-fiftyOne position-relative mt-120 lg-mt-150">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 text-center m-auto wow fadeInUp">
              <div className="title-style-five mb-65 lg-mb-40">
                <div className="sc-title-two fst-italic position-relative d-inline-block">
                  Contact Us
                </div>
                <p>Welcome to the ReadUpNext.com contact page. We genuinely value the thoughts, suggestions, and queries of our readers. Whether you have a recommendation, a question, or just want to share your reading experience, we're here to listen.</p>
                <h2 className="main-title fw-500 tx-new mt-50">Get in Touch.</h2>
              </div>
            </div>
          </div>
        </div>
        {/* /.container */}
        <img
          src="/images/shape/shape_172.svg"
          alt="shape"
          className="lazy-img shapes shape-two"
        />
      </div>
      <div className="container">
        <h3 className="fs-20 mb-0">For General Inquiries:</h3>
        <p className="mb-20">Feel free to drop us a message regarding any general questions or feedback you might have about ReadUpNext.com.</p>
        <h3 className="fs-20 mb-0">For Book Recommendations:</h3>
        <p className="mb-20 ">Have a book or a series you'd love to see featured on our site? Let us know, and we'll consider adding it to our ever-growing collection.</p>
        <h3 className="fs-20 mb-0">For Partnerships or Affiliation:</h3>
        <p className="mb-20">Interested in collaborating with us? We're always open to exploring new partnerships and opportunities.</p>
      </div>

      {/* 
        =============================================
        Contact Section One
        ============================================== 
        */}
      <div className="contact-section-one mt-60 lg-mt-30">
        {/* <div className="container">
          <div className="row">
            <BlockContact />
          </div>
        </div> */}
        {/* End .container */}

        <div className="container mb-120">
          <div className="row">
            <div className="col-lg-8 col-md-9 m-auto">
              <h2 className="tx-new d-none d-md-block text-center mt-100 mb-80 lg-mt-40 lg-mb-40 wow fadeInUp">
                Any question? Send us message.
              </h2>
            </div>

            <div className="col-xl-6 col-lg-5 col-md-5 mt-20">
              <div>
                <h3>Contact Details:</h3>
                <p><span className="fw-bold">Email : </span>contact@readupnext.com</p>
              </div>
              <div className='pb-50'>
                <h2 className='fs-3'>Social Media</h2>
                <p>Stay updated with our latest posts, book reviews, and recommendations by following us on our social media platforms:</p>
                <ul className='list-unstyled'>
                  <li><Link className="socialMediaLink" href="https://www.instagram.com/readupnext/" target='_blank'><i className="bi bi-instagram"></i><span className='ms-2'>Instagram</span></Link></li>
                  <li><Link className="socialMediaLink" href="http://www.pinterest.com/readupnext" target='_blank'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pinterest" viewBox="0 0 16 16">
                    <path d="M8 0a8 8 0 0 0-2.915 15.452c-.07-.633-.134-1.606.027-2.297.146-.625.938-3.977.938-3.977s-.239-.479-.239-1.187c0-1.113.645-1.943 1.448-1.943.682 0 1.012.512 1.012 1.127 0 .686-.437 1.712-.663 2.663-.188.796.4 1.446 1.185 1.446 1.422 0 2.515-1.5 2.515-3.664 0-1.915-1.377-3.254-3.342-3.254-2.276 0-3.612 1.707-3.612 3.471 0 .688.265 1.425.595 1.826a.24.24 0 0 1 .056.23c-.061.252-.196.796-.222.907-.035.146-.116.177-.268.107-1-.465-1.624-1.926-1.624-3.1 0-2.523 1.834-4.84 5.286-4.84 2.775 0 4.932 1.977 4.932 4.62 0 2.757-1.739 4.976-4.151 4.976-.811 0-1.573-.421-1.834-.919l-.498 1.902c-.181.695-.669 1.566-.995 2.097A8 8 0 1 0 8 0z" />
                  </svg><span className='ms-2'>Pinterest</span></Link></li>
                  <li>
                    <Link className="socialMediaLink" href="https://twitter.com/readupnext" target='_blank'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
                        <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z" />
                      </svg>
                      <span className='ms-2'>Twitter</span>
                    </Link>
                  </li>
                  <li><Link className="socialMediaLink" href="https://www.facebook.com/readupnext" target='_blank'><i className="bi bi-facebook"></i><span className='ms-2'>Facebook</span></Link></li>
                </ul>
              </div>
            </div>
            <div className="col-xl-6 col-lg-7 col-md-7 m-auto">
              <h2 className="tx-new d-block d-md-none text-center mt-100 mb-80 lg-mt-40 lg-mb-40 wow fadeInUp">
                Any question? Send us message.
              </h2>
              <ContactForm />
              {/* /.form-style-one */}
            </div>
          </div>
        </div>
        {/* End .container */}
        {/* <Map /> */}
      </div>

      {/* 
        =============================================
        Contact Section One
        ============================================== 
        */}
      <DefaultFooter />
    </>
  );
};

export default contact;
