import { Link } from 'react-router-dom';

function Finance() {
  // Function to handle scrolling to top before navigation
  const handleScrollToTop = () => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  return (
    <div className="max-w-4xl mx-auto text-center m-20">
      <h1 className="text-4xl font-bold mb-6 text-purple-700">Welcome to Crystara Sugar Pvt Ltd</h1>
      <p className="text-lg text-gray-600 mb-6">
        Crystara Sugar Pvt Ltd is a leading player in the global sugar industry, committed to providing premium quality sugar 
        while upholding the values of sustainability, transparency, and ethical business practices.
      </p>

      {/* Company Overview Section */}
      <div className="bg-white p-8 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-bold mb-4 text-purple-700">Company Overview</h2>
        <p className="text-gray-600 mb-4">
          Crystara Sugar Pvt Ltd was founded with the vision of becoming a global leader in the sugar industry. We pride ourselves 
          on producing high-quality, sustainable sugar products that meet the needs of consumers worldwide. Our state-of-the-art 
          manufacturing facilities and sustainable farming practices ensure that we continue to meet the growing demand for sugar 
          while maintaining our commitment to environmental responsibility.
        </p>
        <p className="text-gray-600">
          We have expanded our presence to multiple countries, establishing a strong global supply chain and fostering long-term 
          relationships with our partners, farmers, and customers.
        </p>
      </div>

      {/* Values Section */}
      <div className="bg-white p-8 rounded-lg shadow-md mb-8 text-start">
        <h2 className="text-2xl font-bold mb-4 text-purple-700 text-center">Our Core Values</h2>
        <ul className="text-gray-600 list-disc pl-6 space-y-2">
          <li><strong>Sustainability:</strong> We are committed to environmentally responsible practices and sustainable agriculture.</li>
          <li><strong>Innovation:</strong> Constantly improving our processes and products through research and innovation.</li>
          <li><strong>Integrity:</strong> We operate with transparency, honesty, and fairness in all our dealings.</li>
          <li><strong>Customer Focus:</strong> Our customers are at the heart of everything we do, and we strive to meet their needs.</li>
          <li><strong>Community:</strong> We support local communities and contribute to social and economic development.</li>
        </ul>
      </div>

      {/* Leadership Section */}
      <div className="bg-white p-8 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-bold mb-4 text-purple-700">Our Leadership</h2>
        <p className="text-gray-600 mb-4">
          At Crystara Sugar, we believe in strong leadership and a commitment to excellence. Our leadership team brings years of 
          experience in the sugar industry and has been instrumental in driving our growth and innovation.
        </p>
        <p className="text-gray-600 mb-4">
          Our leaders work tirelessly to ensure that our operations are efficient, sustainable, and in line with our core values. 
          Their vision and dedication guide us towards achieving our goals of being a market leader in the global sugar industry.
        </p>
      </div>

      {/* Mission & Vision Section */}
      <div className="bg-white p-8 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-bold mb-4 text-purple-700">Mission & Vision</h2>
        <div className="text-gray-600 mb-4">
          <h3 className="text-xl font-semibold text-purple-700">Mission</h3>
          <p>
            Our mission is to produce the highest quality sugar while ensuring sustainability and supporting the communities we 
            operate in. We aim to deliver products that exceed our customers' expectations, constantly innovating and improving 
            our processes.
          </p>
        </div>
        <div className="text-gray-600">
          <h3 className="text-xl font-semibold text-purple-700">Vision</h3>
          <p>
            To be the global leader in sugar production, setting the standard for quality, sustainability, and ethical practices 
            in the industry. We aspire to positively impact the lives of people worldwide through our products and business practices.
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <h2 className="text-2xl font-bold text-purple-700 mb-4">Join Us in Our Journey</h2>
        <p className="text-lg text-gray-600 mb-8">
          At Crystara Sugar, we are always looking to expand and innovate. If you’re interested in learning more about our 
          corporate efforts, values, or business opportunities, feel free to get in touch with us.
        </p>
        <Link to="/contact" onClick={handleScrollToTop} className="bg-purple-700 text-white px-6 py-3 rounded-lg hover:bg-purple-900">
          Contact Us
        </Link>
      </div>
    </div>
  );
}

export default Finance;
