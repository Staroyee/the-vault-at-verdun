import { PropTypes } from "prop-types";
import "./up-button.css"; // Rename the CSS file if necessary

const UpButton = ({ href, className, ariaLabel, alt }) => {
  return (
    <>
      <a href={href} className={className} aria-label={ariaLabel} alt={alt}>
        <svg
          className="BB-Svg"
          width="50"
          height="120"
          viewBox="0 0 45 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="triangles">
            <g id="up-darkGroup">
              <path
                id="up-dark1"
                d="M24.1483 37.7176C22.9707 35.731 20.0841 35.7643 18.9525 37.7775L5.79804 61.1807C4.66646 63.1938 6.13856 65.6771 8.44781 65.6504L35.2928 65.3411C37.6021 65.3143 39.0165 62.7979 37.8388 60.8113L24.1483 37.7176Z"
                fillOpacity="0.75"
              />
            </g>
            <g id="up-lightGroup">
              <path
                id="up-light1"
                d="M24.1483 37.7176C22.9707 35.731 20.0841 35.7643 18.9525 37.7775L5.79802 61.1807C4.66645 63.1938 6.13855 65.6771 8.4478 65.6504L35.2928 65.3411C37.6021 65.3143 39.0165 62.7979 37.8388 60.8113L24.1483 37.7176Z"
                fillOpacity="0.75"
              />
              <path
                id="up-light2"
                d="M24.1483 37.7176C22.9707 35.731 20.0841 35.7643 18.9525 37.7775L5.79802 61.1807C4.66645 63.1938 6.13855 65.6771 8.4478 65.6504L35.2928 65.3411C37.6021 65.3143 39.0165 62.7979 37.8388 60.8113L24.1483 37.7176Z"
                fillOpacity="0.75"
              />
            </g>
          </g>
        </svg>
      </a>
    </>
  );
};

UpButton.propTypes = {
  href: PropTypes.string,
  className: PropTypes.string,
  ariaLabel: PropTypes.string,
  alt: PropTypes.string,
};

export default UpButton;
