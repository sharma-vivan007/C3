// src/Component/FAQ/FAQ.js

import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  const faqData = [
    {
      question: "What is your refund policy?",
      answer: "Our refund policy allows you to request a refund within 30 days of purchase."
    },
    {
      question: "How do I track my order?",
      answer: "You can track your order using the tracking number provided in your order confirmation email."
    },
    {
      question: "Do you offer customer support?",
      answer: "Yes, we offer 24/7 customer support via email, phone, and live chat."
    }
  ];

  return (
    <div className="faq-container">
      <h3 className="faq-title">Frequently Asked Questions</h3> {/* Added h3 title */}
      {faqData.map((item, index) => (
        <div key={index} className="faq-item">
          <div className="faq-question" onClick={() => toggleFAQ(index)}>
            <h3>{item.question}</h3>
            <span className={activeIndex === index ? 'rotate' : ''}>{activeIndex === index ? '-' : '+'}</span>
          </div>
          <div className={`faq-answer ${activeIndex === index ? 'show' : ''}`}>
            <p>{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
