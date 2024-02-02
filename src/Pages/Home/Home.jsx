import Header from "../../Components/Header/Header.jsx";
import About from "../About/About.jsx";
import DownButton from "../../Components/DownButton/DownButton.jsx";
import logo from "../../assets/images/logo.png";
import "./home.css";

const Home = () => {
  return (
    <>
      <section id="home" className="home-container">
        <Header />
        <img src={logo} alt="The Vault @ Verdun Logo" className="logo" />
        <DownButton
          className="down-button"
          href="#about"
          ariaLabel="Button link to the collective page"
          alt="Button link to the collective page"
        />
      </section>
      <About />
    </>
  );
};

export default Home;
