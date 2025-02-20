import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Offering() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Function to animate numbers
  const useCounter = (end, duration) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let start = 0;
      const increment = Math.ceil(end / (duration / 50));

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          start = end;
          clearInterval(timer);
        }
        setCount(start);
      }, 50);

      return () => clearInterval(timer);
    }, [end, duration]);

    return count;
  };

  // Animated numbers
  const organicSugar = useCounter(100, 2000);
  const productVariants = useCounter(50, 5000);
  const customerSupport = useCounter(24, 5000);

  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const fadeInText = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="bg-purple min-h-screen py-12">
      <div className="container mx-auto px-20 py-8">
        
        {/* Hero Section with Background Image */}
        <motion.div
          className="relative w-full h-56 flex items-center rounded-lg shadow-md mb-5 bg-cover bg-center"
          style={{ backgroundImage: "url('/offeringimg.jpg')" }}
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
          <div className="relative w-full flex flex-col md:flex-row items-center p-8">
            <h1 className="text-6xl font-bold text-white">Our Offerings</h1>
          </div>
        </motion.div>

        {/* Statistics Section */}
        <motion.div className="grid md:grid-cols-3 gap-6 mb-12" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <motion.div className="text-3xl font-bold text-purple-700" variants={fadeInUp}>{organicSugar}%</motion.div>
            <p className="text-gray-600">Organic Sugar</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <motion.div className="text-3xl font-bold text-purple-700" variants={fadeInUp}>{productVariants}+</motion.div>
            <p className="text-gray-600">Product Variants</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <motion.div className="text-3xl font-bold text-purple-700" variants={fadeInUp}>{customerSupport}/7</motion.div>
            <p className="text-gray-600">Customer Support</p>
          </div>
        </motion.div>

        {/* Product Categories Section */}
        <motion.div className="bg-white p-6 rounded-lg shadow-md mb-8" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInText}>
          <h2 className="text-2xl font-semibold text-purple-700 mb-4">Our Product Categories</h2>
          <ul className="list-disc pl-6 text-gray-600">
            <li className="mb-2">Organic Sugar</li>
            <li className="mb-2">Refined White Sugar</li>
            <li className="mb-2">Brown Sugar</li>
            <li className="mb-2">Liquid Sugar & Syrups</li>
            <li className="mb-2">Sugarcane Derivatives</li>
          </ul>
        </motion.div>

        {/* Why Choose Us Section */}
        <motion.div className="bg-white p-6 rounded-lg shadow-md mb-8" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInText}>
          <h2 className="text-2xl font-semibold text-purple-700 mb-4">Why Choose Crystara Sugar?</h2>
          <p className="text-gray-600">
            We prioritize <strong>quality, sustainability, and innovation</strong> in our production processes. Our sugar products are trusted by top food industries and households alike.
          </p>
        </motion.div>

        {/* Sustainability Commitment Section */}
        <motion.div className="bg-white p-6 rounded-lg shadow-md mb-8" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInText}>
          <h2 className="text-2xl font-semibold text-purple-700 mb-4">Our Sustainability Commitment</h2>
          <p className="text-gray-600">
            We are committed to <strong>eco-friendly farming and production</strong> processes to minimize our carbon footprint and promote a healthier environment.
          </p>
        </motion.div>

      </div>
    </div>
  );
}

export default Offering;
