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

  //Overview
  const sliderSettings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  // Cards Data
  const stats = [
    { icon: "🌍", label: "Operating Since", value: "2016" },
    { icon: "👥", label: "Over", value: "50 Employees" },
    { icon: "🏢", label: "Offices Globally", value: "02" },
    { icon: "📦", label: "Products Available", value: "100+" },
    { icon: "💼", label: "Corporate Clients", value: "500+" },
    { icon: "🚀", label: "Annual Growth Rate", value: "15%" },
  ];

  //Graph
  const data = {
    labels: ["2023", "2019", "2020", "2021", "2022", "2023", "2024"],
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


  //Testimonials
  const testimonials = [
    {
      text: "Crystara Sugar's commitment to quality and innovation has transformed our supply chain. Their premium-grade sugar has set new standards in the industry.",
      author: "Rajesh Sharma",
      image: "/person1.jpg", 
    },
    {
      text: "The service and efficiency at Crystara Sugar are unparalleled. Our production process has improved significantly due to their timely deliveries.",
      author: "Meera Patel",
      image: "/person2.jpg",
    },
    {
      text: "Crystara's focus on sustainability and customer satisfaction makes them the best choice for businesses like ours. Highly recommended!",
      author: "Amit Verma",
      image: "/person3.jpg",
    },
  ];
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

  //News
  const newsArticles = [
    {
      date: "22/02/2025",
      title: "Notice of 2024 half-year financial results",
      link: "#",
    },
    {
      date: "01/01/2025",
      title: "Bunge and Viterra statement on Canadian Competition Bureau report",
      link: "#",
    },
    {
      date: "11/08/2024",
      title: "Notice of 2023 full-year financial results",
      link: "#",
    },
    {
      date: "24/04/2024",
      title: "Notice of 2023 half-year financial results",
      link: "#",
    },
    {
      date: "14/08/2023",
      title: "Viterra receives first public environmental, social, and governance rating",
      link: "#",
    },
    {
      date: "20/02/2023",
      title: "Bunge and Viterra agree to create a premier diversified agribusiness company",
      link: "#",
    },
  ];
  
  const settings1 = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
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

      <div className="w-full h-screen max-w-7xl mx-auto py-16">
      {/* Outer Rounded Box */}
      <div className="bg-gray-100 p-8 rounded-2xl shadow-lg relative">
        <h2 className="text-3xl font-bold text-purple-700 mt-12 mb-6 text-center">About Us</h2>

        <motion.div
          className="w-full flex flex-col-reverse md:flex-row items-center md:items-start gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Video Section - 60% */}
          <motion.div className="w-full md:w-3/5" variants={fadeInUp}>
          <video
            className="w-full h-64 md:h-96"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="aboutvideo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          </motion.div>

          {/* Content Section - 40% */}
          <motion.div
            className="w-full md:w-2/5 bg-white bg-opacity-90 p-6 rounded-lg shadow-md border-l-4 border-purple-700"
            variants={fadeInText}
          >
            <h3 className="text-2xl font-semibold text-purple-700 mb-4">Who We Are</h3>
            <p className="text-gray-700 text-lg mb-4">
              Crystara Sugar Pvt Ltd is a leading manufacturer committed to delivering 
              premium-quality sugar products through sustainable and innovative production methods.
            </p>

            {/* Key Highlights */}
            <div className="mt-4">
              <h4 className="text-xl font-semibold text-purple-600 mb-2">Our Vision</h4>
              <p className="text-gray-700 text-sm mb-4">
                To be a global leader in sugar manufacturing, known for sustainability, quality, and innovation.
              </p>

              <h4 className="text-xl font-semibold text-purple-600 mb-2">Our Mission</h4>
              <p className="text-gray-700 text-sm mb-4">
                To provide high-quality sugar products while maintaining eco-friendly production processes.
              </p>

              
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>




      {/* 🔹 Overview Section */}
      <div className="w-full mt-14 max-w-7xl mx-auto py-16">
      {/* Outer Rounded Box */}
      <div className="bg-gray-100 p-8 rounded-2xl shadow-lg">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left Side - Overview Text */}
          {/* <motion.div
            className="md:w-1/2 text-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInLeft}
          >
            <h2 className="text-3xl font-bold text-purple-700 mb-4">Company Overview</h2>
            <p className="text-gray-700 text-lg px-2 mb-6">
              Welcome to Crystara Sugar Private Limited - Sharing Sweetness to the World. 
              We humans have a special bond with sweetness.
            </p>
            <button className="bg-purple-700 text-white px-4 py-2 rounded-full flex items-center">
              <span className="mr-2">Learn More</span>
              <span className="text-lg">→</span>
            </button>
          </motion.div> */}

          {/* Right Side - Auto Slider */}
          {/* <motion.div
            className="md:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInRight}
          >
            <Slider {...sliderSettings}>
              {stats.map((item, index) => (
                <div key={index} className="px-2">
                  <div className="bg-green-100 p-6 rounded-lg shadow-lg text-center">
                    <div className="w-16 h-16 mx-auto bg-green-700 text-white rounded-full flex items-center justify-center text-2xl">
                      {item.icon}
                    </div>
                    <h3 className="text-lg mt-4">
                      {item.label} <span className="text-black">{item.value}</span>
                    </h3>
                  </div>
                </div>
              ))}
            </Slider>
          </motion.div> */}
        </div>
      </div>
    </div>


      {/* 🔹 4 Cards Section - Updated to Match Reference Image */}
      <div className="w-full flex justify-center py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          {
            title: "Offering",
            description: "Our commitment to sustainable business practices.",
            buttonText: "Find out more →",
            image: "/offering.jpg",
          },
          {
            title: "Media",
            description: "Join our team and grow with us.",
            buttonText: "Explore Careers →",
            image: "/media.jpg",
          },
          {
            title: "Our Shareholders",
            description: "Building long-term value for our stakeholders.",
            buttonText: "Meet Shareholders →",
            image: "/shareholders.jpg",
          },
          {
            title: "What is Crystara",
            description: "Access reports, earnings, and financial data.",
            buttonText: "View Reports →",
            image: "/whatcrystara.jpg",
          },
        ].map((card, index) => (
          <motion.div
            key={index}
            className="relative w-80 h-72 rounded-lg overflow-hidden shadow-lg"
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
        <div className="w-full h-screen max-w-7xl mx-auto py-16">
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
          {/* 📊 Time Graph */}
          <div className="w-full h-96 bg-gray-100 rounded-lg mt-4 p-4 flex justify-center items-center">
            <Line data={data} options={options} />
          </div>
        </motion.div>
        </div>

      {/* 🔹 Testimonials Section */}
      <div className="relative w-full h-auto max-w-7xl mx-auto py-16">
      {/* Box Container */}
      <div className="bg-white border border-gray-300 rounded-lg shadow-lg p-8">
        <motion.div
          className="relative z-10 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-2xl font-bold text-purple-700 mb-6">Testimonials</h2>

          <div className="bg-gray-100 p-6 rounded-lg shadow-md mx-auto w-3/4">
            <Slider {...settings}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="text-center flex flex-col items-center">
                  {/* Centered Image */}
                  <div className="flex justify-center items-center w-full">
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-44 h-56 object-cover object-center square-full shadow-md"
                    />
                  </div>

                  <p className="text-gray-700 italic text-lg mt-4">"{testimonial.text}"</p>
                  <p className="font-semibold mt-2 text-purple-700">{testimonial.author}</p>
                </div>
              ))}
            </Slider>
          </div>
        </motion.div>
      </div>
    </div>


      {/* 🔹 News & Blog Section */}
      <div className="w-full max-w-7xl mx-auto py-16">
      {/* Box Container */}
      <div className="bg-white border border-gray-300 rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-purple-900 mt-6 mb-4 text-center">
          Latest News
        </h2>

        {/* Read More Link */}
        <div className="text-green-600 font-semibold text-right mb-4 cursor-pointer">
          Read our articles →
        </div>

        {/* News Slider */}
        <Slider {...settings1}>
          {newsArticles.map((news, index) => (
            <div key={index} className="p-4">
              <div className="bg-gray-100 p-4 h-[180px] rounded-lg shadow-md text-left flex flex-col justify-between">
                <p className="text-gray-500 text-sm">{news.date}</p>
                <h3 className="text-sm text-gray-800 mt-2 mb-2 line-clamp-2">
                  {news.title}
                </h3>
                <a href={news.link} className="text-green-600 mt-2 inline-flex items-center">
                  Read more →
                </a>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
    </div>
  );
}

export default Home;
