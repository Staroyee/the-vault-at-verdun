import { PropTypes } from "prop-types";

const RightCollectiveDesktop = ({
  image,
  name,
  description,
  logo,
  rightColumn,
  rightImageStyle,
}) => (
  <section className="page-container">
    <div className={rightColumn}>
      <div>
        <h1 className="name">{name}</h1>
        <p className="description">{description}</p>
        <img src={logo} alt="" className="instagram-logo" />
      </div>
      <img src={image} alt="" className={rightImageStyle} />
    </div>
  </section>
);

RightCollectiveDesktop.propTypes = {
  image: PropTypes.string,
  rightImageStyle: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  logo: PropTypes.string,
  rightColumn: PropTypes.string,
};

export default RightCollectiveDesktop;
