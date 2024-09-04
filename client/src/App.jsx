import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import About from './routes/about';
import Domains from './routes/domain';
import Mentor from './routes/mentors';
import Contacts from './routes/contact';
import FAQ from './routes/FAQ';
import Join from './routes/login';
import Navbar from './components/Navbar';
import './App.css';
import Home from './routes/home';

function App() {
  return (
    
    <Router >
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
