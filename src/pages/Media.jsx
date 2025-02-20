import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const events = [
  { title: "Title Here", image: "/event1.jpg" },
  { title: "Title Here", image: "/event2.jpg" },
  { title: "Title Here", image: "/event3.jpg" },
  { title: "Title Here", image: "/event4.jpg" },
  { title: "Title Here", image: "/event5.jpg" },
  { title: "Title Here", image: "/event6.jpg" },
];

const videos = [
  { title: "Title Here", thumbnail: "/videogallery1.jpg", src: "/videogallery1.mp4" },
  { title: "Title Here", thumbnail: "/videogallery2.jpg", src: "/videogallery2.mp4" },
  { title: "Title Here", thumbnail: "/videogallery3.jpg", src: "/videogallery3.mp4" },
];

function Media() {
  const [activeTab, setActiveTab] = useState("events");

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
        
        {/* Hero Section */}
        <motion.div
          className="relative w-full h-56 flex items-center rounded-lg shadow-md mb-5 bg-cover bg-center"
          style={{ backgroundImage: "url('/mediaimg.jpg')" }}
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
          <div className="relative w-full flex flex-col md:flex-row items-center p-8">
            <h1 className="text-6xl font-bold text-white">Media</h1>
          </div>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center mb-6">
          <button
            className={`px-6 py-2 text-lg font-semibold rounded-l-md ${activeTab === "events" ? "bg-purple-700 text-white" : "bg-gray-300 text-gray-700"}`}
            onClick={() => setActiveTab("events")}
          >
            📸 Event Gallery
          </button>
          <button
            className={`px-6 py-2 text-lg font-semibold rounded-r-md ${activeTab === "videos" ? "bg-purple-700 text-white" : "bg-gray-300 text-gray-700"}`}
            onClick={() => setActiveTab("videos")}
          >
            🎥 Video Gallery
          </button>
        </div>

        {/* Event Gallery */}
        {activeTab === "events" && (
          <motion.div className="grid md:grid-cols-3 gap-6" initial="hidden" animate="visible" variants={fadeIn}>
            {events.map((event, index) => (
              <motion.div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-all duration-300">
                <img src={event.image} alt={event.title} className="w-full h-56 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800">{event.title}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Video Gallery */}
        {activeTab === "videos" && (
          <motion.div className="grid md:grid-cols-3 gap-6" initial="hidden" animate="visible" variants={fadeIn}>
            {videos.map((video, index) => (
              <motion.div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-all duration-300">
                <video 
                autoPlay
                  controls 
                  className="w-full h-56 object-cover"
                  poster={video.thumbnail} // Use the thumbnail as a preview
                >
                  <source src={video.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800">{video.title}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

      </div>
    </div>
  );
}

export default Media;
