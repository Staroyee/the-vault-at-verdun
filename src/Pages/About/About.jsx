import UpButton from "../../Components/UpButton/UpButton";
import "./about.css";

const About = () => {
  return (
    <>
      <section id="about" className="home-container">
        <UpButton
          className="up-button"
          href="#cafe"
          ariaLabel="Button link to the collective page"
          alt="Button link to the collective page"
        />
        <h1 className="page-title">ABOUT</h1>
      </section>
    </>
  );
};

export default About;
