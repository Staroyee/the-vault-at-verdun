import Header from "../../Components/Header/Header.jsx";
import Coffee from "../../assets/images/coffee.jpg";
import "./collective.css";

const Collective = () => {
  return (
    <>
      <Header />
      <section className="collective-container">
        <img src={Coffee} alt="" className="collective-image" />
        <div>
          <h1 className="collective-title">The Vault at Verdun</h1>
          <div className="text-container">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              ullam, distinctio voluptas asperiores architecto illo porro soluta
              aperiam voluptates explicabo. Error minus sequi at? Dignissimos
              eveniet numquam voluptate obcaecati aspernatur.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              earum, iusto maxime dignissimos fuga qui dolorem. Molestias
              inventore debitis esse voluptatibus quae, placeat, ut, impedit
              dolorum commodi nobis recusandae beatae.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              itaque officia numquam error. Velit voluptatem quam animi dolores
              sapiente cum magnam sit, eos commodi? Maxime non provident eaque
              fugit? Neque.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Exercitationem architecto assumenda quo voluptas earum, quia ut
              neque! Sed nobis, quas porro ipsam incidunt earum voluptas? Ex
              quibusdam corrupti aspernatur nobis.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Collective;
