import React, { useEffect, useState } from 'react';
import {jwtDecode} from 'jwt-decode';
import axios from 'axios';
import useAuthStore from './useStore';

const MyProfile = () => {
  const token = useAuthStore((state) => state.token);
  const clearToken = useAuthStore((state) => state.clearToken);
  const [email, setEmail] = useState('');
  const [userProjects, setUserProjects] = useState([]);

  useEffect(() => {
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setEmail(decoded.email);
       console.log("decode email",decoded.email)
        // Fetch user-related projects
        const fetchUserProjects = async () => {
          try {
            const response = await axios.get(`http://localhost:3006/api/projects/by/${decoded.email}`);

            setUserProjects(response.data);
          } catch (error) {
            console.error('Error fetching user projects:', error);
          }
        };

        fetchUserProjects();
      } catch (error) {
        console.error('Invalid token', error);
      }
    } else {
      // Handle the case where there is no token, e.g., redirect to login page
      console.log('No token found, redirecting to login...');
      // Example redirect:
      // window.location.href = '/login';
    }
  }, [token]);

  const handleLogout = () => {
    clearToken();
    // Example redirect:
    // window.location.href = '/login';
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="p-8 bg-white shadow-md rounded-lg w-full max-w-4xl">
        <h1 className="text-2xl font-bold mb-4">My Profile</h1>
        {token ? (
          <div>
            <p>Welcome! Your email is: {email}</p>
            <button
              onClick={handleLogout}
              className="mt-4 px-4 py-2 bg-red-600 text-white rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              Logout
            </button>
            <h2 className="text-xl font-bold mt-8">My Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-4">
              {userProjects.map(project => (
                <div
                  key={project._id}
                  className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
                >
                  {project.imageUrl && (
                    <img src={project.imageUrl} alt={project.projectName} className="w-full h-48 object-cover" />
                  )}
                  <div className="p-6">
                    <h2 className="text-2xl font-bold mb-3 text-gray-800">{project.projectName}</h2>
                    <div className="flex flex-wrap mb-3">
                      <span className="inline-block bg-teal-100 text-teal-800 text-xs px-2 py-1 rounded-full mr-2 mb-2">
                        Type: {project.projectType}
                      </span>
                      <span className="inline-block bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full mb-2">
                        Scheme: {project.scheme}
                      </span>
                    </div>
                    <p className="text-gray-700 mb-2">
                      <strong>Description:</strong> {project.projectDescription}
                    </p>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-gray-700">
                          <strong>Start Date:</strong>
                        </p>
                        <p className="text-gray-600">
                          {new Date(project.startDate).toLocaleDateString()}
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-700">
                          <strong>End Date:</strong>
                        </p>
                        <p className="text-gray-600">
                          {new Date(project.endDate).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-gray-700">
                          <strong>Goal Money:</strong>
                        </p>
                        <p className="text-green-600">
                          ${project.goalMoney.toLocaleString()}
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-700">
                          <strong>Pledge Money:</strong>
                        </p>
                        <p className="text-blue-600">
                          ${project.pledgeMoney.toLocaleString()}
                        </p>
                      </div>
                    </div>
                    <div className="mb-4">
                      <h3 className="text-gray-700 font-bold mb-2">Team Members:</h3>
                      <ul className="list-disc list-inside text-gray-600">
                        {project.teamMembers.map((member, index) => (
                          <li key={index}>{member}</li>
                        ))}
                      </ul>
                    </div>
                    <a
                      href={project.projectVideoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal-600 hover:underline font-semibold"
                    >
                      Watch Project Video
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <p>You are not logged in.</p>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
