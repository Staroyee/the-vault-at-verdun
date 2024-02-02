import Header from "../../Components/Header/Header.jsx";
import Cake from "../../assets/images/cake.jpg";
import Coffee from "../../assets/images/coffee.jpg";
import "./cafe.css";

const Cafe = () => {
  return (
    <>
      <section id="cafe" className="page-container">
        <Header />
        <h1 className="page-title">Our Café</h1>
        <div className="left-column">
          <img src={Coffee} alt="" className="left-image" />
          <h1>Coffee</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia
            dolorem quidem voluptatibus eum! Nesciunt adipisci, cum asperiores
            culpa alias rem ut ducimus dolor neque cumque numquam quisquam in
            unde dolorum.
          </p>
        </div>
        <div className="right-column">
          <h1>Cake</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            maiores culpa ea maxime! Rem fugit vitae eos consequatur. Hic id nam
            esse facilis tempora perspiciatis dolorum earum asperiores sunt
            fugit.
          </p>
          <img src={Cake} alt="" className="right-image" />
        </div>
      </section>
    </>
  );
};

export default Cafe;
