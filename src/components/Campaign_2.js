import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Campaign_2 = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { formData } = location.state || {};
  const [pledgeMoney, setPledgeMoney] = useState('');
  const [scheme, setScheme] = useState(''); // Store single selected value, not array
  const [teamMember, setTeamMember] = useState('');
  const [teamMembers, setTeamMembers] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const combinedData = {
      ...formData,
      pledgeMoney,
      scheme, // Store single selected value directly
      teamMembers
    };
    console.log('Combined Data:', combinedData);

    try {
      const response = await fetch('http://localhost:3006/api/projects', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(combinedData)
      });
      
      console.log("Response");

      if (response.ok) {
        console.log('Campaign submitted successfully');
        navigate('/'); // Redirect to a success page
      } else {
        console.error('Failed to submit campaign');
      }
    } catch (error) {
      console.error('Error submitting campaign:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-full max-w-4xl mx-auto mt-10">
      <div className="mb-10">
        <h2 className="text-3xl font-bold mb-6">Select Your Profit Options</h2>

        <div className="flex flex-col md:flex-row w-full justify-between items-center mb-4">
          <div className="flex flex-col mb-4 md:mb-0">
            <label className="text-teal-700 mb-2" htmlFor="pledgeMoney">Minimum Pledge Money</label>
            <input
              type="number"
              id="pledgeMoney"
              value={pledgeMoney}
              onChange={(e) => setPledgeMoney(e.target.value)}
              className="p-2 border border-gray-300 rounded focus:outline-none focus:border-teal-500"
              placeholder="Amount"
            />
          </div>

          <div className="flex flex-col mb-4 md:mb-0">
            <label className="text-teal-700 mb-2" htmlFor="scheme">Select Project Scheme</label>
            <select
              id="scheme"
              value={scheme}
              onChange={(e) => setScheme(e.target.value)}
              className="p-2 border border-gray-300 rounded focus:outline-none focus:border-teal-500"
            >
              <option value="">---Select---</option>
              <option value="GOLD">GOLD</option>
              <option value="PLATINUM">PLATINUM</option>
              <option value="ELITE">ELITE</option>
              <option value="DIAMOND">DIAMOND</option>
              <option value="SILVER">SILVER</option>
            </select>
          </div>
        </div>
      </div>

      <div className="mb-10">
        <h2 className="text-3xl font-bold mb-6">Add Team Members</h2>

        <div className="flex w-full justify-between items-center mb-4">
          <input
            type="text"
            value={teamMember}
            onChange={(e) => setTeamMember(e.target.value)}
            className="p-2 border border-gray-300 rounded focus:outline-none focus:border-teal-500 w-3/4"
            placeholder="Full Name"
          />

          <button
            type="button"
            onClick={() => {
              if (teamMember) {
                setTeamMembers([...teamMembers, teamMember]);
                setTeamMember('');
              }
            }}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 ml-4"
          >
            Add Member
          </button>
        </div>
      </div>

      <button type="submit" className="bg-blue-500 text-white py-2 px-8 rounded hover:bg-blue-700 mt-4">
        Create
      </button>
    </form>
  );
};

export default Campaign_2;
