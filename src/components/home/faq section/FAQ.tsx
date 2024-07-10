/* eslint-disable react-refresh/only-export-components */
import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What is the return policy?",
    answer:
      "Our return policy allows returns within 30 days of receipt of the product. The product must be in its original condition and packaging. Please contact our customer support for more details.",
  },
  {
    question: "How long does shipping take?",
    answer:
      "Shipping typically takes 5-7 business days for standard shipping. Expedited shipping options are available at checkout.",
  },
  {
    question: "Do you offer international shipping?",
    answer:
      "Yes, we offer international shipping to many countries. Shipping costs and delivery times vary based on the destination. Please refer to our shipping policy for more details.",
  },
  {
    question: "How can I track my order?",
    answer:
      "Once your order has shipped, you will receive an email with the tracking information. You can use the tracking number to check the status of your delivery on the carrier's website.",
  },
  {
    question: "What payment methods are accepted?",
    answer:
      "We accept various payment methods including credit/debit cards, PayPal, and Apple Pay. All transactions are securely processed.",
  },
];

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="my-3">
      <h2 className="text-primary text-2xl font-semibold text-center mb-3">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div key={index} className="border-b border-gray-200 pb-4">
            <button
              className="w-full text-left focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium text-secondary">
                  {faq.question}
                </h3>
                <span className="text-lg">
                  {activeIndex === index ? "-" : "+"}
                </span>
              </div>
            </button>
            {activeIndex === index && (
              <div className="mt-2 text-gray-700">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
