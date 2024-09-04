import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "../components/Layout/navbar";
import About from "../components/Pages/About/about";
import Domains from "../components/Pages/Domain/domain";
import Mentor from "../components/Pages/Mentors/Mentor";
import Contacts from "../components/Pages/Contact/contact";
import FAQ from "../components/Pages/Faq/FAQ";
import Join from "../components/Pages/Auth/login";
import Home from "../components/Pages/Home/home";
import MentorMeet from "../components/Pages/Mentors/MentorMeet";
import Room from "../components/Pages/Room/Room";
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
        <Route path="/mentormeet" element={<MentorMeet />} />
        <Route path="/mentormeet/:roomId" element={<Room/>} />
      </Routes>
    </Router>
  );
}

export default MainRoutes;
