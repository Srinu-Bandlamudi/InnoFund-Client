// AboutUs.js


import React from 'react';
import storyImg from './achievement-aerial-agreement-arms.jpg';
import missionImg from '../business-communication-concept-illustration.jpg';
import teamImg from '../team-teamwork-together-strategy.jpg';

const AboutUs = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-1 sm:px-6 lg:px-8">
        <div className="shadow-md rounded-lg overflow-hidden mb-8">
          <div className="lg:flex">
            <div className="lg:w-1/2 bg-gray-800 text-white p-8">
              <h2 className="text-2xl font-bold mb-4">Our Story</h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero tortor, nec placerat ex vehicula sit amet.
              </p>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Fusce vitae risus ut felis placerat blandit nec ac lectus. Vestibulum sit amet quam ac ante accumsan dapibus.
              </p>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Donec ac est quis urna dignissim consectetur. Nullam accumsan elit sit amet ligula auctor condimentum.
              </p>
            </div>
            <div className="lg:w-1/2 h-64 lg:h-auto relative">
              <img
                className="absolute inset-0 w-full h-full object-cover"
                src={storyImg}
                alt="Our Story"
              />
            </div>
          </div>
        </div>

        <div className="shadow-md rounded-lg overflow-hidden mb-8">
          <div className="lg:flex">
            <div className="lg:w-1/2 h-64 lg:h-auto relative order-2 lg:order-1">
              <img
                className="absolute inset-0 w-full h-full object-cover"
                src={missionImg}
                alt="Our Mission"
              />
            </div>
            <div className="lg:w-1/2 bg-gray-800 text-white p-8 order-1 lg:order-2">
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Our mission is to create value for our customers through innovative solutions and unparalleled service.
              </p>
              <p className="text-gray-300 mb-4 leading-relaxed">
                We strive to lead with integrity, respect, and commitment to excellence in all that we do.
              </p>
              <p className="text-gray-300 mb-4 leading-relaxed">
                By fostering a culture of continuous improvement, we aim to make a positive impact on the communities we serve.
              </p>
            </div>
          </div>
        </div>

        <div className="shadow-md rounded-lg overflow-hidden">
          <div className="lg:flex">
            <div className="lg:w-1/2 bg-gray-800 text-white p-8">
              <h2 className="text-2xl font-bold mb-4">Our Team</h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Our team consists of dedicated professionals who are passionate about delivering exceptional results.
              </p>
              <p className="text-gray-300 mb-4 leading-relaxed">
                With diverse backgrounds and expertise, we collaborate to achieve common goals and drive innovation.
              </p>
              <p className="text-gray-300 mb-4 leading-relaxed">
                We value teamwork, respect, and continuous learning to foster a positive and dynamic work environment.
              </p>
            </div>
            <div className="lg:w-1/2 h-64 lg:h-auto relative">
              <img
                className="absolute inset-0 w-full h-full object-cover"
                src={teamImg}
                alt="Our Team"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
