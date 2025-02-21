import { useEffect } from "react";
import { motion } from "framer-motion";

function Offering() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Animation for fade-in effect
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  // Product Listings (Added 3 More)
  const products = [
    {
      name: "White Sugar",
      image: "/white-sugar.jpg",
      description: "MEIR Commodities offers multiple types of sugar, each serving distinct uses in both industrial and household applications."
    },
    {
      name: "Brown Sugar",
      image: "/brown-sugar.jpg",
      description: "Khandsari is a type of unrefined raw sugar that retains more natural minerals and molasses than refined sugar."
    },
    {
      name: "Jaggery",
      image: "/jaggery.jpg",
      description: "Jaggery is a traditional, non-centrifugal cane sugar consumed in Asia and Africa, known for its rich taste and health benefits."
    },
    {
      name: "s30 Sugar",
      image: "/s30-sugar.jpg",
      description: "Muscovado is an unrefined dark brown sugar with a strong molasses flavor, perfect for baking and sweetening drinks."
    },
    {
      name: "Raw Sugar",
      image: "/raw-sugar.jpg",
      description: "Raw sugar is minimally processed and retains more natural nutrients than refined sugar, giving it a slightly golden hue."
    },
    {
      name: "m30 Sugar",
      image: "/m30-sugar.jpg",
      description: "Demerara sugar has large golden crystals and a crunchy texture, commonly used in coffee and desserts."
    }
  ];

  return (
    <div className="bg-purple min-h-screen py-12">
      <div className="container mx-auto px-6 md:px-20 py-8">
        
        {/* Hero Section */}
        <motion.div
          className="relative w-full h-56 flex items-center rounded-lg shadow-md mb-8 bg-cover bg-center"
          style={{ backgroundImage: "url('/offeringimg.jpg')" }}
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
          <div className="relative w-full flex flex-col items-center p-8 text-center">
            <h1 className="text-3xl md:text-6xl font-bold text-white">Our Offerings</h1>
          </div>
        </motion.div>

        {/* Products Section in Grid Layout with Hover Effect */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {products.map((product, index) => (
            <motion.div
              key={index}
              className="relative bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer group"
              whileHover={{ scale: 1.05 }}
            >
              {/* Product Image */}
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-64 object-cover transition-all duration-500 group-hover:opacity-50"
              />

              {/* Product Name */}
              <h3 className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-white bg-black bg-opacity-30 group-hover:bg-opacity-50 transition-all duration-500">
                {product.name}
              </h3>

              {/* Hidden Description (Shows on Hover) */}
              <div className="absolute inset-0 flex items-center justify-center text-center p-4 text-white bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-sm">{product.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </div>
  );
}

export default Offering;
