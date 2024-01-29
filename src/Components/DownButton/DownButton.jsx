import { PropTypes } from "prop-types";
import "./down-button.css";

const DownButton = ({ href, className }) => {
  return (
    <>
      <a href={href} className={className}>
        <svg
          className="BB-Svg"
          width="60"
          height="120"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="triangles">
            <g id="darkGroup">
              <path
                id="dark1"
                d="M24.1483 65.2824C22.9707 67.269 20.0841 67.2357 18.9525 65.2225L5.79804 41.8193C4.66646 39.8062 6.13856 37.3229 8.44781 37.3496L35.2928 37.6589C37.6021 37.6857 39.0165 40.2021 37.8388 42.1887L24.1483 65.2824Z"
                fillOpacity="0.75"
              />
            </g>
            <g id="lightGroup">
              <path
                id="light1"
                d="M24.1483 65.2824C22.9707 67.269 20.0841 67.2357 18.9525 65.2225L5.79802 41.8193C4.66645 39.8062 6.13855 37.3229 8.4478 37.3496L35.2928 37.6589C37.6021 37.6857 39.0165 40.2021 37.8388 42.1887L24.1483 65.2824Z"
                fillOpacity="0.75"
              />
              <path
                id="light2"
                d="M24.1483 65.2824C22.9707 67.269 20.0841 67.2357 18.9525 65.2225L5.79802 41.8193C4.66645 39.8062 6.13855 37.3229 8.4478 37.3496L35.2928 37.6589C37.6021 37.6857 39.0165 40.2021 37.8388 42.1887L24.1483 65.2824Z"
                fillOpacity="0.75"
              />
            </g>
          </g>
        </svg>
      </a>
    </>
  );
};

DownButton.propTypes = {
  href: PropTypes.string,
  className: PropTypes.string,
};

export default DownButton;
