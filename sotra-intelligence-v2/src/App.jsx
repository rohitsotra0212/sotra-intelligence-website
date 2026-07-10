import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import CaseStudy from "./pages/CaseStudy";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Solutions from "./pages/Solutions";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/case-study" element={<CaseStudy />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/solutions" element={<Solutions />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;