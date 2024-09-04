import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainRoutes from "./routes/MainRoutes";
import Navbar from "./components/Layout/navbar";
import Home from "./components/Pages/Home/home";
import About from "./components/Pages/About/about";
import Domains from "./components/Pages/Domain/domain";
import Mentor from "./components/Pages/Mentors/Mentor";
import FAQ from "./components/Pages/Faq/FAQ";
import Join from "./components/Pages/Auth/login";
import Contacts from "./components/Pages/Contact/contact";

function App() {
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

export default App;
