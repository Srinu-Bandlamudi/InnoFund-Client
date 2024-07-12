import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Get in Touch */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
            <p className="mb-4">
              We would love to hear from you! Whether you have a question about our services, pricing, or anything else, our team is ready to answer all your questions.
            </p>
            <p className="mb-2">
              <strong>Address:</strong> 123 Main Street, City, Country
            </p>
            <p className="mb-2">
              <strong>Email:</strong> info@example.com
            </p>
            <p>
              <strong>Phone:</strong> +123 456 7890
            </p>
          </div>

          {/* Social Media Links */}
          <div className="col-span-2 md:col-auto">
            <h2 className="text-2xl font-bold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              {/* Facebook */}
              <a href="#" className="text-white hover:text-gray-400 transition duration-300">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17 2h-3a5 5 0 0 0-5 5v3H6v4h3v7h4v-7h3l1-4h-4V7a1 1 0 0 1 1-1h3zm-5-1a6 6 0 0 1 6 6v3h-3v-4a3 3 0 0 0-3-3h-3V1zm-2 11v3H6v-3h3z"
                  />
                </svg>
              </a>
              
              {/* Twitter */}
              <a href="#" className="text-white hover:text-gray-400 transition duration-300">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20.934 5.262a8.458 8.458 0 0 1-2.406.658 4.222 4.222 0 0 0 1.844-2.328 8.442 8.442 0 0 1-2.675 1.022 4.205 4.205 0 0 0-7.168 3.844 11.933 11.933 0 0 1-8.65-4.395 4.18 4.18 0 0 0-.568 2.122 4.208 4.208 0 0 0 1.87 3.514 4.214 4.214 0 0 1-1.91-.527v.053a4.206 4.206 0 0 0 3.368 4.116 4.218 4.218 0 0 1-1.904.072 4.206 4.206 0 0 0 3.932 2.916 8.437 8.437 0 0 1-5.232 1.801 11.925 11.925 0 0 0 6.442 1.879c7.704 0 11.918-6.372 11.918-11.918 0-.182-.005-.362-.012-.542a8.504 8.504 0 0 0 2.087-2.17z"
                  />
                </svg>
              </a>
              
              {/* LinkedIn */}
              <a href="#" className="text-white hover:text-gray-400 transition duration-300">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3 3h4v14H3V3zm5 0h4v2.726c-.588-.33-1.271-.565-2-.678V3zm0 7.25V7h4v3.25H8zm4.57 1.5h-.02a1.75 1.75 0 1 1 .02-3.5 1.75 1.75 0 0 1-.02 3.5zM21 3h-4v2.726c.588-.33 1.271-.565 2-.678V3zm-2 12.25V17h-4v-3.25h4zM15 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-7 5h4v-5H8v5zm6-5a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
