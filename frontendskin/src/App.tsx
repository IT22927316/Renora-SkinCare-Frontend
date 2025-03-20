import React from "react";
import { Routes, Route } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import Home from "./pages/common/Home";
import Footer from "./components/semi/Footer";
import Navbar from "./components/semi/Navbar";
import About from "./pages/common/Aboutus";
import ContactUs from "./pages/common/ContactUs";
import MainReviews from "./pages/reviews/MainReviews";
import MainFAQ from "./pages/faq/MainFAQ";

const App: React.FC = () => {
  return (
    <SnackbarProvider>
      <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contactus" element={<ContactUs />} />

            <Route path="/reviews" element={<MainReviews />} />

            <Route path="/faqs" element={<MainFAQ />} /> 
          </Routes>
        <Footer />
      </div>
    </SnackbarProvider>
  );
};

export default App;
