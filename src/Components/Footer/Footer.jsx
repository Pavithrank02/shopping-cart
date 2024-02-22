import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faTwitterSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6">
      <div className="container mx-auto text-center">
        <p className="text-lg font-bold mb-4 animate-fade-in-up">
          &copy; {new Date().getFullYear()} E-Shopping. All Rights Reserved.
        </p>
        <p className="text-sm mb-2 animate-fade-in-up-delay">
          Made with <span role="img" aria-label="heart" className="text-red-500">❤️</span> by YourCompany
        </p>
        <p className="text-sm opacity-50 animate-fade-in-up-delay-2">Stay Connected:</p>
        <div className="flex justify-center mt-2">
          {/* Social media icons */}
          <a href="#" className="text-white hover:text-gray-300 mx-2 social-icon animate-bounce" title="Facebook">
            <FontAwesomeIcon icon={faFacebookSquare} size="2x" />
          </a>
          <a href="#" className="text-white hover:text-gray-300 mx-2 social-icon animate-bounce" title="Twitter">
            <FontAwesomeIcon icon={faTwitterSquare} size="2x" />
          </a>
          <a href="#" className="text-white hover:text-gray-300 mx-2 social-icon animate-bounce" title="Instagram">
            <FontAwesomeIcon icon={faInstagramSquare} size="2x" />
          </a>
        </div>
      </div>
      <style jsx>{`
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateX(-10px); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-in-out;
        }
        .animate-fade-in-up-delay {
          animation: fade-in-up 1s ease-in-out forwards;
          animation-delay: 0.3s;
        }
        .animate-fade-in-up-delay-2 {
          animation: fade-in-up 1s ease-in-out forwards;
          animation-delay: 0.6s;
        }
        .animate-bounce {
          animation: bounce 1s infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
