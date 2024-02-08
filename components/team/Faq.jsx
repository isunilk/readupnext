import Head from "next/head";
import React, { useEffect, useState } from "react";

const Faq = ({ faq }) => {
  // const [ques, setques] = useState()


  // const genrateObj = (faq) => {
  //   let arr = [];
  //   Object.keys(faq).forEach((key, index) => {
  //     arr.push({
  //       q: faq[key][`q${index + 1}`],
  //       a: faq[key][`a${index + 1}`]
  //     })
  //   })
  //   setques(arr)
  // }

  const questionAnswerSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: Object.keys(faq).map((key, index) => (
      {
        '@type': 'Question',
        name: faq[key][`q${index + 1}`],
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq[key][`a${index + 1}`],
        }

      }
    ))
    // ques ? ques.map((item, index) => (
    //   {
    //     '@type': 'Question',
    //     name: item.q,
    //     acceptedAnswer: {
    //       '@type': 'Answer',
    //       text: item.a,
    //     }
    //   }
    // )) : null

  };




  // useEffect(() => {
  //   genrateObj(faq);
  // }, [faq])
  return (
    <>
      <Head>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(questionAnswerSchema) }}
        />
      </Head>
      {faq ?
        <div className="accordion accordion-style-six" id="accordionOne">
          {
            Object.keys(faq).map((key, index) => (
              <div className="accordion-item mt-20" key={index}>
                <div className="accordion-header" id={`heading${index}`}>
                  <h3
                    style={{ fontSize: "16px" }}
                    className="accordion-button py-2"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse${index}`}
                    aria-expanded={index === 0 ? "true" : "false"}
                    aria-controls={`collapse${index}`}
                  >
                    Q{index + 1}: {faq[key][`q${index + 1}`]}
                  </h3>
                </div>
                <div
                  id={`collapse${index}`}
                  className={`accordion-collapse collapse${index === 0 ? " show" : ""
                    }`}
                  aria-labelledby={`heading${index}`}
                  data-bs-parent="#accordionOne"
                >
                  <div className="accordion-body">
                    <p>{faq[key][`a${index + 1}`]}</p>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
        : null}
    </>
  );
};

export default Faq;
