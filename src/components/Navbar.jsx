import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Navbar() {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isBusinessOpen, setIsBusinessOpen] = useState(false);
  const [isCorporateOpen, setIsCorporateOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu
  const location = useLocation();
  const navigate = useNavigate(); // Initialize the navigate function

  // Function to handle link click and scroll to top
  const handleLinkClick = (path) => {
    navigate(path); // Navigate to the specified path
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  return (
    <nav className="bg-white shadow-md font-cambria fixed left-0 right-0 z-10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div onClick={() => handleLinkClick('/')} className="flex items-center cursor-pointer">
            <div className="text-2xl font-bold text-purple-700">
              Crystara
              <span className="text-gray-600 text-lg"> Sugar Pvt Ltd</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 hover:text-purple-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-4 relative">
            <Link
              to="/"
              onClick={() => handleLinkClick('/')} // Scroll to top on Home click
              className={`text-gray-600 hover:text-purple-700 px-3 py-2 transition duration-300 ${location.pathname === '/' ? 'border-b-2 border-purple-700' : ''}`}
            >
              Home
            </Link>

            {/* About, Business, and Corporate dropdowns */}
            <div className="relative" onMouseEnter={() => { setIsAboutOpen(true); setIsBusinessOpen(false); setIsCorporateOpen(false); }} onMouseLeave={() => setIsAboutOpen(false)}>
              <Link
                to="/about"
                onClick={() => handleLinkClick('/about')} // Scroll to top on About Us click
                className={`text-gray-600 hover:text-purple-700 px-3 py-2 transition duration-300 focus:outline-none flex items-center ${location.pathname.startsWith('/about') ? 'border-b-2 border-purple-700' : ''}`}
              >
                About Us <span className="ml-1">▼</span>
              </Link>
              {isAboutOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 border border-gray-300">
                  <Link to="/about/overview" className="block px-4 py-2 text-gray-600 hover:bg-purple-100">Overview</Link>
                  <Link to="/about/vision-mission" className="block px-4 py-2 text-gray-600 hover:bg-purple-100">Vision & Mission</Link>
                  <Link to="/about/core-commitment" className="block px-4 py-2 text-gray-600 hover:bg-purple-100">Core Commitment</Link>
                </div>
              )}
            </div>

            <div className="relative" onMouseEnter={() => { setIsBusinessOpen(true); setIsAboutOpen(false); setIsCorporateOpen(false); }} onMouseLeave={() => setIsBusinessOpen(false)}>
              <Link
                to="/business"
                onClick={() => handleLinkClick('/business')} // Scroll to top on Business click
                className={`text-gray-600 hover:text-purple-700 px-3 py-2 transition duration-300 focus:outline-none flex items-center ${location.pathname.startsWith('/business') ? 'border-b-2 border-purple-700' : ''}`}
              >
                Business <span className="ml-1">▼</span>
              </Link>
              {isBusinessOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 border border-gray-300">
                  <Link to="/business/international" className="block px-4 py-2 text-gray-600 hover:bg-purple-100">International</Link>
                  <Link to="/business/distribution-supply" className="block px-4 py-2 text-gray-600 hover:bg-purple-100">Distribution & Supply</Link>
                </div>
              )}
            </div>

            <div className="relative" onMouseEnter={() => { setIsCorporateOpen(true); setIsAboutOpen(false); setIsBusinessOpen(false); }} onMouseLeave={() => setIsCorporateOpen(false)}>
              <Link
                to="/corporate"
                onClick={() => handleLinkClick('/corporate')} // Scroll to top on Corporate Governance click
                className={`text-gray-600 hover:text-purple-700 px-3 py-2 transition duration-300 focus:outline-none flex items-center ${location.pathname.startsWith('/corporate') ? 'border-b-2 border-purple-700' : ''}`}
              >
                Corporate Governance <span className="ml-1">▼</span>
              </Link>

              {isCorporateOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 border border-gray-300">
                  <Link to="/cg/overview" className="block px-4 py-2 text-gray-600 hover:bg-purple-100">Overview</Link>
                  <Link to="/cg/auditcommittee" className="block px-4 py-2 text-gray-600 hover:bg-purple-100">Audit Committee</Link>
                  <Link to="/cg/corporatepolicy" className="block px-4 py-2 text-gray-600 hover:bg-purple-100">Corporate Policy</Link>
                  <Link to="/cg/insidetraining" className="block px-4 py-2 text-gray-600 hover:bg-purple-100">Inside Training</Link>
                </div>
              )}
            </div>

            <Link
              to="/contact"
              onClick={() => handleLinkClick('/contact')} // Scroll to top on Contact Us click
              className={`text-gray-600 hover:text-purple-700 px-3 py-2 transition duration-300 ${location.pathname === '/contact' ? 'border-b-2 border-purple-700' : ''}`}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white shadow-lg fixed inset-0 z-20 flex flex-col items-center py-4 space-y-4">
          <Link
            to="/"
            onClick={() => handleLinkClick('/')} // Scroll to top on Home click
            className={`text-gray-600 hover:text-purple-700 px-3 py-2 transition duration-300 ${location.pathname === '/' ? 'border-b-2 border-purple-700' : ''}`}
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={() => handleLinkClick('/about')} // Scroll to top on About Us click
            className={`text-gray-600 hover:text-purple-700 px-3 py-2 transition duration-300 ${location.pathname.startsWith('/about') ? 'border-b-2 border-purple-700' : ''}`}
          >
            About Us
          </Link>
          <Link
            to="/business"
            onClick={() => handleLinkClick('/business')} // Scroll to top on Business click
            className={`text-gray-600 hover:text-purple-700 px-3 py-2 transition duration-300 ${location.pathname.startsWith('/business') ? 'border-b-2 border-purple-700' : ''}`}
          >
            Business
          </Link>
          <Link
            to="/corporate"
            onClick={() => handleLinkClick('/corporate')} // Scroll to top on Corporate Governance click
            className={`text-gray-600 hover:text-purple-700 px-3 py-2 transition duration-300 ${location.pathname.startsWith('/corporate') ? 'border-b-2 border-purple-700' : ''}`}
          >
            Corporate Governance
          </Link>
          <Link
            to="/contact"
            onClick={() => handleLinkClick('/contact')} // Scroll to top on Contact Us click
            className={`text-gray-600 hover:text-purple-700 px-3 py-2 transition duration-300 ${location.pathname === '/contact' ? 'border-b-2 border-purple-700' : ''}`}
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
