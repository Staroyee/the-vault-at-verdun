import DownButton from "../../Components/DownButton/DownButton";
import UpButton from "../../Components/UpButton/UpButton";
import "./collective.css";

const Collective = () => {
  return (
    <>
      <section id="collective" className="home-container collective-section">
        <UpButton className="up-button" href="#home" />
        <div className="title-container">
          <h1 className="page-title">COLLECTIVE</h1>
        </div>
        <DownButton
          className="down-button"
          href="#cafe"
          ariaLabel="Button link to the cafe page"
          alt="Button link to the collective page"
        />
      </section>
    </>
  );
};

export default Collective;
