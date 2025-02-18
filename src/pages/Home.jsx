import { Link } from 'react-router-dom';
import { useState } from 'react';

function Home() {
  // State to track hovered image
  const [hoveredImage, setHoveredImage] = useState(null);

  return (
    <div className="max-w-4xl mx-auto text-center m-20">
      <h1 className="text-4xl font-bold mb-6 text-purple-700">Welcome to Crystara Sugar</h1>
      <p className="text-lg text-gray-600 mb-6">
        Leading the way in sugar production with quality and innovation.
      </p>
      <img src="/sugarfactory.jpg" alt="Sugar Factory" className="w-full h-64 object-cover rounded-lg shadow-md mb-6" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div 
          className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-700" 
          onMouseEnter={() => setHoveredImage('quality')} 
          onMouseLeave={() => setHoveredImage(null)}
        >
          <img 
            src="/qualitysugar.jpg" 
            alt="Quality Sugar" 
            className="w-full h-40 object-cover rounded-md mb-4"
          />
          <h2 className="text-xl font-bold mb-4 text-purple-700">Quality Products</h2>
          <p className="text-gray-600">We deliver the finest quality sugar products meeting international standards.</p>
          {hoveredImage === 'quality' && (
            <p className="text-gray-600 mt-2 text-sm">Premium sugar refined to perfection.</p>
          )}
        </div>
        
        <div 
          className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-700"
          onMouseEnter={() => setHoveredImage('sustainable')} 
          onMouseLeave={() => setHoveredImage(null)}
        >
          <img 
            src="/farming.jpg" 
            alt="Sustainable Farming" 
            className="w-full h-40 object-cover rounded-md mb-4"
          />
          <h2 className="text-xl font-bold mb-4 text-purple-700">Sustainable Practices</h2>
          <p className="text-gray-600">Committed to sustainable farming and production practices.</p>
          {hoveredImage === 'sustainable' && (
            <p className="text-gray-600 mt-2 text-sm">Promoting eco-friendly farming methods.</p>
          )}
        </div>
      </div>
      
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-purple-700 mb-4">Why Choose Us?</h2>
        <ul className="text-gray-600 space-y-2">
          <li className="flex items-center">
            ✅ Premium quality sugar refined with the latest technology.
          </li>
          <li className="flex items-center">
            ✅ Environment-friendly and sustainable production methods.
          </li>
          <li className="flex items-center">
            ✅ Trusted by thousands of customers worldwide.
          </li>
        </ul>
      </div>

      <div className="container mx-auto p-8">
        {/* Title & Description */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-purple-700 mb-4">What we do at Crystara</h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            At Crystara Sugar Pvt Ltd, we specialize in producing high-quality sugar products that meet the needs of consumers globally. 
            With a commitment to excellence, we source the finest sugarcane from trusted farmers, ensuring sustainability and ethical farming practices. 
            Our state-of-the-art processing facilities ensure that every grain of sugar is refined to perfection, maintaining the highest standards of purity and quality. 
            We are dedicated to providing both domestic and international markets with a steady supply of premium sugar while promoting environmental responsibility and social welfare within the communities we serve.
          </p>
        </div>

        {/* Image Row */}
        <div className="flex flex-wrap justify-center space-x-8 mb-12">
          <div className="flex flex-col items-center relative mb-6" onMouseEnter={() => setHoveredImage('marketing')} onMouseLeave={() => setHoveredImage(null)}>
            <img src="/marketing.jpg" alt="Marketing" className="w-24 h-24 mb-2" />
            <p className="text-gray-600">Marketing</p>
            {hoveredImage === 'marketing' && (
              <p className="text-gray-600 mt-2 text-sm">Expanding brand presence globally.</p>
            )}
          </div>

          <div className="flex flex-col items-center relative mb-6" onMouseEnter={() => setHoveredImage('logistics')} onMouseLeave={() => setHoveredImage(null)}>
            <img src="/logistics.jpg" alt="Logistics" className="w-24 h-24 mb-2" />
            <p className="text-gray-600">Logistics</p>
            {hoveredImage === 'logistics' && (
              <p className="text-gray-600 mt-2 text-sm">Streamlining sugar distribution worldwide.</p>
            )}
          </div>

          <div className="flex flex-col items-center relative mb-6" onMouseEnter={() => setHoveredImage('storage')} onMouseLeave={() => setHoveredImage(null)}>
            <img src="/storage.jpg" alt="Storage & Handling" className="w-24 h-24 mb-2" />
            <p className="text-gray-600">Storage</p>
            {hoveredImage === 'storage' && (
              <p className="text-gray-600 mt-2 text-sm">Ensuring safe and efficient storage.</p>
            )}
          </div>

          <div className="flex flex-col items-center relative mb-6" onMouseEnter={() => setHoveredImage('processing')} onMouseLeave={() => setHoveredImage(null)}>
            <img src="/processing.jpg" alt="Processing & Refining" className="w-24 h-24 mb-2" />
            <p className="text-gray-600">Processing</p>
            {hoveredImage === 'processing' && (
              <p className="text-gray-600 mt-2 text-sm">Advanced refining techniques for purity.</p>
            )}
          </div>

          <div className="flex flex-col items-center relative mb-6" onMouseEnter={() => setHoveredImage('port')} onMouseLeave={() => setHoveredImage(null)}>
            <img src="/port.jpg" alt="Port Terminals" className="w-24 h-24 mb-2" />
            <p className="text-gray-600">Port</p>
            {hoveredImage === 'port' && (
              <p className="text-gray-600 mt-2 text-sm">Efficient port operations for global reach.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
