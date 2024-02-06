import instagramLogo from "../../assets/images/instagram-logo.png";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <section className="footer-section">
        <ul className="footer-left-column">
          <li className="li-title">Opening Hours - </li>
          <li>Monday, Closed</li>
          <li>Tuesday, 8:30AM - 4PM</li>
          <li>Wednesday, 8:30AM - 4PM</li>
          <li>Thursday, 8:30AM - 4PM</li>
          <li>Friday, 8:30AM - 4PM</li>
          <li>Saturday, 10AM - 4PM</li>
          <li>Sunday, 11AM - 4PM</li>
        </ul>

        <ul className="footer-middle-column">
        <li className="li-title">Info - </li>
          <li className="li-style">
            <a href="/become-a-vendor">Become a Vendor</a>
          </li>
          <li className="li-style">
            <a href="/rent-a-rack">Rent a Rack</a>
          </li>
          <li className="li-style">
            <a href="/contact-us">Contact Us</a>
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
          <ul className="footer-right-column">
          <li className="li-title">Address - </li>
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
