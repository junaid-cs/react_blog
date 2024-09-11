import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./component/Footer";
import Nav from "./component/Nav";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  </Router>
  
  );
}

export default App;
