import Link from "next/link";
// import blogPosts from "../../data/blog";
import Image from "next/image";

const Blog = ({blogPosts}) => {
  return (
    <>
      {blogPosts?
      blogPosts.map((post, index) => (
        <div
          className="col-md-6"
          key={index}
          data-aos="fade-up"
          data-aos-delay={index}
        >
          <article className="blog-meta-three mb-60 lg-mb-40">
            <figure className="post-img m0">
              <Link href={`/blog/${(post.title)}`} className="w-100 d-block">
                <Image
                  width={380}
                  height={280}
                  src={"/images/blog/blog_img_09.jpg"}
                  alt="blog"
                  className="lazy-img w-100 tran4s"
                />
              </Link>
            </figure>
            <div className="post-data mt-30">
              <div className="post-date opacity-75 text-uppercase">
                {post.date}
              </div>
              <Link href={`/blog/${(post.title)}`} className="mt-10 mb-15">
                <h4 className="tran3s blog-title fw-normal tx-dark">
                  {post.title}
                </h4>
              </Link>
              <div>
                <Link
                  href={`/blog/${(post.title)}`}
                  className="read-btn-two fw-500 tran3s"
                >
                  Read More
                </Link>
              </div>
            </div>
          </article>
          {/* /.blog-meta-three */}
        </div>
      )):null
    }
    </>
  );
};

export default Blog;
