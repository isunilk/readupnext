import Link from "next/link";

import { useRouter } from "next/router";

const Header_menu = () => {
  const router = useRouter();
  return (
    <nav className="navbar navbar-expand-lg order-lg-3">
      <button
        className="navbar-toggler d-block d-lg-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span />
      </button>
      {/* End mobile collapse menu */}

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="d-block d-lg-none">
            <div className="logo mb-3">
              <Link href="/" className="d-block">
                <img src="/images/assets/logo-4.png" alt="" width={220} />
              </Link>
            </div>
          </li>
          {/* End li */}


          <li className="nav-item">
            <Link
              className="nav-link"
              href="/people"

            >
              People
            </Link>
           
          </li>
          {/* End li (pages) */}
          <li className="nav-item">
            <Link
              className="nav-link"
              href="/author">Author</Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              href="/list"

            >
              Best List
            </Link>
           
          </li>
          {/* End li (portfolio) */}

          
          {/* End li (blog) */}

          <li className="nav-item">
            <Link className="nav-link" href="/series" role="button">
              Series
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/blog" role="button">
              Blog
            </Link>
          </li>
        </ul>
        {/* End ul */}

        {/* Mobile Content */}
        <div className="mobile-content d-block d-lg-none" style={{ borderTop: "1px solid lightgray" }}>

          <ul className='list-unstyled'>
            <li className="my-3"><Link href="https://www.instagram.com/readupnext/" target='_blank'><i className="bi bi-instagram"></i><span className='ms-2'>Instagram</span></Link></li>
            <li className="my-3"><Link href="http://www.pinterest.com/readupnext" target='_blank'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pinterest" viewBox="0 0 16 16">
              <path d="M8 0a8 8 0 0 0-2.915 15.452c-.07-.633-.134-1.606.027-2.297.146-.625.938-3.977.938-3.977s-.239-.479-.239-1.187c0-1.113.645-1.943 1.448-1.943.682 0 1.012.512 1.012 1.127 0 .686-.437 1.712-.663 2.663-.188.796.4 1.446 1.185 1.446 1.422 0 2.515-1.5 2.515-3.664 0-1.915-1.377-3.254-3.342-3.254-2.276 0-3.612 1.707-3.612 3.471 0 .688.265 1.425.595 1.826a.24.24 0 0 1 .056.23c-.061.252-.196.796-.222.907-.035.146-.116.177-.268.107-1-.465-1.624-1.926-1.624-3.1 0-2.523 1.834-4.84 5.286-4.84 2.775 0 4.932 1.977 4.932 4.62 0 2.757-1.739 4.976-4.151 4.976-.811 0-1.573-.421-1.834-.919l-.498 1.902c-.181.695-.669 1.566-.995 2.097A8 8 0 1 0 8 0z" />
            </svg><span className='ms-2'>Pinterest</span></Link></li>
            <li className="my-3"><Link href="https://twitter.com/readupnext" target='_blank'><i className="bi bi-twitter"></i><span className='ms-2'>Twitter</span></Link></li>
            <li className="my-3"><Link href="https://www.facebook.com/readupnext" target='_blank'><i className="bi bi-facebook"></i><span className='ms-2'>Facebook</span></Link></li>
          </ul>
        </div>
        {/* /.mobile-content */}
      </div>
    </nav>
  );
};

export default Header_menu;
