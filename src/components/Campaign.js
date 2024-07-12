import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CampaignForm = () => {
  const [formData, setFormData] = useState({
    projectName: '',
    projectType: '',
    projectDescription: '',
    startDate: '',
    endDate: '',
    goalMoney: 0,
    projectVideoUrl: '',
    email: '' // New field for email
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    navigate('/nextcamp', { state: { formData } });
    console.log('Form Data Submitted', formData);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6">Start A Project</h2>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="projectName">Project Name</label>
          <input
            type="text"
            id="projectName"
            name="projectName"
            value={formData.projectName}
            onChange={handleChange}
            className="w-full p-2 border-b border-gray-300 focus:outline-none focus:border-teal-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="projectType">Project Type</label>
          <input
            type="text"
            id="projectType"
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            className="w-full p-2 border-b border-gray-300 focus:outline-none focus:border-teal-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="projectDescription">Project Description</label>
          <textarea
            id="projectDescription"
            name="projectDescription"
            value={formData.projectDescription}
            onChange={handleChange}
            className="w-full p-2 border-b border-gray-300 focus:outline-none focus:border-teal-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="startDate">Start Date</label>
          <input
            type="date"
            id="startDate"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            className="w-full p-2 border-b border-gray-300 focus:outline-none focus:border-teal-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="endDate">End Date</label>
          <input
            type="date"
            id="endDate"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            className="w-full p-2 border-b border-gray-300 focus:outline-none focus:border-teal-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="goalMoney">Goal Money</label>
          <input
            type="number"
            id="goalMoney"
            name="goalMoney"
            value={formData.goalMoney}
            onChange={handleChange}
            className="w-full p-2 border-b border-gray-300 focus:outline-none focus:border-teal-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="projectVideoUrl">Project Video URL</label>
          <input
            type="url"
            id="projectVideoUrl"
            name="projectVideoUrl"
            value={formData.projectVideoUrl}
            onChange={handleChange}
            className="w-full p-2 border-b border-gray-300 focus:outline-none focus:border-teal-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border-b border-gray-300 focus:outline-none focus:border-teal-500"
          />
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default CampaignForm;
