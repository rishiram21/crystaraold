import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import Slider from "react-slick";  // ✅ Missing import for the testimonial slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);


function Home() {
  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const fadeInText = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };
  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const data = {
    labels: ["2018", "2019", "2020", "2021", "2022", "2023", "2024"],
    datasets: [
      {
        label: "Production Growth (tons)",
        data: [50, 75, 100, 150, 200, 250, 300], // Adjust numbers as needed
        borderColor: "#6b46c1",
        backgroundColor: "rgba(107, 70, 193, 0.2)",
        tension: 0.4,
        pointRadius: 5,
        pointBackgroundColor: "#6b46c1",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: { legend: { display: true }, tooltip: { enabled: true } },
    scales: {
      x: { title: { display: true, text: "Year" } },
      y: { title: { display: true, text: "Production (tons)" }, beginAtZero: true },
    },
  };


  const testimonials = [
    {
      text: "Crystara Sugar has consistently delivered top-quality products!",
      author: "Client A",
    },
    {
      text: "Their service is unmatched in the industry!",
      author: "Client B",
    },
    {
      text: "We have seen remarkable growth since working with Crystara Sugar.",
      author: "Client C",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <div className="w-full">
      {/* 🔹 Full-Width Image Slider */}
      <motion.div
        className="w-full h-screen relative"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          speed={1000}
          className="w-full h-full"
        >
          <SwiperSlide>
            <img src="/imgslide1.jpg" alt="Factory 1" className="w-full h-full object-cover" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/imgslide2.jpg" alt="Factory 2" className="w-full h-full object-cover" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/imgslide3.jpg" alt="Factory 3" className="w-full h-full object-cover" />
          </SwiperSlide>
        </Swiper>
      </motion.div>

      {/* 🔹 About Us Section */}
      <div className="w-full max-w-7xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-purple-700 mt-12 mb-6 text-center">About Us</h2>

        <motion.div
          className="w-full flex justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <iframe
            className="w-full max-w-3xl h-64 md:h-96 rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
            title="About Us Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </motion.div>

        <motion.div
          className="bg-white bg-opacity-90 p-6 rounded-lg shadow-md border-l-4 border-purple-700 mt-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInText}
        >
          <p className="text-gray-700 text-lg">
            Crystara Sugar Pvt Ltd is a leading manufacturer committed to delivering premium-quality sugar products.
          </p>
        </motion.div>
      </div>

      {/* 🔹 Overview Section */}
      <div className="w-full max-w-7xl mx-auto py-16 px-6 flex flex-col md:flex-row items-center justify-between">
        {/* Left Side - Overview Text */}
        <motion.div
          className="md:w-1/2 text-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInLeft}
        >
          <h2 className="text-3xl font-bold text-purple-700 mb-4">Company Overview</h2>
          <p className="text-gray-700 text-lg mb-6">
            MEIR, incorporated on May 11, 2018, is a prominent player in the global 
            agricultural commodities trading industry.
          </p>
          <button className="bg-purple-700 text-white px-4 py-2 rounded-full flex items-center">
            <span className="mr-2">Learn More</span>
            <span className="text-lg">→</span>
          </button>
        </motion.div>

        {/* Right Side - Stats Cards */}
        <motion.div
          className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInRight}
        >
          {/* Card 1 */}
          <div className="bg-green-100 p-6 rounded-lg shadow-lg text-center">
            <div className="w-16 h-16 mx-auto bg-green-700 text-white rounded-full flex items-center justify-center">
              🌍
            </div>
            <h3 className="text-lg font-bold mt-4">Operating in over <span className="text-black">15</span> Countries</h3>
          </div>

          {/* Card 2 */}
          <div className="bg-green-100 p-6 rounded-lg shadow-lg text-center">
            <div className="w-16 h-16 mx-auto bg-green-700 text-white rounded-full flex items-center justify-center">
              👥
            </div>
            <h3 className="text-lg font-bold mt-4">Over <span className="text-black">60*</span> full-time Employees</h3>
          </div>

          {/* Card 3 */}
          <div className="bg-green-100 p-6 rounded-lg shadow-lg text-center">
            <div className="w-16 h-16 mx-auto bg-green-700 text-white rounded-full flex items-center justify-center">
              🏢
            </div>
            <h3 className="text-lg font-bold mt-4"><span className="text-black">02</span> Offices Globally</h3>
          </div>
        </motion.div>
      </div>

      {/* 🔹 4 Cards Section - Updated to Match Reference Image */}
      <div className="w-full flex justify-center py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          {
            title: "Sustainability",
            description: "Our commitment to sustainable business practices.",
            buttonText: "Find out more →",
            image: "/sustainability.jpg",
          },
          {
            title: "Careers",
            description: "Join our team and grow with us.",
            buttonText: "Explore Careers →",
            image: "/careers.jpg",
          },
          {
            title: "Our Shareholders",
            description: "Building long-term value for our stakeholders.",
            buttonText: "Meet Shareholders →",
            image: "/shareholders.jpg",
          },
          {
            title: "Financial Info",
            description: "Access reports, earnings, and financial data.",
            buttonText: "View Reports →",
            image: "/financial-info.jpg",
          },
        ].map((card, index) => (
          <motion.div
            key={index}
            className="relative w-80 h-60 rounded-lg overflow-hidden shadow-lg"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            {/* Background Image */}
            <img
              src={card.image}
              alt={card.title}
              className="absolute w-full h-full object-cover"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            {/* Content */}
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-lg font-bold">{card.title}</h3>
              <p className="text-sm">{card.description}</p>

              {/* Button */}
              <button className="mt-2 text-sm bg-white bg-opacity-20 hover:bg-opacity-40 px-3 py-1 rounded-md">
                {card.buttonText}
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>

      {/* 🔹 Achievements Section (with time graph placeholder) */}
      <div className="w-full max-w-7xl mx-auto py-16 px-6">
      <h2 className="text-3xl font-bold text-purple-700 mt-12 mb-6 text-center">Achievements</h2>
      <motion.div
        className="bg-white p-6 rounded-lg shadow-md"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <p className="text-gray-700 text-lg text-center">
          Over the years, Crystara Sugar has achieved remarkable milestones in the industry.
        </p>
        {/* 📊 Time Graph */}
        <div className="w-full h-auto bg-gray-100 rounded-lg mt-4 p-4">
          <Line data={data} options={options} />
        </div>
      </motion.div>
    </div>

      {/* 🔹 Testimonials Section */}
      <div className="w-full max-w-7xl mx-auto py-16 px-6">
      <h2 className="text-3xl font-bold text-purple-700 mt-12 mb-6 text-center">Testimonials</h2>
      <motion.div
        className="bg-white p-6 rounded-lg shadow-md"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <p className="text-gray-700 text-lg text-center">What our clients say about us</p>
        <div className="mt-4 p-4 bg-gray-100 rounded-lg">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="text-center">
                <p className="text-gray-700 italic">"{testimonial.text}"</p>
                <p className="font-semibold mt-2">- {testimonial.author}</p>
              </div>
            ))}
          </Slider>
        </div>
      </motion.div>
    </div>

      {/* 🔹 News & Blog Section */}
      <div className="w-full max-w-7xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-purple-700 mt-12 mb-6 text-center">Latest News & Blog</h2>
        <motion.div
          className="bg-white p-6 rounded-lg shadow-md"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <p className="text-gray-700 text-lg text-center">Stay informed with our latest insights and industry updates.</p>
          {/* Replace with dynamic news/blog articles */}
          <div className="mt-4 p-4 bg-gray-100 rounded-lg">
            <p className="text-gray-700">"Crystara Sugar launches new eco-friendly packaging" - Read More</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Home;
