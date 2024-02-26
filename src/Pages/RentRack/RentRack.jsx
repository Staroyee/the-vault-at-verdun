import Header from "../../Components/Header/Header.jsx";
import Rack from "../../assets/images/shop-1.jpg";
import "./rent-rack.css";

const RentRack = () => {
  return (
    <>
      <Header />
      <section className="r-container">
        <img src={Rack} alt="" className="r-image" />
        <div>
          <h1 className="r-title">RENT A RACK</h1>
          <div className="r-text">
            <div className="r-p-container">
              <p>
                The Vault @ Verdun offers ‘rent-a-rack’ services for pre-loved
                clothing as well as selected new clothing from local brands/
                designers. We welcome items in all sizes including children’s,
                men’s and women’s, and encourage unique and vintage pieces.
                Shoes, Bags and Accessories are welcome.
              </p>
              <p>
                We are open 6 days: Rack Setup takes place on a Tuesday morning
                and pack up is required on Sunday afternoon. We offer 1/2 and
                full rack options on 1 or 2 week hire periods. Top ups are
                welcome as items sell to maximize your profit , and you keep
                100% of sales.
              </p>
            </div>
            <div>
              <h1>RACK OPTIONS</h1>
              <div className="r-p-container">
                <p>
                  {" "}
                  ½ Rack: Up to 20 hangers + 5 accessories (hats, shoes, bags,
                  sunglasses etc).
                </p>
                <p>Full Rack: Up to 40 hangers + 10 accessories.</p>
                <p>
                  Kids Rack: Up to 40 hangers + 10 accessories (Newborn - Age
                  12)
                </p>
              </div>
            </div>
            <div className="r-pricing">
              <h1>PRICING</h1>
              <div className="r-p-container">
                <p>½ Rack: 1 week $45, 2 weeks $80</p>
                <p>Full Rack: 1 week $80, 2 weeks $145</p>
                <p>Kid’s Rack: 1 week $55, 2 weeks $100</p>
              </div>
            </div>
            <div className="r-p-container">
              <p>To rent a rack, send an enquiry to: </p>
              <p className="r-email">thevaultatverdun@gmail.com</p>
              <p>or message us on instagram!</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RentRack;
