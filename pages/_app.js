import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import "../styles/index.scss";
import ScrollToTop from "../components/common/ScrollTop";
import { SearchPhone } from "../components/common/SearchPhone";
import SeoScript from "../components/common/Seoscript";

if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}

export default function App({ Component, pageProps }) {
  useEffect(() => {
    Aos.init({
      duration: 1200,
    });
  }, []);

  return (
    <div className="main-page-wrapper">
      <SeoScript/>
      <SearchPhone/>
      <Component {...pageProps} />
      <ScrollToTop />
    </div>
  );
}
