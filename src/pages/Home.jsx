import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import Slider from "react-slick";  
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
    arrows: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
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
    { icon: "🌍", label: "1.Operating Since", value: "2016" },
    { icon: "👥", label: "2.Over", value: "50 Employees" },
    { icon: "🏢", label: "3.Offices Globally", value: "02" },
    { icon: "📦", label: "4.Products Available", value: "100+" },
    { icon: "💼", label: "5.Corporate Clients", value: "500+" },
    { icon: "🚀", label: "6.Annual Growth ", value: "15%" },
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
    dots:true,
    arrows: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500
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
    dots:true,
    arrows: false,
    infinite: true,
    speed: 2000,
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
            <img src="/imgslide1.jpg" alt=" 1" className="w-full h-full object-cover" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/imgslide2.jpg" alt=" 2" className="w-full h-full object-cover" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/imgslide3.jpg" alt=" 3" className="w-full h-full object-cover" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/imgslide4.jpg" alt=" 4" className="w-full h-full object-cover" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/imgslide5.jpg" alt=" 5" className="w-full h-full object-cover" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/imgslide6.jpg" alt=" 6" className="w-full h-full object-cover" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/imgslide7.jpg" alt=" 7" className="w-full h-full object-cover" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/imgslide8.jpg" alt=" 8" className="w-full h-full object-cover" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/imgslide9.jpg" alt=" 9" className="w-full h-full object-cover" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/imgslide10.jpg" alt=" 10" className="w-full h-full object-cover" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/imgslide11.jpg" alt=" 11" className="w-full h-full object-cover" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/imgslide12.jpg" alt=" 12" className="w-full h-full object-cover" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/imgslide13.jpg" alt=" 13" className="w-full h-full object-cover" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/imgslide14.jpg" alt=" 14" className="w-full h-full object-cover" />
          </SwiperSlide>




        </Swiper>
      </motion.div>

      <div className="w-full max-w-7xl mx-auto mt-12 pt-16">
  {/* About Us Section */}
  <section className="w-full px-10 mt-12 mb-16">
    <h2 className="text-4xl font-bold text-purple-700 text-center mt-12 mb-12">About Us</h2>

    <motion.div
      className="w-full flex flex-col items-center gap-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Video Section */}
      <motion.div
  className="w-full flex flex-col md:flex-row items-center md:items-start gap-8"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
  {/* Video Section (Left) */}
  <motion.div className="w-full md:w-1/2" variants={fadeInLeft}>
    <video className="w-full h-64 md:h-96 rounded-lg" autoPlay loop muted playsInline>
      <source src="aboutvideo.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </motion.div>

  {/* Content Section (Right) */}
  <motion.div
    className="w-full md:w-1/2 bg-opacity-90 p-6 rounded-lg border-l-4 border-purple-700"
    variants={fadeInRight}
  >
    <h3 className="text-2xl font-semibold text-purple-700 mb-4">Who We Are</h3>
    <p className="text-gray-700 text-lg">
          Welcome to Crystara Sugar Private Limited - Sharing Sweetness to the World. 
          We humans have a special bond with sweetness. 
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
          in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
          in culpa qui officia deserunt mollit anim id est laborum."
    </p>
  </motion.div>
</motion.div>


      {/* Vision & Mission Section */}
      <motion.div
        className="w-full flex flex-col md:flex-row items-center md:items-start gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Vision Section (Left) */}
        <motion.div
          className="w-full md:w-1/2 p-6 rounded-lg shadow-md border-l-4 border-purple-700"
          variants={fadeInLeft}
        >
          <h4 className="text-xl font-semibold text-purple-700 mb-2">Our Vision</h4>
          <p className="text-gray-700 text-lg">
            To be a global leader in sugar manufacturing, known for sustainability, quality, and innovation.
          </p>
        </motion.div>

        {/* Mission Section (Right) */}
        <motion.div
          className="w-full md:w-1/2 p-6 rounded-lg shadow-md border-l-4 border-purple-700"
          variants={fadeInRight}
        >
          <h4 className="text-xl font-semibold text-purple-700 mb-2">Our Mission</h4>
          <p className="text-gray-700 text-lg">
            To provide high-quality sugar products while maintaining eco-friendly production processes.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  </section>
