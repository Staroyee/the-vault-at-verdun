import UpButton from "../../Components/UpButton/UpButton";
import DownButton from "../../Components/DownButton/DownButton";
import "./cafe.css";

const Cafe = () => {
  return (
    <>
      <section id="cafe" className="home-container">
        <UpButton
          className="up-button"
          href="#collective"
          ariaLabel="Link to the collective page"
        />
        <h1 className="page-title">CAFE</h1>
        <DownButton
          className="down-button"
          href="#about"
          ariaLabel="Button link to the about page"
          alt="Button link to the collective page"
        />
      </section>
    </>
  );
};

export default Cafe;
