import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Team5 = () => {
  const[author , setAuthor] = useState([])

  const getAuthor = async()=>{
    try{
      let data = await fetch(`/api/series_authors?page=0`,{
        method:"GET",
        headers:{
          "Authorization": `Bearer ${process.env.NEXT_PUBLIC_FRONTEND_KEY}`
        }
      })
      data = await data.json()
        let width = window.innerWidth;
        let destination = 10;
        if(width>1400){
          destination = 12
        }else if(width>1200){
          destination = 10
        }
        setAuthor([...data.slice(0,3), ...data.slice(4,destination)])
     
    }catch(err){
      console.log(err)
    }
  }
  const onImageError = (e) => {
    e.target.src = "/images/assets/blank_people.jpg"
  }

  useEffect(()=>{
    getAuthor();
  },[])

  return (
    <>
      {author.map((member, index) => (
        <Link
          href={"/author/"+(member.slug)}
          key={index}
          className="col-lg-3 col-sm-6"
          data-aos="fade-up"
          data-aos-delay={`${index * 100}`}
          style={{width:"200px"}}
        >
          <div className="team-block-two mb-40">
            <div className="img-meta position-relative">
              <Image
                width={200}
                height={176}
                src={member.imageURL? member.imageURL:"/images/assets/blank_people.jpg"}
                alt={member.name}
                className="lazy-img team-img w-100"
                onError={onImageError}
              />
              <div className="info text-center">
                <h5 className="tx-dark fs-15 mb-5">{member.name}</h5>
                <div className="people-secter-div d-flex flex-wrap justify-content-center gap-1">
                  {
                    member.category?
                    member.category.map((cat, id)=>(
                      <span key={id} className={cat}>{cat}</span>
                    )):null
                  }
                  
                </div>
              </div>
              {/* /.info */}
            </div>
            {/* /.img-meta */}
          </div>
          {/* /.team-block-two */}
        </Link>
        /* End .col-3 */
      ))}
      <div data-aos="fade-up"
          data-aos-delay={`${(author.length) * 100}`}
          className="col-lg-2 col-md-4 col-sm-5 col-6 d-flex">
        <Link
          href="/author"
          className="card-style-eighteen more-item position-relative text-center d-flex flex-column justify-content-center tran3s mb-40"
        >
          
          <h3>11K+</h3>
          <p className="">More Author</p>
          <img src="/images/icon/icon_134.svg" alt="" className="mx-auto" />
          </Link>
        {/* /.card-style-eighteen */}
      </div>
    </>
  );
};

export default Team5;
