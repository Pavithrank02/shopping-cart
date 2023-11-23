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
      <div className="grid grid-cols-1 gap-6">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <button
              className="w-full py-4 px-6 text-left focus:outline-none"
              onClick={() => {
                const element = document.getElementById(`faq-answer-${index}`);
                if (element) {
                  element.classList.toggle('hidden');
                }
              }}
            >
              <h2 className="text-lg font-semibold">{faq.question}</h2>
            </button>
            <div
              id={`faq-answer-${index}`}
              className="hidden p-6 border-t border-gray-200"
            >
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EShoppingFAQ;
