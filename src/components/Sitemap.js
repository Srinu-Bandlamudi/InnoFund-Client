// Sitemap.js

import React from 'react';

const Sitemap = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white rounded shadow-md w-full max-w-screen-lg overflow-hidden">
        <div className="p-8 md:p-12">
          <h1 className="text-3xl font-bold mb-6 text-center">Sitemap</h1>

          <ul className="list-disc ml-8 mb-8">
            <li className="text-blue-700 mb-4">
              <a href="/" className="hover:underline">Home</a>
            </li>
            <li className="text-blue-700 mb-4">
              <a href="/about" className="hover:underline">About Us</a>
            </li>
            <li className="text-blue-700 mb-4">
              <a href="/services" className="hover:underline">Services</a>
              <ul className="list-disc ml-8 mt-2">
                <li><a href="/services/web-design" className="text-blue-700 hover:underline">Web Design</a></li>
                <li><a href="/services/digital-marketing" className="text-blue-700 hover:underline">Digital Marketing</a></li>
                <li><a href="/services/consulting" className="text-blue-700 hover:underline">Consulting</a></li>
              </ul>
            </li>
            <li className="text-blue-700 mb-4">
              <a href="/projects" className="hover:underline">Projects</a>
            </li>
            <li className="text-blue-700 mb-4">
              <a href="/contact" className="hover:underline">Contact Us</a>
            </li>
            <li className="text-blue-700 mb-4">
              <a href="/terms-and-conditions" className="hover:underline">Terms and Conditions</a>
            </li>
          </ul>

          <p className="text-center text-gray-600 mt-8">
            For any further information please email us at <a href="mailto:info@innofund.com" className="text-blue-500 hover:underline">info@innofund.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sitemap;
