import Header from "../../Components/Header/Header.jsx";
import DownButton from "../../Components/DownButton/DownButton.jsx";
import Shop2 from "../../assets/images/shop-2.jpg";
import logo from "../../assets/images/logo1.png";
import "./home.css";

const Home = () => {
  return (
    <>
      <section id="home" className="h-container-1">
        <Header />
        <section className="h-container-2">
          <img src={logo} alt="The Vault @ Verdun Logo" className="h-logo" />
          <DownButton
            className="h-down-button"
            href="#about"
            ariaLabel="Button link to the collective page"
            alt="Button link to the collective page"
          />
        </section>
      </section>
      <section id="about" className="about-container">
        <img src={Shop2} alt="" className="the-vault-image" />
        <div>
          <h1 className="about-title">THE VAULT AT VERDUN</h1>
        <div className="h-content-container">
          <div className="v-text-container">
            <p>
              Welcome to The Vault @ Verdun Adelaide Hill’s newest Cafe & Co-op
              space.
            </p>
            <p>
              Open now, find us in the beautiful town of Verdun, just two
              minutes beyond the Hahndorf freeway exit.
            </p>
            <p>
              Set in a converted 1930’s church on the Main Street, The Vault has
              kept its heritage charm. Natural light floods through the original
              stain glass windows and vaulted 5 metre ceilings showcasing ornate
              beams towering above.
            </p>
            <p>
              Tell your family, tell your friends, there’s a new treasure in the
              Adelaide Hills at 33 Onkaparinga Valley Rd Verdun.
            </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
