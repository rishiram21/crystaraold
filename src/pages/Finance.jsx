import { useEffect } from "react";
import { motion } from "framer-motion";

function Finance() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div className="bg-purple min-h-screen py-12">
      <div className="container mx-auto px-20 py-8">
        
        {/* Hero Section with Background Image */}
        <motion.div
          className="relative w-full h-56 flex items-center rounded-lg shadow-md mb-5 bg-cover bg-center"
          style={{ backgroundImage: "url('/financeimg.jpg')" }}
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
          <div className="relative w-full flex flex-col md:flex-row items-center p-8 text-center">
            <h1 className="text-4xl font-bold text-white text">Finance</h1>
          </div>
        </motion.div>

        {/* 🔹 Navigation Tabs */}
        <div className="flex flex-wrap gap-3 md:gap-4 justify-center mb-6">
          {["Corporate Governance", "Policies", "Annual Report", "Offer Documents", "Stock Exchange Disclosures"].map((tab, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-md shadow-md text-sm md:text-base 
                ${index === 0 ? "bg-gradient-to-r from-teal-400 to-blue-700 text-white" : "bg-white border"}`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* 🔹 Downloadable PDF Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Board of Directors", file: "board.pdf" },
            { title: "Key Managerial Personnel", file: "key_personnel.pdf" },
            { title: "Committee Board", file: "committee_board.pdf" },
            { title: "Financial Statements", file: "financial_statements.pdf" },
            { title: "Annual Reports", file: "annual_reports.pdf" },
            { title: "Stockholder Information", file: "stockholder_info.pdf" }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md text-center border-l-4 border-blue-700"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
              <a
                href={`/${item.file}`} download
                className="mt-4 text-blue-700 font-semibold text-sm hover:underline flex justify-center items-center"
              >
                DOWNLOAD <span className="ml-1 text-xl">⬇</span>
              </a>
              <div className="flex justify-center mt-3">
                <img src="/pdf_icon.png" alt="PDF Icon" className="w-8 h-8" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Finance;
