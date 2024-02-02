import { PropTypes } from "prop-types";

const LeftCollectiveDesktop = ({
  image,
  name,
  description,
  logo,
  leftColumn,
  leftImageStyle,
}) => (
  <section className="page-container">
    <div className={leftColumn}>
      <img src={image} alt="" className={leftImageStyle} />
      <div>
        <h1 className="name">{name}</h1>
        <p className="description">{description}</p>
        <img src={logo} alt="" className="instagram-logo" />
      </div>
    </div>
  </section>
);

LeftCollectiveDesktop.propTypes = {
  image: PropTypes.string,
  leftImageStyle: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  logo: PropTypes.string,
  leftColumn: PropTypes.string,
};

export default LeftCollectiveDesktop;
