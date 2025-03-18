import React from "react";
import { Routes, Route } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import Home from "./pages/common/Home";
import Footer from "./components/semi/Footer";
import Navbar from "./components/semi/Navbar";
import About from "./pages/common/Aboutus";

const App: React.FC = () => {
  return (
    <SnackbarProvider>
      <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        <Footer />
      </div>
    </SnackbarProvider>
  );
};

export default App;
