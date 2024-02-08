import React from "react";

const faqData = [
  {
    id: 1,
    question: "Foundation",
    answer:
    "Foundation is set in the future, when the world is barely remembered, and humans have colonized the galaxy",
  },
  {
    id: 2,
    question: "Toni Morrison",
    answer:
      "The central theme of Morrison's novels is the Black American experience; in an unjust society, her characters struggle to find themselves and their cultural identity",
  },
  {
    id: 3,
    question: "Dune",
    answer:
      "Dune is set in the distant future amidst a feudal interstellar society in which various noble houses control planetary fiefs.",
  },
  {
    id: 4,
    question: "Nikki Heat",
    answer:
      "Tough, sexy, professional, Nikki Heat carries a passion for justice as she leads one of New York City's top homicide squads.",
  },
];

const Faq = () => {
  return (
    <div className="accordion accordion-style-six" id="accordionOne">
      {faqData.map((item, index) => (
        <div className="accordion-item" key={item.id}>
          <div className="accordion-header" id={`heading${item.id}`}>
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse${item.id}`}
              aria-expanded={index === 0 ? "true" : "false"}
              aria-controls={`collapse${item.id}`}
            >
              {item.question}
            </button>
          </div>
          <div
            id={`collapse${item.id}`}
            className="accordion-collapse collapse"
            aria-labelledby={`heading${item.id}`}
            data-bs-parent="#accordionOne"
          >
            <div className="accordion-body">
              <p>{item.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faq;
