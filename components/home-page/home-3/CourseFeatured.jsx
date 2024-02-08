import Image from "next/image";
import Link from "next/link";

const coursesData = [
  {
    id: 1,
    link_slug:"/series/foundation",
    img1:"/books_images/Foundation.jpg",
    img2:"/books_images/Foundation and Empire.jpg",
    img3:"/books_images/Second Foundation.jpg",
    numBooks: 7,
    series_name: "Foundation",
  },
  {
    id: 2,
    link_slug:"/author/toni-morrison",
    img1:"/books_images/The Bluest Eye.jpg",
    img2:"/books_images/Sula.jpg",
    img3:"/books_images/Song of Solomon.jpg",
    numBooks: 30,
    series_name: "Toni Morrison",
  },
  {
    id: 3,
    link_slug:"/series/dune",
    img1:"/books_images/Dune.jpg",
    img2:"/books_images/Dune Messiah.jpg",
    img3:"/books_images/Children of Dune.jpg",
    numBooks: 30,
    series_name: "Dune",
  },
  {
    id: 4,
    link_slug:"/series/nikki-heat",
    img1:"/books_images/Heat Wave.jpg",
    img2:"/books_images/Naked Heat.jpg",
    img3:"/books_images/Heat Rises.jpg",
    numBooks: 10,
    series_name: "Nikki Heat",
  },
];

const CourseFeatured = () => {
  return (
    <>
      {coursesData.map((course) => (
        
        <div className="col-sm-6 d-flex flex-column space-fix position-relative" key={course.id+1}>
          <Link
            href={course.link_slug+"-books-in-order"}
            className="card-style-nineteen position-relative d-flex flex-column tran3s mb-40 xs-mb-20"
          >
            <span className="tag fw-500 text-white text-uppercase position-absolute" style={{right:"10%"}}>
              Books {course.numBooks}+
            </span>
            <Image
              width={80}
              height={120}
              alt="img"
              src={course.img1}
              />
            <Image
              width={80}
              height={120}
              src={course.img2}
              alt="img"
              className="position-absolute top-50 start-50 translate-middle"
              />
            <Image
              width={80}
              height={120}
              src={course.img3}
              alt="img"
              className="position-absolute"
              style={{bottom:"10%", right:"10%"}}
            />
            {/* <img src="./books_images/Death's End.jpg" alt="" /> */}
            {/* <h4 className="mb-0 mt-25">{course.title}</h4>
            <ul className="style-none pb-40 lg-pb-20 d-flex justify-content-between">
              <li>{course.level}</li>
              <li>{course.numClasses} Classes</li>
            </ul> */}
            <span className="tag2 fw-bold tx-dark text-uppercase mt-auto" style={{maxWidth:"60%"}}>
              {course.series_name}
            </span>
          </Link>
          {/* /.card-style-nineteen */}
        </div>
      ))}
    </>
  );
};

export default CourseFeatured;
