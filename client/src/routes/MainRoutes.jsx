import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "../components/Layout/navbar";
import About from "../components/Pages/About/about";
import Domains from "../components/Pages/Domain/domain";
import Mentor from "../components/Pages/Mentors/Dynamicmentors";
import Contacts from "../components/Pages/Contact/contact";
import FAQ from "../components/Pages/Faq/FAQ";
import Join from "../components/Pages/Auth/login";
import Home from "../components/Pages/Home/home";
function MainRoutes() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/domains" element={<Domains />} />
        <Route path="/mentor" element={<Mentor />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/join" element={<Join />} />
      </Routes>
    </Router>
  );
}

export default MainRoutes;
