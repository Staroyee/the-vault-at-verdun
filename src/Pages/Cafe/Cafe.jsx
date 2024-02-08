import { useState, useEffect } from "react";
import Header from "../../Components/Header/Header.jsx";
import Cake from "../../assets/images/cake.jpg";
import Coffee from "../../assets/images/coffee.jpg";
import "./cafe.css";

const Cafe = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <section id="cafe" className="cafe-container">
        <Header />
        <h1 className="page-title">THE CAFE</h1>
        {windowWidth <= 1200 ? (
          <>
            <div className="left-column">
              <img src={Coffee} alt="" className="left-image" />
              <h1 className="cafe-title">COFFEE</h1>
              <p>Proudly Serving De Groot Coffee Co.</p>
              <p>
                De Groot Coffee Co. is a family-owned coffee roastery in Port
                Elliot, South Australia. We like to keep things simple and make,
                roast, and brew really good coffee.
              </p>
              <p>
                In 2008, Trevor de Groot and Bernadette Stack set up a small
                organic coffee house on Magill Road in Adelaide, called Espresso
                Royale. It was here that De Groot Coffee Co. roasted its first
                batch of single-origin organic beans.
              </p>
              <p>
                In 2014, De Groot Coffee Co. moved to the south coast and opened
                up the roastery and cellar door in Port Elliot.
              </p>
              <p>
                The company has grown but always maintained the approach of
                quality over quantity when it comes to life and business.
                Serving single-origin coffee only, De Groot is a little
                different from most roasters.
              </p>
            </div>
            <div className="right-column">
              <img src={Cake} alt="" className="right-image" />
              <h1 className="cafe-title">FOOD</h1>
              <p>
                Offering a delightful array of savoury and sweet treats at
                budget-friendly prices.
              </p>
              <p>
                Choose to dine in and enjoy our welcoming atmosphere or grab
                your favourites to go.
              </p>
              <p>
                We prioritise inclusivity by stocking a variety of products
                tailored to different dietary preferences, such as vegetarian,
                vegan, and gluten-free options.
              </p>
              <p>
                Our foods are locally sourced from South Australian-owned
                bakers, ensuring freshness with daily deliveries before opening.
              </p>
              <p>
                Discover exclusive daily deals, loyalty card benefits, and more
                available in-store.
              </p>
            </div>
          </>
        ) : (
          <>
            <div className="left-column">
              <img src={Coffee} alt="" className="left-image" />
              <div>
                <h1 className="cafe-title">Food</h1>
                <p>
                  Offering a delightful array of savoury and sweet treats at
                  budget-friendly prices.
                </p>
                <p>
                  Choose to dine in and enjoy our welcoming atmosphere or grab
                  your favourites to go.
                </p>
                <p>
                  We prioritise inclusivity by stocking a variety of products
                  tailored to different dietary preferences, such as vegetarian,
                  vegan, and gluten-free options.
                </p>
                <p>
                  Our foods are locally sourced from South Australian-owned
                  bakers, ensuring freshness with daily deliveries before
                  opening.
                </p>
                <p>
                  Discover exclusive daily deals, loyalty card benefits, and
                  more available in-store.
                </p>
              </div>
            </div>
            <div className="right-column">
              <div>
                <h1 className="cafe-title">Coffee</h1>
                <p>Proudly Serving De Groot Coffee Co.</p>
                <p>
                  De Groot Coffee Co. is a family-owned coffee roastery in Port
                  Elliot, South Australia. We like to keep things simple and
                  make, roast, and brew really good coffee.
                </p>
                <p>
                  In 2008, Trevor de Groot and Bernadette Stack set up a small
                  organic coffee house on Magill Road in Adelaide, called
                  Espresso Royale. It was here that De Groot Coffee Co. roasted
                  its first batch of single-origin organic beans.
                </p>
                <p>
                  In 2014, De Groot Coffee Co. moved to the south coast and
                  opened up the roastery and cellar door in Port Elliot.
                </p>
                <p>
                  The company has grown but always maintained the approach of
                  "quality over quantity" when it comes to life and business.
                  Serving single-origin coffee only, De Groot is a little
                  different from most roasters.
                </p>
              </div>
              <img src={Cake} alt="" className="right-image" />
            </div>
          </>
        )}
      </section>
    </>
  );
};

export default Cafe;
