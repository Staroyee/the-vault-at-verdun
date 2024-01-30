import DownButton from "../../Components/DownButton/DownButton";
import "./collective.css";

const Collective = () => {
  return (
    <>
      <section id="collective" className="home-container collective-section">
        <div className="title-container">
          <h1 className="page-title">COLLECTIVE</h1>
        </div>
        <DownButton className="down-button" href="#cafe" />
      </section>
    </>
  );
};

export default Collective;
