// export default function Faq() {
//   return (
//     <div>
//       <h1>Frequently Asked Questions</h1>
//       <
//     </div>
//   );
// }

import React, { useState } from "react";

export default function Faq() {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const questions = [
    {
      question: "What is the purpose of this website?",
      answer:
        "This website is designed to provide information and answer frequently asked questions about our company.",
    },
    {
      question: "How do I contact customer support?",
      answer:
        "You can contact customer support by emailing us at [support@example.com](mailto:support@example.com) or by calling us at 555-555-5555.",
    },
    {
      question: "What are the business hours?",
      answer: "Our business hours are Monday through Friday, 9am to 5pm EST.",
    },
  ];

  return (
    <div>
      <h1>Frequently Asked Questions</h1>
      {questions.map((question, index) => (
        <div key={index}>
          <button
            onClick={() => setActiveQuestion(index)}
            className={`faq-question ${
              activeQuestion === index ? "active" : ""
            }`}
          >
            {question.question}
          </button>
          {activeQuestion === index && (
            <div className="faq-answer">{question.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
}
