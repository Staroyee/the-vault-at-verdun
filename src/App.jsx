import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home/Home.jsx";
import About from "./Pages/About/About.jsx";
import Collective from "./Pages/Collective/Collective.jsx";
import Cafe from "./Pages/Cafe/Cafe.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="*" index element={<Home />} />
          <Route path="/collective" element={<Collective />} />
          <Route path="/cafe" element={<Cafe />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
