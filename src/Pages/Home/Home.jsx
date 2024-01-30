import Header from "../../Components/Header/Header.jsx";
import DownButton from "../../Components/DownButton/DownButton.jsx";
import logo from "../../assets/images/logo.png";
import "./home.css";

const Home = () => {
  return (
    <>
      <section id="home" className="home-container">
        <Header />
        <img src={logo} alt="" className="logo" />
        <DownButton className="down-button" href="#collective" />
      </section>
    </>
  );
};

export default Home;
