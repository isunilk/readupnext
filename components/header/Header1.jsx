import { useEffect, useState } from "react";
import Link from "next/link";
import Header_menu from "./Header_menu";
import { NavSearch } from "../team/NavSearch";
import { useRouter } from "next/router";

const Header1 = () => {
  const query = useRouter()
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return (
    <header
      className={`theme-main-menu sticky-menu theme-menu-ten ${navbar ? "fixed" : ""
        }`}
    >
      <div className="container inner-content position-relative">
        <div className="d-flex align-items-center justify-content-between">
          <div className="logo d-flex justify-content-center flex-sm-grow-0 flex-grow-1 order-lg-0">
            <Link href="/">
              <img className="header-logo" src="/images/assets/logo-4.webp" alt="" width={220} />
            </Link>
          </div>
          {
            query.route !== "/" ?
              < div className="d-md-flex justify-content-center d-none">
                <NavSearch />
              </div>
              : null
          }

          <Header_menu />
        </div>
      </div>
      {/* /.inner-content */}
    </header >
  );
};

export default Header1;
