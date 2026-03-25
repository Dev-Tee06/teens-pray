import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Programs from "./Pages/Programs";
import PastEvents from "./Pages/PastEvents";
import Contact from "./Pages/Contact";

import Navbar from "./Components/Navbar";
import Countdown from "./Components/Countdown";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col relative bg-[#fafafa]">
        {/* Subtle texture overlay */}
        <div className="pointer-events-none fixed inset-0 z-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.02]"></div>
        
        <div className="relative z-10 flex flex-col min-h-screen">
          {/* Navigation */}
          <Navbar />

          {/* Page Content */}
          <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/past-events" element={<PastEvents />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
        </div>
      </div>
    </Router>
  );
}
