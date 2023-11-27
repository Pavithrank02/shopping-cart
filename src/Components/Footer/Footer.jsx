import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faTwitterSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} E-Shopping. All Rights Reserved.
        </p>
        <p className="mt-2 text-xs">
          Made with <span role="img" aria-label="heart" className="text-red-500">❤️</span> by YourCompany
        </p>
        <p className="mt-4 text-xs opacity-50">Stay Connected:</p>
        <div className="flex justify-center mt-2">
          {/* Social media icons */}
          <a href="#" className="text-white hover:text-gray-300 mx-2" title="Facebook">
            <FontAwesomeIcon icon={faFacebookSquare} size="lg" />
          </a>
          <a href="#" className="text-white hover:text-gray-300 mx-2" title="Twitter">
            <FontAwesomeIcon icon={faTwitterSquare} size="lg" />
          </a>
          <a href="#" className="text-white hover:text-gray-300 mx-2" title="Instagram">
            <FontAwesomeIcon icon={faInstagramSquare} size="lg" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
