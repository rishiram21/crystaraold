import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Media from './pages/Media'
import Offering from './pages/Offering'
import Contact from './pages/Contact'
import Fin from './pages/Fin'

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
       
        <Navbar />  {/* Navbar at the top */}
        <main className="flex-grow">  {/* Main content */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/offering" element={<Offering />} />
            <Route path="/finance" element={<Fin />} />
            <Route path="/media" element={<Media />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />  {/* Footer at the bottom */}
      </div>
    </Router>
  )
}

export default App