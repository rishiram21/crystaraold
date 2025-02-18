import { Link } from 'react-router-dom';

function Business() {
  // Function to handle scrolling to top before navigation
  const handleScrollToTop = () => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  return (
    <div className="max-w-4xl mx-auto text-center m-5">
      <h1 className="text-4xl font-bold mb-6 text-purple-700">Crystara Sugar Business</h1>
      <p className="text-lg text-gray-600 mb-6">
        Leading the sugar industry through innovation, sustainability, and global reach.
      </p>

      {/* Business Overview */}
      <div className="bg-white p-8 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-bold mb-4 text-purple-700">Our Business Overview</h2>
        <p className="text-gray-600">
          At Crystara Sugar, we specialize in both the production and global distribution of high-quality sugar products. 
          Our international presence and strong relationships with customers and suppliers enable us to provide sustainable solutions 
          and meet the growing demand for sugar across the globe. With an unwavering commitment to excellence and sustainable practices, 
          we operate across various sectors, from sugar refining to distribution and logistics.
        </p>
      </div>

      {/* Business Divisions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        
        {/* International Business */}
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-700">
          <h3 className="text-xl font-bold text-purple-700 mb-4">International Business</h3>
          <p className="text-gray-600 mb-4">
            Crystara Sugar has a strong presence in over 39 countries worldwide. Our international business division focuses on
            expanding our reach and ensuring that our high-quality sugar products are available to customers across the globe. 
            We work closely with farmers, suppliers, and distributors to ensure reliable and sustainable sourcing and delivery.
          </p>
          <Link to="/business/international" className="text-purple-700 hover:text-purple-900">Learn more about International Business →</Link>
        </div>

        {/* Distribution & Supply */}
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-700">
          <h3 className="text-xl font-bold text-purple-700 mb-4">Distribution & Supply</h3>
          <p className="text-gray-600 mb-4">
            Our distribution and supply chain network ensures that Crystara's products reach every corner of the world efficiently.
            We focus on providing timely delivery to both domestic and international markets while ensuring our environmental
            impact is minimized by employing sustainable logistics practices.
          </p>
          <Link to="/business/distribution-supply" className="text-purple-700 hover:text-purple-900">Learn more about Distribution & Supply →</Link>
        </div>
      </div>

      {/* Additional Divisions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        
        {/* Corporate Governance */}
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-700">
          <h3 className="text-xl font-bold text-purple-700 mb-4">Corporate Governance</h3>
          <p className="text-gray-600 mb-4">
            At Crystara, we uphold the highest standards of corporate governance. Our policies ensure transparency, accountability, and the responsible management of resources.
          </p>
          <Link to="/business/corporate-governance" className="text-purple-700 hover:text-purple-900">Learn more about Corporate Governance →</Link>
        </div>

        {/* Sustainability & Ethics */}
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-700">
          <h3 className="text-xl font-bold text-purple-700 mb-4">Sustainability & Ethics</h3>
          <p className="text-gray-600 mb-4">
            Sustainability is at the heart of Crystara’s operations. From ethical sourcing to minimizing environmental impact, we are committed to building a sustainable future.
          </p>
          <Link to="/business/sustainability" className="text-purple-700 hover:text-purple-900">Learn more about Sustainability & Ethics →</Link>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <h2 className="text-2xl font-bold text-purple-700 mb-4">Join Us in Our Global Journey</h2>
        <p className="text-lg text-gray-600 mb-8">
          At Crystara Sugar, we are passionate about driving positive change in the sugar industry. Connect with us to learn how we can work together in creating a sustainable and prosperous future.
        </p>
        <Link to="/contact" onClick={handleScrollToTop} className="bg-purple-700 text-white px-6 py-3 rounded-lg hover:bg-purple-900">Contact Us</Link>
      </div>
    </div>
  );
}

export default Business;
