import React, { useState } from 'react';
import axios from 'axios';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3006/api/contact', formData);
      console.log('Response from backend:', response.data);
      // Optionally handle success (e.g., show a success message)
    } catch (error) {
      console.error('Error submitting contact form:', error);
      // Optionally handle error (e.g., show an error message)
    }
  };

  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="px-6 py-8 md:flex">
            <div className="md:w-1/2 p-6">
              <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <div className="mt-1">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <div className="mt-1">
                    <textarea
                      name="message"
                      id="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    ></textarea>
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full px-4 py-2 bg-indigo-600 text-white font-medium rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
            <div className="md:w-1/2 p-6 bg-gray-800 text-white">
              <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                We would love to hear from you! Whether you have a question about our services, pricing, or anything else, our team is ready to answer all your questions.
              </p>
              <p className="text-gray-300 mb-4 leading-relaxed">
                <strong>Address:</strong> 123 Main Street, City, Country
              </p>
              <p className="text-gray-300 mb-4 leading-relaxed">
                <strong>Email:</strong> info@example.com
              </p>
              <p className="text-gray-300 mb-4 leading-relaxed">
                <strong>Phone:</strong> +123 456 7890
              </p>
              <div className="mt-8">
                <h4 className="text-xl font-bold mb-2">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-white">
                    <span className="sr-only">Facebook</span>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22 12C22 5.4 17.6 0 12 0S2 5.4 2 12c0 5.6 4.4 10.2 10 10.9V14.7H8.1V12h3.9V9.3c0-3.8 2.3-5.9 5.7-5.9 1.6 0 2.9.1 3.3.2v3.8H17c-1.6 0-2 1-2 2.1V12h4.3l-.7 2.7h-3.6V22.9c5.6-.7 10-5.3 10-10.9z" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white">
                    <span className="sr-only">Twitter</span>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.35 4.35 0 0 0 1.92-2.4 8.73 8.73 0 0 1-2.76 1.05 4.34 4.34 0 0 0-7.41 3.96A12.29 12.29 0 0 1 1.64 4.15a4.3 4.3 0 0 0-.59 2.18 4.34 4.34 0 0 0 1.93 3.6 4.35 4.35 0 0 1-1.96-.54v.05a4.34 4.34 0 0 0 3.47 4.25 4.34 4.34 0 0 1-1.95.07 4.34 4.34 0 0 0 4.05 3 8.72 8.72 0 0 1-5.4 1.86 8.61 8.61 0 0 1-1.04-.06 12.28 12.28 0 0 0 6.66 1.95c7.99 0 12.36-6.62 12.36-12.36 0-.19 0-.38-.01-.57a8.83 8.83 0 0 0 2.17-2.26z" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.8 0-5 2.2-5 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5v-14c0-2.8-2.2-5-5-5zM8.2 20h-3.3v-9h3.3v9zM6.5 9.4c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM20 20h-3.3v-4.9c0-1.2 0-2.8-1.7-2.8s-2 1.3-2 2.7v5h-3.3v-9h3.1v1.2h.1c.4-.8 1.4-1.7 2.9-1.7 3.1 0 3.6 2 3.6 4.5v5z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
