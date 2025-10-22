import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

interface NavItemProps {
  href: string;
  name: string;
  icon: React.ElementType;
  isCentral?: boolean;
  isDesktop?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({
  href,
  name,
  icon: Icon,
  isCentral = false,
  isDesktop = false,
}) => {
  const location = useLocation();
  const isActive = location.pathname === href;

  if (isDesktop) {
    return (
      <Link
        style={{ paddingBottom: "2px" }}
        to={href}
        className="relative flex items-center justify-start w-full px-4 py-3 my-1 text-gray-400 rounded-lg group hover:text-white hover:bg-gray-800 transition-colors duration-200"
      >
        <Icon className={`h-5 w-5 ${isActive ? "text-white" : ""}`} />
        <span
          className={`ml-4 text-sm font-medium ${isActive ? "text-white" : ""}`}
        >
          {name}
        </span>
        {isActive && (
          <motion.div
            className="absolute left-0 w-1 h-full bg-indigo-500 rounded-r-full"
            layoutId="active-pill"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        )}
      </Link>
    );
  }

  // Mobile Nav Item
  const handleMobileNavClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (isCentral) {
    return (
      <Link to={href} className="relative" onClick={handleMobileNavClick}>
        <motion.div
          className="flex items-center justify-center w-16 h-16 bg-indigo-600 rounded-full shadow-lg -translate-y-6 text-white"
          whileHover={{ scale: 1.1, rotate: 15 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Icon className="w-8 h-8" />
        </motion.div>
      </Link>
    );
  }

  return (
    <Link
      to={href}
      className="relative flex flex-col items-center justify-center flex-1 text-sm text-gray-400 group"
      onClick={handleMobileNavClick}
    >
      <Icon
        className={`w-5 h-5 mb-0.5 transition-colors duration-200 ${
          isActive ? "text-indigo-400" : "group-hover:text-white"
        }`}
      />
      <span
        className={`text-[11px] transition-colors duration-200 ${
          isActive ? "text-indigo-400" : "group-hover:text-white"
        }`}
      >
        {name}
      </span>
      {isActive && (
        <motion.div
          layoutId="active-pill"
          className="absolute -bottom-1 w-6 h-0.5 bg-indigo-400 rounded-full"
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      )}
    </Link>
  );
};

export default NavItem;
