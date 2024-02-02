import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home/Home.jsx";
import Collective from "./Pages/Collective/Collective.jsx";
import Cafe from "./Pages/Cafe/Cafe.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/collective" element={<Collective />} />
          <Route path="/cafe" element={<Cafe />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
