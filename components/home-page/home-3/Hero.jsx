import Image from "next/image";
import { Search } from "../../team/Search";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="hero-banner-twelve pt-130 pb-120 lg-pb-80 pt-md-200">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="text-wrapper" data-aos="fade-right">
              <h1 className="hero-heading fw-500 tx-dark">
                Discover Your Next Recommended Book
              </h1>
              <p className="tx-dark mb-30 pt-20 lg-pt-20 lg-mb-20">
                Explore and find your next good read - <strong>recommended books by influential people</strong>, handpicked by genre, or curated for specific interests.
              </p>
              <Search />
              <div className="d-lg-flex align-items-center">
                <Link
                  href="/list"
                  className="btn-twentyFour position-relative d-inline-flex align-items-center me-5 mt-30"
                >
                  <span>Explore All Books</span>
                  <img
                    src="/images/icon/icon_123.svg"
                    alt="icon"
                    className="ms-3"
                  />
                </Link>
                {/* <div className="btn-eighteen position-relative d-inline-block tx-dark mt-15 md-mt-20">
                  <a href="#" className="fw-500 tran3s">
                    Join for Free Now!
                  </a>
                </div> */}
              </div>
            </div>
          </div>
          {/* End col-6 */}

          <div
            className="col-xxl-4 col-xl-4 col-lg-5 col-md-6 ms-auto text-end"
            data-aos="fade-left"
          >
            <div className="image-holder zn2 d-inline-block position-relative sm-mt-60">
              <img
                src="/images/assets/bg-12.png"
                alt="img"
                className="lazy-img"
              />
              <div className="media-img">
                <Image
                  width={490}
                  height={542}
                  layout="responsive"
                  src="/images/media/img_58.webp"
                  alt="img"
                  className="lazy-img"
                />
              </div>

              <div
                className="card-style card-one d-flex flex-column justify-content-center align-items-center"
                data-aos="fade-right"
                data-aos-delay="100"
              >
                <h4>200K+</h4>
                <p>Popular Books</p>
              </div>
              {/* /.card-one */}

              <div
                className="card-style card-two d-flex flex-column justify-content-center align-items-center"
                data-aos="fade-left"
                data-aos-delay="100"
              >
                <h4>1300+</h4>
                <p>Categories</p>
              </div>
              {/* /.card-one */}

              <div
                className="card-style card-three d-flex flex-column justify-content-center align-items-center"
                data-aos="fade-left"
                data-aos-delay="300"
              >
                <h5 style={{ textAlign: "center" }}>750+ Recommendation</h5>
                <div className="avatar d-flex align-items-center">
                  <img src="/author_images/Bill_Gates.jpg" alt="" />
                  <img src="/author_images/Elon_Musk.jpg" alt="" />
                  <img src="/author_images/Emma_Watson.jpg" alt="" />
                  <img src="/author_images/Eric_Weinstein.jpg" alt="" />
               
                    <Link href="/people" className="avatar_image avatar_fallback">
                      <i className="bi bi-arrow-right-short" />
                    </Link>
                </div>
              </div>
              {/* /.card-one */}

              <img
                src="/images/shape/shape_146.svg"
                alt="shape"
                className="shapes shape-one lazy-img"
              />
              <img
                src="/images/shape/shape_147.svg"
                alt="shape"
                className="shapes shape-two lazy-img"
              />
            </div>
          </div>
          {/* End col-6 */}
        </div>
        {/* /.row */}
      </div>
      {/* /.container */}
    </div>
  );
};

export default Hero;
