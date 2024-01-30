import DownButton from "../../Components/DownButton/DownButton";
import "./cafe.css";

const Cafe = () => {
  return (
    <>
      <section id="cafe" className="home-container">
        <h1>CAFE</h1>
        <DownButton className="down-button" href="#about" />
      </section>
    </>
  );
};

export default Cafe;
