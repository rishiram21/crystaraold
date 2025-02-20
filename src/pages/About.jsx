import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function AboutUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Function to animate numbers smoothly
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
  const experience = useCounter(20, 2000);
  const clients = useCounter(1000, 2000);
  const products = useCounter(50, 2000);

  // Animation Variants with Smoother Motion
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.5, ease: "easeInOut" } },
  };

  const fadeInText = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.2, ease: "easeInOut" } },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.5, ease: "easeInOut" } },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.5, ease: "easeInOut" } },
  };

  return (
    <div className="bg-purple min-h-screen py-12">
      <div className="container mx-auto px-20 py-8">
        
        {/* Hero Section */}
        <motion.div
          className="relative w-full h-56 flex items-center rounded-lg shadow-md mb-5 bg-cover bg-center"
          style={{ backgroundImage: "url('/aboutimg.jpg')" }}
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
          <div className="relative w-full flex flex-col md:flex-row items-center p-8">
            <h1 className="text-6xl font-bold text-white">About Us</h1>
          </div>
        </motion.div>

        {/* Statistics Section */}
        <motion.div className="grid md:grid-cols-3 gap-6 mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <motion.div className="bg-white p-6 rounded-lg text-center">
            <motion.div className="text-4xl font-bold text-purple-700" variants={fadeInUp}>{experience}+</motion.div>
            <p className="text-gray-600">Years of Experience</p>
          </motion.div>
          <motion.div className="bg-white p-6 rounded-lg text-center">
            <motion.div className="text-4xl font-bold text-purple-700" variants={fadeInUp}>{clients}+</motion.div>
            <p className="text-gray-600">Happy Clients</p>
          </motion.div>
          <motion.div className="bg-white p-6 rounded-lg text-center">
            <motion.div className="text-4xl font-bold text-purple-700" variants={fadeInUp}>{products}+</motion.div>
            <p className="text-gray-600">Product Variants</p>
          </motion.div>
        </motion.div>

        {/* Who We Are */}
        <motion.div className="grid md:grid-cols-2 gap-8 items-center bg-white p-6 "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInLeft}
        >
          <motion.div variants={fadeInText}>
            <h2 className="text-2xl font-semibold text-purple-700">Who We Are</h2>
            <p className="text-gray-600">Crystara Sugar Pvt Ltd is a leading manufacturer in the sugar industry.</p>
          </motion.div>
          <motion.div className="flex justify-center" variants={fadeInRight}>
            <img src="/aboutimg1.jpg" alt="Company Overview" className="rounded-lg shadow-lg w-3/4" />
          </motion.div>
        </motion.div>

        {/* Our Journey */}
        <motion.div className="grid md:grid-cols-2 gap-8 items-center bg-white p-6 "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInRight}
        >
          <motion.div className="flex justify-center" variants={fadeInLeft}>
            <img src="/aboutimg2.jpg" alt="Our Journey" className="rounded-lg shadow-lg w-3/4" />
          </motion.div>
          <motion.div variants={fadeInText}>
            <h2 className="text-2xl font-semibold text-purple-700 mb-4">Our Journey</h2>
            <p className="text-gray-600">Established over 20 years ago, Crystara Sugar has grown into a global supplier.</p>
          </motion.div>
        </motion.div>

        {/* Our Values */}
        <motion.div className="grid md:grid-cols-2 gap-8 items-center bg-white p-6 "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInLeft}
        >
          <motion.div variants={fadeInText}>
            <h2 className="text-2xl font-semibold text-purple-700 mb-4">Our Core Values</h2>
            <ul className="list-disc pl-6 text-gray-600">
              <li><strong>Quality:</strong> Premium sugar products.</li>
              <li><strong>Innovation:</strong> Industry-leading solutions.</li>
              <li><strong>Sustainability:</strong> Eco-friendly processes.</li>
            </ul>
          </motion.div>
          <motion.div className="flex justify-center" variants={fadeInRight}>
            <img src="/aboutimg3.jpg" alt="Our Values" className="rounded-lg shadow-lg w-3/4" />
          </motion.div>
        </motion.div>

        {/* Our Mission & Vision */}
        <motion.div className="grid md:grid-cols-2 gap-8 items-center bg-white p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInRight}
        >
          <motion.div className="flex justify-center" variants={fadeInLeft}>
            <img src="/aboutimg4.jpg" alt="Our Mission & Vision" className="rounded-lg shadow-lg w-3/4" />
          </motion.div>
          <motion.div variants={fadeInText}>
            <h2 className="text-2xl font-semibold text-purple-700 mb-4">Our Mission & Vision</h2>
            <p className="text-gray-600">Our mission is to provide high-quality sugar products while maintaining eco-friendly production processes.</p>
          </motion.div>
        </motion.div>

      </div>
    </div>
  );
}

export default AboutUs;
