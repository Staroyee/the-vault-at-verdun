import { useEffect, useState } from "react";
import Header from "../../Components/Header/Header.jsx";
import Croissant from "../../assets/images/coffee.jpg";
import Coffee from "../../assets/images/coffee.jpg";
import "./vendor.css";

const Vendor = () => {
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
        {windowWidth <= 1200 ? (
          <>
            <div className="left-column">
              <img src={Coffee} alt="" className="left-image" />
              <h1 className="cafe-title">COFFEE</h1>
              <p>Proudly Serving De Groot Coffee Co.</p>
              <p>
                Are you a local Small Business owner, Maker, Creator or Artist
                with a product to sell?
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
              <img src={Croissant} alt="" className="right-image" />
              <h1 className="cafe-title">The Vault @ Verdun Offers</h1>
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
                <h1 className="cafe-title">Become a Vendor</h1>
                <p>
                  Are you a local Small Business owner, Maker, Creator or Artist
                  with a product to sell?
                </p>
                <p>
                  The Vault @ Verdun is here to support you in showcasing your
                  creations in a retail setting.
                </p>
                <p>
                  Having started our business attending markets, we are well
                  aware of how much work goes into attending events weekend
                  after weekend to get your brand seen. We aim to offer an
                  alternative to creatives that's less hassle and more reward.
                  It's a great way to gain exposure and market your business to
                  a local crowd.
                </p>
              </div>
            </div>
            <div className="right-column">
              <div>
                <h1 className="cafe-title">The Vault @ Verdun Offers</h1>
                <p>
                  Set shelf rental spaces on a 2 or 4 week basis (best suited to
                  those with small-medium size products).
                </p>
                <p>
                  Wall Art showcase, offered in 8 week blocks, in which we take
                  a 15% commission if pieces sell. This option is best booked by
                  coming into the store to discuss required space, style &
                  number of pieces, and to get a feel for the space.
                </p>
                <p>
                  Customised displays for pieces that don't fit into the
                  categories above: perhaps you have a small display that
                  doesn't require an entire shelf, think greeting cards,
                  jewellery etc.
                </p>
                <p>
                  Or a large or unusual product to sell? We may be able to
                  discuss alternative options and tailor a display to suit you.
                </p>
                <p>
                  Get in touch today to enquire about becoming a Vendor with The
                  Vault via the contact form below.
                </p>
              </div>
              <img src={Croissant} alt="" className="right-image" />
            </div>
          </>
        )}
      </section>
    </>
  );
};

export default Vendor;
