import DownButton from "../../Components/DownButton/DownButton.jsx";
import logo from "../../assets/images/logo.png";
import "./home.css";

const Home = () => {
  return (
    <>
      <container>
        <section className="home-container">
          <img src={logo} alt="" className="logo" />
          <DownButton className="down-button" href="#collective" />
        </section>
        <section id="collective" className="home-container">
          <h1>COLLECTIVE</h1>
          <DownButton href="#cafe" />
        </section>
        <section id="cafe" className="home-container">
          <h1>CAFE</h1>
        </section>
      </container>
    </>
  );
};

export default Home;