</div>


  {/* Company Overview Section */}
  <section className="w-full px-10 py-16 mt-12">
  <h2 className="text-4xl font-bold text-purple-700 text-center mt-12 mb-12">Company Overview</h2>

  <div className="p-8 rounded-2xl">
    <div className="flex flex-col md:flex-row items-center justify-between">
      
      {/* Overview Text */}
      <motion.div
        className="w-full md:w-1/2 text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInLeft}
      >
        <p className="text-gray-700 text-lg px-2 mb-6">
          Welcome to Crystara Sugar Private Limited - Sharing Sweetness to the World. 
          We humans have a special bond with sweetness.
          Welcome to Crystara Sugar Private Limited - Sharing Sweetness to the World. 
          We humans have a special bond with sweetness.
    
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
          in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
          in culpa qui officia deserunt mollit anim id est laborum."


        </p>
        <button className="bg-purple-700 text-white px-4 py-2 rounded-full flex items-center">
          <span className="mr-2">Learn More</span>
          <span className="text-lg">→</span>
        </button>
      </motion.div>

      {/* Auto Slider */}
      <motion.div
        className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInRight}
      >
        <div className="w-full md:w-4/5 min-h-[250px] overflow-x-auto">
          <Slider {...sliderSettings}>
            {stats.map((item, index) => (
              <div key={index} className="px-2">
                <div className="bg-green-100 p-6 rounded-lg shadow-lg text-center">
                  <div className="w-16 h-16 mx-auto mt-4 mb-4 bg-green-700 text-white rounded-full flex items-center justify-center text-2xl">
                    {item.icon}
                  </div>
                  <h3 className="text-lg mt-4">
                    {item.label} <span className="text-black">{item.value}</span>
                  </h3>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </motion.div>

    </div>
  </div>
</section>




      {/* 🔹 4 Cards Section - Updated to Match Reference Image */}
      {/* 🔹 4 Cards Section - Updated with Links */}
<div className="w-full flex justify-center mt-12">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {[
      {
        title: "Offering",
        description: "Our commitment to sustainable business practices.",
        buttonText: "Find out more →",
        image: "/offering.jpg",
        link: "/offering",  // Internal link to Offering section
      },
      {
        title: "Media",
        description: "Join our team and grow with us.",
        buttonText: "Explore Careers →",
        image: "/media.jpg",
        link: "/media",  // Internal link to Media section
      },
      {
        title: "Our Shareholders",
        description: "Building long-term value for our stakeholders.",
        buttonText: "Meet Shareholders →",
        image: "/shareholders.jpg",
        link: "/shareholders",  // Internal link to Shareholders section
      },
      {
        title: "What is Crystara",
        description: "Access reports, earnings, and financial data.",
        buttonText: "View Reports →",
        image: "/whatcrystara.jpg",
        link: "/about",  // Internal link to Reports section
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

          {/* Button with Link */}
          <a href={card.link} className="mt-2 inline-block text-sm bg-white bg-opacity-20 hover:bg-opacity-40 px-3 py-1 rounded-md">
            {card.buttonText}
          </a>
        </div>
      </motion.div>
    ))}
  </div>
</div>


      {/* 🔹 Achievements Section (with time graph placeholder) */}
        <div className="w-full h-screen max-w-7xl mx-auto py-16 mt-12">
        <h2 className="text-4xl font-bold text-purple-700 mt-12 mb-12 text-center">Achievements</h2>
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
<div className="relative w-full h-auto max-w-7xl mx-auto py-16 mt-12">
  {/* Box Container */}
  <motion.div
    className="relative z-10 text-center"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeInUp}
  >
    {/* Heading */}
    <h2 className="text-3xl font-bold text-purple-700 mb-12">What Our Clients Say</h2>

    <div className="bg-gray-100 p-10 rounded-lg shadow-lg mx-auto w-3/4 md:w-2/3 lg:w-1/2">
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="text-center flex flex-col items-center">
            {/* Centered Image */}
            <div className="flex justify-center items-center w-full">
              <img
                src={testimonial.image}
                alt={testimonial.author}
                className="w-24 h-24 object-cover rounded-full border-4 border-purple-500 shadow-md"
              />
            </div>

            {/* Testimonial Text */}
            <p className="text-gray-700 italic text-lg mt-6">"{testimonial.text}"</p>

            {/* Author Name & Designation */}
            <p className="font-bold text-purple-700 mt-4 text-lg">{testimonial.author}</p>
            <p className="text-gray-500 text-sm">{testimonial.designation}</p>
          </div>
        ))}
      </Slider>
    </div>
  </motion.div>
</div>



      {/* 🔹 News & Blog Section */}
      <div className="w-full max-w-7xl mx-auto py-16">
      {/* Box Container */}
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
  );
}

export default Home;
