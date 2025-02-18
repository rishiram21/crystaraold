import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function About() {
  useEffect(() => {
    // Scroll the window to the top (0, 0) when the component mounts
    window.scrollTo(0, 0);
  }, []); // Empty dependency array to run on component mount

  return (
    <div className="max-w-4xl mx-auto m-5">
      <h1 className="text-4xl font-bold mb-6 text-purple-700">About Crystara Sugar</h1>

      {/* Main Content */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <p className="text-lg text-gray-600 mb-4">
          Crystara Sugar Pvt Ltd is a leading manufacturer of high-quality sugar products.
          With years of experience in the industry, we maintain the highest standards of
          production and customer satisfaction.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          <div className="text-center p-4">
            <div className="text-3xl font-bold text-purple-700 mb-2">20+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
          <div className="text-center p-4">
            <div className="text-3xl font-bold text-purple-700 mb-2">1000+</div>
            <div className="text-gray-600">Happy Clients</div>
          </div>
          <div className="text-center p-4">
            <div className="text-3xl font-bold text-purple-700 mb-2">50+</div>
            <div className="text-gray-600">Products</div>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <div id="overview" className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-2xl font-semibold text-purple-700 mb-4">Overview</h2>
        <p className="text-lg text-gray-600">
          Crystara Sugar Pvt Ltd has been a trusted name in the sugar manufacturing industry. 
          Our commitment to excellence in production and the development of new products has made us a preferred choice for customers worldwide.
        </p>
      </div>

      {/* Vision & Mission Section */}
      <div id="vision-mission" className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-2xl font-semibold text-purple-700 mb-4">Vision & Mission</h2>
        <p className="text-lg text-gray-600 mb-4">
          Our vision is to be the leading supplier of premium quality sugar products globally, contributing to the welfare of our communities.
        </p>
        <p className="text-lg text-gray-600">
          Our mission is to maintain the highest quality standards in our production processes while adhering to sustainable practices, providing value to both our customers and the environment.
        </p>
      </div>

      {/* Core Commitment Section */}
      <div id="core-commitment" className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-2xl font-semibold text-purple-700 mb-4">Core Commitment</h2>
        <p className="text-lg text-gray-600">
          At Crystara Sugar, our core commitment lies in delivering products that meet the highest standards of quality. 
          We are dedicated to sustainability, customer satisfaction, and continuous innovation in the sugar industry.
        </p>
      </div>
    </div>
  );
}

export default About;
