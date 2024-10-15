// import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/dist/collapse";
import Home from "./pages/Home";
import Nav3 from "./components/Nav3";
import ServicePage from "./pages/ServicePage";
import BlockPage from "./pages/BlockPage";
import ContactPage from "./pages/ContactPage"; 

function App() {
  return (
    <div>
      <Router>
        <Nav3 />
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home route */}
          <Route path="/page2" element={<ServicePage />} /> {/* Page 2 route */}
          <Route path="/page3" element={<BlockPage />} /> {/* Page 3 route */}
          <Route path="/page4" element={<ContactPage />} /> {/* Page 4 route */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
