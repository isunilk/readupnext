import Link from "next/link";

const columns = [
  
  {
    title: "Quick Links",
    links: [
      { label: "About Us", url: "/about" },
      { label: "Contact", url: "/contact" },
      { label: "Privacy Policy", url: "/privacy-policy" },
      { label: "Affiliate Disclosure", url: "/affiliate-disclosure" },
      {label:"Visit Bookshop", url:"https://bookshop.org/shop/readupnext "}
    ],
  },
  {
    title: "Categories",
    links: [
      { label: "People", url: "/people" },
      { label: "Author", url: "/author" },
      { label: "Best List", url: "/list" },
      { label: "Series", url: "/series" },
      { label: "Quotes", url: "/quotes" },
      { label: "Blog", url: "/blog" },
    ],
  },
  // {
  //   title: "Products",
  //   links: [
  //     { label: "Web hosting", url: "/" },
  //     { label: "Cloud hosting", url: "/" },
  //     { label: "WordPress hosting", url: "/" },
  //     { label: "VPS hosting", url: "/" },
  //     { label: "Dedicated hosting", url: "/" },
  //   ],
  // },
];

const Footer2 = () => {
  return (
    <>
      {columns.map((column, index) => (
        <div className={`${index===0?"col-lg-3":"col-lg-2"} col-md-6 col-12 mb-20`} key={index}>
          <h5 className="fs-6 text-uppercase mb-20 fw-bold">{column.title}</h5>
          <ul className="footer-nav-link style-none gap-2">
            {column.links.map((link, index) => (
              <li key={index}>
                <Link href={link.url}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default Footer2;
