import { PropTypes } from "prop-types";

const CollectiveMobile = ({ image, name, description, logo }) => (
  <section id="collective" className="page-container">
    <div className="left-column">
      
      <div>
        <h1 className="name">{name}</h1><img src={image} alt="" className="left-image" />
        <p className="description">{description}</p>
        <img src={logo} alt="" className="instagram-logo" />
      </div>
    </div>
  </section>
);

CollectiveMobile.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  logo: PropTypes.string,
};

export default CollectiveMobile;
