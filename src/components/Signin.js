import React, { useState } from 'react';
import axios from 'axios';
import useAuthStore from './useStore';
import { useNavigate } from 'react-router-dom';
const LoginForm = () => {
  const navigate=useNavigate();
  const token = useAuthStore((state) => state.token);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [forgotPasswordEmail, setForgotPasswordEmail] = useState('');
  const setToken = useAuthStore((state) => state.setToken);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('form', formData);
    try {
      const response = await axios.post('http://localhost:3006/api/login', formData);
      console.log('API Response:', response.data.data);
      if (response.data.data) {
        setToken(response.data.data);
        navigate('/');
        console.log("token fetched or not",token);
        // Handle success (e.g., redirect to dashboard)
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle error (e.g., display error message)
    }
  };

  const handleForgotPasswordSubmit = async (e) => {
    e.preventDefault();
    console.log('Forgot Password Email:', forgotPasswordEmail);
    try {
      const response = await axios.post('http://localhost:3006/api/forgot-password', { email: forgotPasswordEmail });
      console.log('Forgot Password API Response:', response.data);
      // Handle success (e.g., show success message)
    } catch (error) {
      console.error('Error submitting forgot password form:', error);
      // Handle error (e.g., display error message)
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-md">
        <a href="/" className="block text-sm font-medium text-gray-600">
          ← BACK TO HOME
        </a>
        <h2 className="text-3xl font-bold text-gray-900">
          Login <span className="font-light">below</span>
        </h2>
        <p className="mt-2 text-sm text-gray-600">
          Don't have an account?{' '}
          <a href="/register" className="font-medium text-indigo-600 hover:underline">
            Register
          </a>
        </p>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 font-medium text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              LOGIN
            </button>
          </div>
        </form>
        <button
          onClick={() => setIsModalOpen(true)}
          className="block mt-2 text-sm font-medium text-indigo-600 hover:underline"
        >
          Forgot Password?
        </button>

        {/* Forgot Password Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
              >
                &times;
              </button>
              <h2 className="text-xl font-bold mb-4">Forgot Password</h2>
              <form onSubmit={handleForgotPasswordSubmit}>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    value={forgotPasswordEmail}
                    onChange={(e) => setForgotPasswordEmail(e.target.value)}
                    className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <div className="mt-4">
                  <button
                    type="submit"
                    className="w-full px-4 py-2 font-medium text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginForm;
