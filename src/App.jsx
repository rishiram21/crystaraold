import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Business from './pages/Business'
import Corporate from './pages/Corporate'

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
       
        <Navbar />  {/* Navbar at the top */}
        <main className="flex-grow">  {/* Main content */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/business" element={<Business />} />
            <Route path="/corporate" element={<Corporate />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />  {/* Footer at the bottom */}
      </div>
    </Router>
  )
}

export default App