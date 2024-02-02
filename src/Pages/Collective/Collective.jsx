import { useState, useEffect } from "react";
import Header from "../../Components/Header/Header.jsx";
import LeftCollectiveDesktop from "../../Components/CollectiveSections/LeftCollectiveDesktop.jsx";
import RightCollectiveDesktop from "../../Components/CollectiveSections/RightCollectiveDesktop.jsx";
import CollectiveMobile from "../../Components/CollectiveSections/CollectiveMobile.jsx";
import instagramLogo from "../../assets/images/instagram-logo.png";
import Coffee from "../../assets/images/coffee.jpg";
import "./collective.css";

const Collective = () => {
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
      <Header />
      <section className="title-container">
        <h1 className="page-title">Our Vendors</h1>
      </section>
      {windowWidth <= 1200 ? (
        <>
          <CollectiveMobile
            image={Coffee}
            name="Home Crystal Co"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit quaerat necessitatibus consequatur harum quasi enim temporibus nisi deleniti quibusdam quo, nobis quam laudantium recusandae dolores eaque quas nemo. Tempora, dignissimos?."
            logo={instagramLogo}
          />
          <CollectiveMobile
            image={Coffee}
            name="Fabulous Trash"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit quaerat necessitatibus consequatur harum quasi enim temporibus nisi deleniti quibusdam quo, nobis quam laudantium recusandae dolores eaque quas nemo. Tempora, dignissimos?."
            logo={instagramLogo}
          />
          <CollectiveMobile
            image={Coffee}
            name="Home Crystal Co"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit quaerat necessitatibus consequatur harum quasi enim temporibus nisi deleniti quibusdam quo, nobis quam laudantium recusandae dolores eaque quas nemo. Tempora, dignissimos?."
            logo={instagramLogo}
          />
          <CollectiveMobile
            image={Coffee}
            name="Home Crystal Co"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit quaerat necessitatibus consequatur harum quasi enim temporibus nisi deleniti quibusdam quo, nobis quam laudantium recusandae dolores eaque quas nemo. Tempora, dignissimos?."
            logo={instagramLogo}
          />
          <CollectiveMobile
            image={Coffee}
            name="Home Crystal Co"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit quaerat necessitatibus consequatur harum quasi enim temporibus nisi deleniti quibusdam quo, nobis quam laudantium recusandae dolores eaque quas nemo. Tempora, dignissimos?."
            logo={instagramLogo}
          />
          <CollectiveMobile
            image={Coffee}
            name="Home Crystal Co"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit quaerat necessitatibus consequatur harum quasi enim temporibus nisi deleniti quibusdam quo, nobis quam laudantium recusandae dolores eaque quas nemo. Tempora, dignissimos?."
            logo={instagramLogo}
          />
          <CollectiveMobile
            image={Coffee}
            name="Home Crystal Co"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit quaerat necessitatibus consequatur harum quasi enim temporibus nisi deleniti quibusdam quo, nobis quam laudantium recusandae dolores eaque quas nemo. Tempora, dignissimos?."
            logo={instagramLogo}
          />

          {/* Add other mobile sections as needed */}
        </>
      ) : (
        <>
          <LeftCollectiveDesktop
            image={Coffee}
            name="Home Crystal Co"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit quaerat necessitatibus consequatur harum quasi enim temporibus nisi deleniti quibusdam quo, nobis quam laudantium recusandae dolores eaque quas nemo. Tempora, dignissimos?"
            logo={instagramLogo}
            leftColumn="left-column"
            leftImageStyle="left-image"
          />
          <RightCollectiveDesktop
            image={Coffee}
            name="Fabulous Trash"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit quaerat necessitatibus consequatur harum quasi enim temporibus nisi deleniti quibusdam quo, nobis quam laudantium recusandae dolores eaque quas nemo. Tempora, dignissimos?"
            logo={instagramLogo}
            rightColumn="right-column"
            rightImageStyle="right-image"
          />
          <LeftCollectiveDesktop
            image={Coffee}
            name="Home Crystal Co"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit quaerat necessitatibus consequatur harum quasi enim temporibus nisi deleniti quibusdam quo, nobis quam laudantium recusandae dolores eaque quas nemo. Tempora, dignissimos?"
            logo={instagramLogo}
            leftColumn="left-column"
            leftImageStyle="left-image"
          />
          <RightCollectiveDesktop
            image={Coffee}
            name="Home Crystal Co"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit quaerat necessitatibus consequatur harum quasi enim temporibus nisi deleniti quibusdam quo, nobis quam laudantium recusandae dolores eaque quas nemo. Tempora, dignissimos?"
            logo={instagramLogo}
            rightColumn="right-column"
            rightImageStyle="right-image"
          />
          <LeftCollectiveDesktop
            image={Coffee}
            name="Home Crystal Co"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit quaerat necessitatibus consequatur harum quasi enim temporibus nisi deleniti quibusdam quo, nobis quam laudantium recusandae dolores eaque quas nemo. Tempora, dignissimos?"
            logo={instagramLogo}
            leftColumn="left-column"
            leftImageStyle="left-image"
          />
          <RightCollectiveDesktop
            image={Coffee}
            name="Home Crystal Co"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit quaerat necessitatibus consequatur harum quasi enim temporibus nisi deleniti quibusdam quo, nobis quam laudantium recusandae dolores eaque quas nemo. Tempora, dignissimos?"
            logo={instagramLogo}
            rightColumn="right-column"
            rightImageStyle="right-image"
          />
          <LeftCollectiveDesktop
            image={Coffee}
            name="Home Crystal Co"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit quaerat necessitatibus consequatur harum quasi enim temporibus nisi deleniti quibusdam quo, nobis quam laudantium recusandae dolores eaque quas nemo. Tempora, dignissimos?"
            logo={instagramLogo}
            leftColumn="left-column"
            leftImageStyle="left-image"
          />
          {/* Add other desktop sections as needed */}
        </>
      )}
    </>
  );
};

export default Collective;
