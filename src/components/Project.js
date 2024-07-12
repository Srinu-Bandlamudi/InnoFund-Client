import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Project = () => {
  const [projects, setProjects] = useState([]);
  const email = 'example@email.com'; // Replace with actual email or get it from props/state

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(`http://localhost:3006/api/projects?email=${email}`);
        console.log("Response check in frontend", response);
        setProjects(response.data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, [email]); // Include email in dependency array if it changes

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-teal-600 text-white py-20 text-center">
        <h1 className="text-5xl font-extrabold">Our Projects</h1>
        <p className="mt-4 text-lg">Discover the innovative projects our team is working on</p>
      </header>

      <div className="container mx-auto p-4 mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map(project => (
            <div
              key={project._id}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
            >
              {project.imageUrl && (
                <img src={project.imageUrl} alt={project.projectName} className="w-full h-48 object-cover"/>
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
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mb-2">
                    Email: {project.email}
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
    </div>
  );
};

export default Project;
