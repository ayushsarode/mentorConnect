import "./App.css";

import MainRoutes from "./routes/MainRoutes";

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
