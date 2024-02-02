import instagramLogo from "../../assets/images/instagram-logo.png";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <section className="footer-section">
        <ul className="left-column">
          <li className="li-style">
            <a href="#">Become A Vendor</a>
          </li>
          <li className="li-style">
            <a href="#">Contact Us</a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/the.vault.at.verdun/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img src={instagramLogo} className="instagram-logo"></img>
            </a>
          </li>
        </ul>
        <a
          className="address"
          href="https://www.google.com/maps/dir//33+Onkaparinga+Valley+Rd,+Verdun+SA+5245/@-35.0502063,138.7422213,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x6ab733ef43e8743d:0xe71854509b9dbf06!2m2!1d138.7885369!2d-35.0081113?entry=ttu"
          rel="noopener noreferrer"
          target="_blank"
        >
          <ul className="right-column">
            <li>33 Onkaparinga Valley Road,</li>
            <li>Verdun,</li>
            <li>South Australia,</li>
            <li>5245.</li>
          </ul>
        </a>
      </section>
    </>
  );
};

export default Footer;
