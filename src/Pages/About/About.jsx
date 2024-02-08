import Header from "../../Components/Header/Header.jsx";
import Shop2 from "../../assets/images/shop-2.jpg";
import "./about.css";

const About = () => {
  return (
    <>
      <Header />
      <section id="about" className="about-container">
        <img src={Shop2} alt="" className="the-vault-image" />
        <div>
          <h1 className="about-title">The Vault at Verdun</h1>
          <div className="text-container">
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
      </section>
    </>
  );
};

export default About;
