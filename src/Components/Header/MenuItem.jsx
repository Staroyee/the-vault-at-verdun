import { PropTypes } from "prop-types";
import { motion } from "framer-motion";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const MenuItem = ({ text, href, isOpen, rel, target }) => {
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 1 }}
    >
      <a
        href={href}
        rel={rel}
        target={target}
        className={`menu-item ${isOpen ? "header-open" : "header-closed"}`}
      >
        {text}
      </a>
    </motion.li>
  );
};

MenuItem.propTypes = {
  text: PropTypes.string,
  href: PropTypes.string,
  isOpen: PropTypes.bool,
  rel: PropTypes.string,
  target: PropTypes.string,
};
