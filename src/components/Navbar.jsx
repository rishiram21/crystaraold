import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

function Navbar() {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isOfferingOpen, setIsOfferingsOpen] = useState(false);
  const [isFinanceOpen, setIsFinanceOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Mobile menu state
  const location = useLocation();

  // Function to handle scrolling to the top
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
    setIsMenuOpen(false); // Close mobile menu on click
  };

  return (
    <nav className="bg-white shadow-md font-cambria fixed left-0 right-0 z-10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div onClick={handleLinkClick} className="flex items-center cursor-pointer">
            <Link to="/" className="text-2xl font-bold text-purple-700">
              Crystara<span className="text-gray-600 text-lg"> Sugar Pvt Ltd</span>
            </Link>
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
            {/* <Link to="/" onClick={handleLinkClick} className={`text-gray-600 hover:text-purple-700 px-3 py-2 transition duration-300 ${location.pathname === '/' ? 'border-b-2 border-purple-700' : ''}`}>
              Home
            </Link> */}

            {/* About Dropdown */}
            <div className="relative" onMouseEnter={() => { setIsAboutOpen(true); setIsBusinessOpen(false); setIsCorporateOpen(false); }} onMouseLeave={() => setIsAboutOpen(false)}>
              <Link to="/about" onClick={handleLinkClick} className={`text-gray-600 hover:text-purple-700 px-3 py-2 transition duration-300 flex items-center ${location.pathname.startsWith('/about') ? 'border-b-2 border-purple-700' : ''}`}>
                About Us
              </Link>
              {isAboutOpen && (
                <div className="absolute left-0 w-48 bg-white shadow-lg rounded-md py-2 border border-gray-300">
                  <Link to="/about/overview" onClick={handleLinkClick} className="block px-4 py-2 text-gray-600 hover:bg-purple-100">Overview</Link>
                  <Link to="/about/vision-mission" onClick={handleLinkClick} className="block px-4 py-2 text-gray-600 hover:bg-purple-100">Vision & Mission</Link>
                  <Link to="/about/core-commitment" onClick={handleLinkClick} className="block px-4 py-2 text-gray-600 hover:bg-purple-100">Core Commitment</Link>
                </div>
              )}
            </div>

            {/* Offering Dropdown */}
            <div className="relative" onMouseEnter={() => { setIsOfferingOpen(true); setIsAboutOpen(false); setIsFinanceOpen(false); }} onMouseLeave={() => setIsOfferingOpen(false)}>
              <Link to="/offering" onClick={handleLinkClick} className={`text-gray-600 hover:text-purple-700 px-3 py-2 transition duration-300 flex items-center ${location.pathname.startsWith('/business') ? 'border-b-2 border-purple-700' : ''}`}>
                Offering 
              </Link>
              {isOfferingOpen && (
                <div className="absolute left-0 w-48 bg-white shadow-lg rounded-md py-2 border border-gray-300">
                  <Link to="/offering/international" onClick={handleLinkClick} className="block px-4 py-2 text-gray-600 hover:bg-purple-100">International</Link>
                  <Link to="/offering/distribution-supply" onClick={handleLinkClick} className="block px-4 py-2 text-gray-600 hover:bg-purple-100">Distribution & Supply</Link>
                </div>
              )}
            </div>

            {/* Finance Dropdown */}
            <div className="relative" onMouseEnter={() => { setIsFinanceOpen(true); setIsAboutOpen(false); setIsOfferingOpen(false); }} onMouseLeave={() => setIsFinanceOpen(false)}>
              <Link to="/finance" onClick={handleLinkClick} className={`text-gray-600 hover:text-purple-700 px-3 py-2 transition duration-300 flex items-center ${location.pathname.startsWith('/corporate') ? 'border-b-2 border-purple-700' : ''}`}>
                Finance
              </Link>
              {isFinanceOpen && (
                <div className="absolute left-0 w-48 bg-white shadow-lg rounded-md py-2 border border-gray-300">
                  <Link to="/finance/overview" onClick={handleLinkClick} className="block px-4 py-2 text-gray-600 hover:bg-purple-100">Overview</Link>
                  <Link to="/finance/auditcommittee" onClick={handleLinkClick} className="block px-4 py-2 text-gray-600 hover:bg-purple-100">Audit Committee</Link>
                </div>
              )}
            </div>

            <Link to="/media" onClick={handleLinkClick} className={`text-gray-600 hover:text-purple-700 px-3 py-2 transition duration-300 ${location.pathname === '/contact' ? 'border-b-2 border-purple-700' : ''}`}>
              Media
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white shadow-lg fixed inset-0 z-20 flex flex-col items-center py-4 space-y-4">
          <Link to="/" onClick={handleLinkClick} className="text-gray-600 hover:text-purple-700 px-3 py-2 transition duration-300">Home</Link>
          <Link to="/about" onClick={handleLinkClick} className="text-gray-600 hover:text-purple-700 px-3 py-2 transition duration-300">About Us</Link>
          <Link to="/offering" onClick={handleLinkClick} className="text-gray-600 hover:text-purple-700 px-3 py-2 transition duration-300">Offering</Link>
          <Link to="/finance" onClick={handleLinkClick} className="text-gray-600 hover:text-purple-700 px-3 py-2 transition duration-300">Finance</Link>
          <Link to="/media" onClick={handleLinkClick} className="text-gray-600 hover:text-purple-700 px-3 py-2 transition duration-300">Media</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
