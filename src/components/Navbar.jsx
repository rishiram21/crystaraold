import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate(); // Use for navigation

  // Close dropdown when clicking outside (for mobile)
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (!e.target.closest(".dropdown-container")) {
        setDropdownOpen(null);
      }
    };
    if (mobileMenuOpen || dropdownOpen) {
      document.addEventListener("click", handleOutsideClick);
    } else {
      document.removeEventListener("click", handleOutsideClick);
    }
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [mobileMenuOpen, dropdownOpen]);

  return (
    <nav className="bg-white shadow-md font-sans fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-6 flex items-center justify-between h-16">
        
        {/* Left Side - Company Name */}
        <div className="px-10">
  <a 
    href="/" 
    className="text-xl font-bold text-purple-700 block"
    onClick={(e) => {
      e.preventDefault(); // Prevent default navigation
      window.location.href = "/"; // Force reload
    }}
  >
    Crystara
    <span className="text-gray-600 text-sm block">Sugar Pvt Ltd</span>
  </a>
</div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 text-2xl"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          {renderMenuLinks(dropdownOpen, setDropdownOpen, false, null, navigate)}
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white shadow-md"
          >
            <div className="flex flex-col items-center py-4 space-y-3">
              {renderMenuLinks(dropdownOpen, setDropdownOpen, true, setMobileMenuOpen, navigate)}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

const renderMenuLinks = (dropdownOpen, setDropdownOpen, isMobile = false, setMobileMenuOpen, navigate) => {
  const menus = [
    { name: "About Us", subMenu: ["Company overview", "Our Team"], path: "/about" },
    { name: "Offering", subMenu: ["Products", "Services"], path: "/offering" },
    { name: "Finance", subMenu: ["Financials", "Reports"], path: "/finance" },
  ];

  return (
    <>
      {menus.map((menu, idx) => (
        <div 
          key={idx} 
          className="relative w-full md:w-auto dropdown-container"
          onMouseEnter={() => !isMobile && setDropdownOpen(menu.name)}
          onMouseLeave={() => !isMobile && setDropdownOpen(null)}
        >
          <button
            onClick={(e) => {
              e.stopPropagation(); // Prevent closing immediately
              if (isMobile) {
                if (dropdownOpen === menu.name) {
                  navigate(menu.path); // Navigate on second tap
                  setDropdownOpen(null);
                  setMobileMenuOpen(false);
                } else {
                  setDropdownOpen(menu.name);
                }
              } else {
                navigate(menu.path);
              }
            }}
            className="w-full md:w-auto px-4 py-2 rounded-xl text-lg font-medium text-gray-700 hover:bg-purple-400 hover:text-black flex items-center justify-between md:inline-flex"
          >
            {menu.name} <FaChevronDown className="ml-1" />
          </button>

          <AnimatePresence>
            {dropdownOpen === menu.name && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className={`absolute ${isMobile ? "relative w-full" : "right-0"} bg-white shadow-lg rounded-xl mt-2 w-44 z-50`}
              >
                {menu.subMenu.map((item, i) => (
                  <Link 
                    key={i} 
                    to={`${menu.path}/${item.toLowerCase().replace(" ", "-")}`} 
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={() => {
                      setDropdownOpen(null);
                      if (isMobile) setMobileMenuOpen(false);
                    }}
                  >
                    {item}
                  </Link>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}

      {/* Media (No Dropdown) */}
      <Link
        to="/media"
        className="w-full md:w-auto bg-gray-200 px-4 py-2 rounded-xl shadow-md text-lg font-medium text-gray-700 hover:bg-purple-700 hover:text-white block md:inline-block text-center"
        onClick={() => isMobile && setMobileMenuOpen(false)}
      >
        Media
      </Link>
    </>
  );
};

export default Navbar;
