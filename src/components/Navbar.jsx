import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Function to handle scrolling to the top and closing the menu
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
  };

  // Function to check if a link is active
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white shadow-md font-cambria fixed px-10 left-0 right-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div
            onClick={handleLinkClick}
            className="flex items-center cursor-pointer bg-gray-100 p-4 rounded-2xl shadow-md inline-block"
          >
            <Link to="/" className="text-2xl font-bold text-purple-700">
              Crystara
              <span className="text-gray-600 text-lg">
                <br />
                Sugar Pvt Ltd
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-purple-700"
            >
              {isMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-4">
            <Link
              to="/about"
              onClick={handleLinkClick}
              className={`block px-4 py-2 border rounded-md transition duration-300 ${
                isActive("/about") ? "bg-purple-700 text-white" : "text-gray-600 hover:bg-purple-700 hover:text-white"
              }`}
            >
              About Us
            </Link>
            <Link
              to="/offering"
              onClick={handleLinkClick}
              className={`block px-4 py-2 border rounded-md transition duration-300 ${
                isActive("/offering") ? "bg-purple-700 text-white" : "text-gray-600 hover:bg-purple-700 hover:text-white"
              }`}
            >
              Offering
            </Link>
            <Link
              to="/finance"
              onClick={handleLinkClick}
              className={`block px-4 py-2 border rounded-md transition duration-300 ${
                isActive("/finance") ? "bg-purple-700 text-white" : "text-gray-600 hover:bg-purple-700 hover:text-white"
              }`}
            >
              Finance
            </Link>
            <Link
              to="/media"
              onClick={handleLinkClick}
              className={`block px-4 py-2 border rounded-md transition duration-300 ${
                isActive("/media") ? "bg-purple-700 text-white" : "text-gray-600 hover:bg-purple-700 hover:text-white"
              }`}
            >
              Media
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu with Animation */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
            ></motion.div>

            {/* Slide-in Menu */}
            <motion.div
              className="fixed top-0 right-0 h-full w-2/3 bg-white shadow-lg z-50 flex flex-col items-center py-10 space-y-6"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <Link
                to="/about"
                onClick={handleLinkClick}
                className={`block px-6 py-3 text-lg font-semibold transition duration-300 ${
                  isActive("/about") ? "bg-purple-700 text-white rounded-md" : "text-gray-600 hover:bg-purple-700 hover:text-white rounded-md"
                }`}
              >
                About Us
              </Link>
              <Link
                to="/offering"
                onClick={handleLinkClick}
                className={`block px-6 py-3 text-lg font-semibold transition duration-300 ${
                  isActive("/offering") ? "bg-purple-700 text-white rounded-md" : "text-gray-600 hover:bg-purple-700 hover:text-white rounded-md"
                }`}
              >
                Offering
              </Link>
              <Link
                to="/finance"
                onClick={handleLinkClick}
                className={`block px-6 py-3 text-lg font-semibold transition duration-300 ${
                  isActive("/finance") ? "bg-purple-700 text-white rounded-md" : "text-gray-600 hover:bg-purple-700 hover:text-white rounded-md"
                }`}
              >
                Finance
              </Link>
              <Link
                to="/media"
                onClick={handleLinkClick}
                className={`block px-6 py-3 text-lg font-semibold transition duration-300 ${
                  isActive("/media") ? "bg-purple-700 text-white rounded-md" : "text-gray-600 hover:bg-purple-700 hover:text-white rounded-md"
                }`}
              >
                Media
              </Link>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
