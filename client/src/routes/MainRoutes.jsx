import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "../components/Layout/navbar";
import About from "../components/Pages/About/about";
import Domains from "../components/Pages/Domain/domain";
import Mentor from "../components/Pages/Mentors/Mentor";
import Contacts from "../components/Pages/Contact/contact";
import FAQ from "../components/Pages/Faq/FAQ";
import Home from "../components/Pages/Home/home";
import MentorMeet from "../components/Pages/Mentors/MentorMeet";
import Room from "../components/Pages/Room/Room";
import MentorPage from "../components/Pages/Mentors/MentorPage";
import Login from "../components/Pages/Auth/login/Login";
import Register from "../components/Pages/Auth/register/Register";
function MainRoutes() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/domains" element={<Domains />} />
        <Route path="/mentor" element={<Mentor />} />
        <Route path="/mentor/:id" element={<MentorPage />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/mentormeet" element={<MentorMeet />} />
        <Route path="/mentormeet/:roomId" element={<Room/>} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </Router>
  );
}

export default MainRoutes;