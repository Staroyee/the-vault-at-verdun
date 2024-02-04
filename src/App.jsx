import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer/Footer.jsx";
import "./App.css";

function App() {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
