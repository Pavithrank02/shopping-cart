import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="text-xx-large">
          &copy; {new Date().getFullYear()} E-Shopping. All Rights Reserved.
        </p>
        <p className="mt-2 text-x-large">
          Made with <span role="img" aria-label="heart" className="text-red-500">❤️</span> by YourCompany
        </p>
        <p className="mt-4 text-xs opacity-50">Stay Connected:</p>
        <div className="flex justify-center mt-2">
          {/* Your social media icons or links can be added here */}
          <a href="#" className="text-white hover:text-gray-300 mx-2" title="Facebook">
            <i className="fab fa-facebook-square text-lg"></i>
          </a>
          <a href="#" className="text-white hover:text-gray-300 mx-2" title="Twitter">
            <i className="fab fa-twitter-square text-lg"></i>
          </a>
          <a href="#" className="text-white hover:text-gray-300 mx-2" title="Instagram">
            <i className="fab fa-instagram-square text-lg"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
