import React from 'react';

const EShoppingFAQ = () => {
  const faqs = [
    {
      question: 'What payment methods do you accept?',
      answer:
        'We accept various payment methods, including credit/debit cards (Visa, Mastercard, American Express), PayPal, and other secure payment gateways.'
    },
    {
      question: 'Can I modify or cancel my order?',
      answer:
        'Once an order is placed, modifications or cancellations may be possible within a limited time frame. Please contact our customer support as soon as possible for assistance.'
    },
    {
      question: 'How do I track my order?',
      answer:
        'After your order is shipped, you will receive a tracking number via email. You can use this tracking number to monitor the status and location of your package.'
    },
    // Add more e-shopping related FAQs as needed
  ];

  return (
    <div className="max-w-4xl mx-auto mt-8">
      <h1 className="text-4xl font-semibold mb-8 text-center">Frequently Asked Questions</h1>
      <div className="accordion">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <input type="checkbox" id={`faq-toggle-${index}`} className="hidden" />
            <label htmlFor={`faq-toggle-${index}`} className="faq-question cursor-pointer flex items-center justify-between py-3 px-5 border-b border-gray-300">
              <span className="text-lg font-semibold">{faq.question}</span>
              <svg
                className="w-4 h-4 transition-transform transform"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </label>
            <div className="faq-answer overflow-hidden border-l-2 border-gray-300">
              <div className="p-5">{faq.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EShoppingFAQ;
