import Header from "../../Components/Header/Header.jsx";
import DownButton from "../../Components/DownButton/DownButton.jsx";
import logo from "../../assets/images/logo.png";
import "./home.css";

const Home = () => {
  return (
    <>
        <section className="home-container">
          <Header />
          <img src={logo} alt="" className="logo" />
          <DownButton className="down-button" href="#collective" />
        </section>
        <section id="collective" className="home-container">
          <h1>COLLECTIVE</h1>
          <DownButton className="down-button" href="#cafe" />
        </section>
        <section id="cafe" className="home-container">
          <h1>CAFE</h1>
        </section>
    </>
  );
};

export default Home;
