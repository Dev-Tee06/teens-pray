import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ProtectedAdminRoute from "./Components/ProtectedAdminRoute";

const Home = React.lazy(() => import("./Pages/Home"));
const About = React.lazy(() => import("./Pages/About"));
const Programs = React.lazy(() => import("./Pages/Programs"));
const PastEvents = React.lazy(() => import("./Pages/PastEvents"));
const Contact = React.lazy(() => import("./Pages/Contact"));
const Register = React.lazy(() => import("./Pages/Register"));
const AdminLogin = React.lazy(() => import("./Pages/AdminLogin"));
const AdminRegistrations = React.lazy(
  () => import("./Pages/AdminRegistrations"),
);

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
            <Suspense
              fallback={
                <div className="flex items-center justify-center min-h-[60vh]">
                  Loading...
                </div>
              }
            >
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/programs" element={<Programs />} />
                <Route path="/past-events" element={<PastEvents />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/register" element={<Register />} />
                <Route path="/admin/login" element={<AdminLogin />} />
                <Route
                  path="/admin/registrations"
                  element={
                    <ProtectedAdminRoute>
                      <AdminRegistrations />
                    </ProtectedAdminRoute>
                  }
                />
              </Routes>
            </Suspense>
          </main>

          {/* Footer */}
          <Footer />
        </div>
      </div>
    </Router>
  );
}
