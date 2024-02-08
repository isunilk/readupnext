import Link from "next/link";

const links = [
  {
    title: "Privacy & Terms.",
    href: "/faq",
  }
];

const icons = [
  {
    icon: "fab fa-facebook-f",
    href: "https://www.facebook.com/readupnext",
  },
  {
    icon: "fab fa-instagram",
    href: "https://www.instagram.com/readupnext/",
  },
  {
    icon: "fab fa-pinterest",
    href: "http://www.pinterest.com/readupnext",
  },
];

const LinkItem = ({ title, href }) => {
  return (
    <li>
      <Link href={href}>{title}</Link>
    </li>
  );
};

const IconItem = ({ icon, href }) => {
  return (
    <li>
      <Link href={href} target="_blank" rel="noopener noreferrer">
        <i className={icon} />
      </Link>
    </li>
  );
};

const Footer = () => {
  return (
    <div className="bottom-footer pb-2 pt-0 position-relative">
      <div className="container">
        <div className="row justify-content-between">

          <div className="col-lg-4 order-lg-2 mt-15">
            <ul className="d-flex justify-content-center justify-content-lg-end social-icon style-none">
              {icons.map((icon, index) => (
                <IconItem key={index} icon={icon.icon} href={icon.href} />
              ))}
              <li>
                <Link href="https://twitter.com/readupnext" style={{lineHeight:"18px"}} target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter-x" viewBox="0 0 16 16">
                    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z" />
                  </svg>
                </Link>
              </li>

            </ul>
          </div>
          <div className="col-lg-4 order-lg-1 mt-15">
            <p className="copyright text-center m0">
              Copyright © {new Date().getFullYear()}{" "}
              <a
                style={{ color: "inherit" }}
                href="/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Readupnext
              </a>
              .com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
