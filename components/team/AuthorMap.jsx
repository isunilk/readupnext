import Image from "next/image";
import Link from "next/link";


const AuthorMap = ({ data }) => {

  const onImageError = (e) => {
    e.target.src = "/images/assets/blank_people.jpg"
  }

  return (
    <>
      {data ?
        data.map((member, index) => (
          <Link
            href={"/author/" + (member.slug)+"-books-in-order"}
            key={index}
            className="p-0"
          >
            <div className="team-block-two mb-40">
              <div className="img-meta position-relative">
                <Image
                  width={200}
                  height={175}
                  src={member.imageURL!==null?member.imageURL:"/images/assets/blank_people.jpg"}
                  alt={member.name}
                  onError={onImageError}
                  className="lazy-img team-img w-100"
                />
                <div className="info text-center">
                  <h3 className="tx-dark mb-5" style={{fontSize:"14px"}}>{member.name}</h3>
                  <div className="people-secter-div d-flex flex-wrap justify-content-center gap-1">
                    {
                      member.category ?
                        member.category.map((cat, id) => {
                          return <span key={id} className={cat}>{cat}</span>
                        }) : null
                    }
                  </div>
                  <div className="tx-dark opacity-75" style={{fontSize:"12px"}}>Total Books- {member.booksCount}</div>
                </div>
                {/* /.info */}
              </div>
              {/* /.img-meta */}
            </div>
            {/* /.team-block-two */}
          </Link>
          /* End .col-3 */
        )) : null}
    </>
  );
};

export default AuthorMap;
