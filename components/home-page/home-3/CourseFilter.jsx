import { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";

const courseData = [
  {
    id: 1,
    imgSrc: "/books_images/Cinematography.jpg",
    instructor: "Blain Brown",
    duration: "53m",
    title: "Cinematography",
    rating: 4.6,
    ratingsCount: 452,
    buyLink:"https://www.amazon.com/dp/074326438X?tag=readupnext-20",
    slug:"cinematography",
    tags: ["Best Cinematography Books"],
  },
  {
    id: 2,
    imgSrc: "/books_images/The Art of SEO.jpg",
    instructor: "Eric Enge",
    duration: "8h",
    title: "The Art of SEO",
    rating: 4.1,
    ratingsCount: 841,
    buyLink:"https://www.amazon.com/dp/B0141LJ37Y?tag=readupnext-20",
    slug:"the-art-of-seo",
    tags: ["Best SEO Books"],
  },
  {
    id: 3,
    imgSrc: "/books_images/Deep Work.jpg",
    instructor: "Cal Newport",
    duration: "53m",
    title: "Deep Work",
    rating: 4.6,
    ratingsCount: 16512,
    buyLink:"https://www.amazon.com/dp/0349413681?tag=readupnext-20",
    slug:"deep-work",
    tags: ["Best Learning Books"],
  },
  {
    id: 4,
    imgSrc: "/books_images/Film Lighting.jpg",
    instructor: "Kris Malkiewicz",
    duration: "8h",
    title: "Film Lighting",
    rating: 4.6,
    ratingsCount: 122,
    buyLink:"https://www.amazon.com/dp/1439169063?tag=readupnext-20",
    slug:"film-lighting",
    tags: ["Best Cinematography Books"],
  },
  {
    id: 5,
    imgSrc: "/books_images/SEO Workbook.jpg",
    instructor: "Jason McDonald",
    duration: "8h",
    title: "SEO Workbook",
    rating: 4.1,
    ratingsCount: 172,
    buyLink:"https://www.amazon.com/dp/B0BRC98BDZ?tag=readupnext-20",
    slug:"seo-workbook",
    tags: ["Best SEO Books"],
  },
  {
    id: 6,
    imgSrc: "/books_images/Behind the Lens.jpg",
    instructor: "Jay Holben",
    duration: "8h",
    title: "Behind the Lens",
    rating: 4.7,
    ratingsCount: 22,
    buyLink:"https://www.amazon.com/dp/1138813486?tag=readupnext-20",
    slug:"behind-the-lens",
    tags: ["Best Cinematography Books"],
  },
  {
    id: 7,
    imgSrc: "/books_images/SEO Like I’m 5.jpg",
    instructor: "Matthew Capala",
    duration: "8h",
    title: "SEO Like I’m 5",
    rating: 3.6,
    ratingsCount: 101,
    buyLink:"https://www.amazon.com/dp/B00S00QDZS?tag=readupnext-20",
    slug:"seo-like-i-m-5",
    tags: ["Best SEO Books"],
  },
  {
    id: 8,
    imgSrc: "/books_images/Atomic Habits.jpg",
    instructor: "James Clear",
    duration: "8h",
    title: "Atomic Habits",
    rating: 4.8,
    ratingsCount: 101414,
    buyLink:"https://www.amazon.com/dp/0735211299?tag=readupnext-20",
    slug:"atomic-habits",
    tags: ["Best Learning Books"],
  },
  {
    id: 9,
    imgSrc: "/books_images/A Mind for Numbers.webp",
    instructor: "Barbara Oakley",
    duration: "8h",
    title: "A Mind for Numbers",
    rating: 4.6,
    ratingsCount: 3881,
    buyLink:"https://www.amazon.com/dp/039916524X?tag=readupnext-20",
    slug:"a-mind-for-numbers",
    tags: ["Best Learning Books"],
  },
  {
    id: 10,
    imgSrc: "/books_images/Treasure Island.webp",
    instructor: "Robert Louis Stevenson",
    duration: "8h",
    title: "Treasure Island",
    rating: 4.5,
    ratingsCount: 10284,
    buyLink:"https://www.amazon.com/dp/1101990325?tag=readupnext-20",
    slug:"treasure-island",
    tags: ["Best Pirate Books"],
  },
  {
    id: 11,
    imgSrc: "/books_images/Under the Black Flag.webp",
    instructor: "David Cordingly",
    duration: "8h",
    title: "Under the Black Flag",
    rating: 4.5,
    ratingsCount: 803,
    buyLink:"https://www.amazon.com/dp/081297722X?tag=readupnext-20",
    slug:"under-the-black-flag",
    tags: ["Best Pirate Books"],
  },
  {
    id: 12,
    imgSrc: "/books_images/The Unbinding of Mary Reade.webp",
    instructor: "Miriam McNamara",
    duration: "8h",
    title: "The Unbinding of Mary Reade",
    rating: 4.1,
    ratingsCount: 90,
    buyLink:"https://www.amazon.com/dp/B075FDC94W?tag=readupnext-20",
    slug:"the-unbinding-of-mary-reade",
    tags: ["Best Pirate Books"],
  },
  {
    id: 13,
    imgSrc: "/books_images/The Road.jpg",
    instructor: "Cormac McCarthy",
    duration: "8h",
    title: "The Road",
    rating: 4.4,
    ratingsCount: 12561,
    buyLink:"https://www.amazon.com/dp/0307387895?tag=readupnext-20",
    slug:"the-road",
    tags: ["Best Fiction Books"],
  },
  {
    id: 14,
    imgSrc: "/books_images/Ulysses.webp",
    instructor: "Miriam McNamara",
    duration: "8h",
    title: "Ulysses",
    rating: 4.1,
    ratingsCount: 1190,
    buyLink:"https://www.amazon.com/dp/1840226358?tag=readupnext-20",
    slug:"ulysses",
    tags: ["Best Fiction Books"],
  },
  {
    id: 15,
    imgSrc: "/books_images/Moby Dick.webp",
    instructor: "Herman Melville",
    duration: "8h",
    title: "Moby Dick",
    rating: 4.5,
    ratingsCount: 7670,
    buyLink:"https://www.amazon.com/dp/1853260088?tag=readupnext-20",
    slug:"moby-dick",
    tags: ["Best Fiction Books"],
  },
  {
    id: 16,
    imgSrc: "/books_images/Outlander.webp",
    instructor: "Diana Gabaldon",
    duration: "8h",
    title: "Outlander",
    rating: 4.7,
    ratingsCount: 43419,
    buyLink:"https://www.amazon.com/dp/0385319959?tag=readupnext-20",
    slug:"outlander",
    tags: ["Best Romance Books"],
  },
  {
    id: 17,
    imgSrc: "/books_images/Vision In White.webp",
    instructor: "Nora Roberts",
    duration: "8h",
    title: "Vision In White",
    rating: 4.5,
    ratingsCount: 2362,
    buyLink:"https://www.amazon.com/dp/B001VFTYY6?tag=readupnext-20",
    slug:"vison-in-white",
    tags: ["Best Romance Books"],
  },
  {
    id: 18,
    imgSrc: "/books_images/The Selection.webp",
    instructor: "Kiera Cass",
    duration: "8h",
    title: "The Selection",
    rating: 4.6,
    ratingsCount: 13620,
    buyLink:"https://www.amazon.com/dp/0062059947?tag=readupnext-20",
    slug:"the-selection",
    tags: ["Best Romance Books"],
  },
];

const CourseFilter = () => {
  const [filter, setFilter] = useState("*");

  const filteredItems =
    filter === "*"
      ? courseData
      : courseData.filter((item) => item.tags.includes(filter));

  var settings = {
    infinite: false,
    autoplay: false,
    variableWidth: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <ul
        className="nav nav-tabs border-0 mb-80 lg-mb-80 md-mb-30"
        role="tablist"
        data-aos="fade-up"
      >
        <ul className="style-none text-center isotop-menu-wrapper d-flex flex-wrap">
          <li className="nav-item my-1">
            <button
              className={filter === "*" ? "active nav-link" : "nav-link"}
              onClick={() => setFilter("*")}
            >
              All
            </button>
          </li>
          <li className="nav-item my-1">
            <button
              className={filter === "graphic" ? "active nav-link" : "nav-link"}
              onClick={() => setFilter("Best Cinematography Books")}
            >
              Best Cinematography Books
            </button>
          </li>
          <li className="nav-item my-1">
            <button
              className={filter === "it" ? "active nav-link" : "nav-link"}
              onClick={() => setFilter("Best SEO Books")}
            >
              Best SEO Books
            </button>
          </li>
          <li className="nav-item my-1">
            <button
              className={filter === "language" ? "active nav-link" : "nav-link"}
              onClick={() => setFilter("Best Learning Books")}
            >
              Best Learning Books
            </button>
          </li>
          <li className="nav-item my-1">
            <button
              className={filter === "coding" ? "active nav-link" : "nav-link"}
              onClick={() => setFilter("Best Pirate Books")}
            >
              Best Pirate Books
            </button>
          </li>
          <li className="nav-item my-1">
            <button
              className={filter === "art" ? "active nav-link" : "nav-link"}
              onClick={() => setFilter("Best Fiction Books")}
            >
              Best Fiction Books
            </button>
          </li>
          <li className="nav-item my-1">
            <button
              className={
                filter === "marketing" ? "active nav-link" : "nav-link"
              }
              onClick={() => setFilter("Best Romance Books")}
            >
              Best Romance Books
            </button>
          </li>
          <Link href='/list'>
            <li className="nav-item my-1">
              <button
                className={"nav-link linkbtn"}
              >
                Explore all categories
              </button>
            </li>
          </Link>
        </ul>
      </ul>
      {/* End ul */}

      <div className="slider-wrapper">
        <div
          className="tab-content position-relative zn2 course_slider_one"
          data-aos="fade-up"
        >
          <Slider {...settings} arrows={false}>
            {filteredItems.map((course) => (
              <div className="item" key={course.id} >
                <div className="card-style-twenty tran3s" style={{width:"300px"}}>
                  <div className="img-meta d-flex justify-content-center">
                    <Image
                      width={150}
                      height={220}
                      src={course.imgSrc}
                      alt="media"
                    />
                  </div>
                  {/* /.img-meta */}
                  <div className="course-data position-relative">
                    <Link href={"/book/"+course.slug} className="course-title fs-15 fw-500 text-nowrap text-center w-100">
                      {course.title}
                    </Link>
                    <div className="d-flex text-center align-items-center justify-content-center">
                        {course.instructor}
                    </div>
                    <div className="course-review d-flex align-items-center justify-content-center">
                      <ul className="style-none d-flex">
                        {Array.from({ length: Math.ceil(course.rating) }, (_, i) => (
                          Math.ceil(course.rating) - ((course.rating % Math.floor(course.rating)) + (i)) < 1 ?
                            <li className="pe-1" style={{ color: "#ffce4c" }} key={i}>
                              <i className="bi bi-star-half"></i>
                            </li> :
                            <li className="pe-1" style={{ color: "#ffce4c" }} key={i}>
                              <i className="bi bi-star-fill" />
                            </li>
                        ))}
                        {Array.from({ length: 5 - Math.ceil(course.rating) }, (_, i) => (
                          <li className="pe-1" key={i}>
                            <i className="bi bi-star-fill" />
                          </li>
                        ))}
                      </ul>
                      <span className="fs-15 tx-dark ms-1">
                        ({course.ratingsCount})
                      </span>
                    </div>
                    {/* <div className="d-flex align-items-center justify-content-between mt-30 mb-10">
                      <strong className="price fw-500 fs-15 tx-dark">
                        ${course.price.toFixed(2)}{" "}
                        <del className="opacity-50 fw-normal">
                          ${course.discountedPrice.toFixed(2)}
                        </del>
                      </strong>
                      <a href="#" className="bookmark" title="Bookmark">
                        <i className="bi bi-bookmark" />
                      </a>
                    </div> */}
                    {/* <a href="#" className="btn-one fs-15 fw-500 mt-15 md-mt-15">
                      <i class="fa-brands fa-amazon"></i> View on Amazon
                    </a> */}
                    <div className="theme-main-menu position-static d-flex justify-content-center pb-0 w-100 px-0" style={{zIndex:5,paddingTop:"7px"}}>
                      <Link
                        target="_blank"
                        href={course.buyLink}
                        style={{zIndex:3, lineHeight:"45px"}}
                        className="start-btn-one fs-18 fw-500 tran3s position-relative px-2 text-center w-75"
                      >
                        View on Amazon
                      </Link>
                    </div>
                  </div>
                  {/* /.course-data */}
                </div>
                {/* /.card-style-twenty */}
              </div>
            ))}
          </Slider>
        </div>
        {/* /.tab-content */}
      </div>
    </>
  );
};

export default CourseFilter;
