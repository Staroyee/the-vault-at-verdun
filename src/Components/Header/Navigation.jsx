import { PropTypes } from "prop-types";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0, staggerDirection: -1 },
  },
};

export const Navigation = ({ isOpen }) => (
  <motion.ul variants={variants} className="header-ul">
    {itemData.map((item, i) => (
      <MenuItem
        key={i}
        text={item.text}
        href={item.href}
        isOpen={isOpen}
        rel={item.rel}
        target={item.target}
      />
    ))}
  </motion.ul>
);

const itemData = [
  { text: "HOME", href: "/" },
  { text: "THE COLLECTIVE", href: "/collective" },
  { text: "THE CAFE - Coming Soon", href: "/cafe" },
  { text: "BECOME A VENDOR", href: "/become-a-vendor" },
  { text: "RENT A RACK", href: "/rent-a-rack" },
  { text: "ABOUT", href: "/about" },
  {
    text: "HOME CRYSTAL CO",
    href: "https://www.homecrystalco.com.au/",
    rel: "noreferrer noopener",
    target: "_blank",
  },
];

Navigation.propTypes = {
  isOpen: PropTypes.bool,
};
