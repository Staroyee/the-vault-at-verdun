import Header from "../../Components/Header/Header.jsx";
import Coffee from "../../assets/images/coffee.jpg";
import "./rent-rack.css";

const RentRack = () => {
  return (
    <>
      <Header />
      <section className="title-container collective-container">
        <img
          src={Coffee}
          alt="image of the inside of The Vault at Verdun"
          className="collective-image"
        />
        <div>
          <h1 className="collective-title">Rent a Rack</h1>
          <div className="text-container">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              similique excepturi quos saepe, sapiente atque dolorum eligendi
              hic, facilis repellat nemo laboriosam suscipit magnam recusandae
              ducimus veniam molestiae optio quaerat?
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptatibus laudantium dignissimos ut, maiores, natus qui eius
              libero minus error, necessitatibus voluptate animi quisquam quia?
              Ex fuga tempora libero impedit nesciunt.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              officiis ut dolore cum delectus reiciendis quis, deleniti quia
              quidem unde mollitia labore obcaecati a fugiat. Ipsam qui officia
              porro culpa!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              illo quos quo atque explicabo! Doloremque impedit maxime molestiae
              quibusdam. Ipsum molestias porro necessitatibus nostrum, sit
              cupiditate. Atque aliquid minus maxime!
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default RentRack;
