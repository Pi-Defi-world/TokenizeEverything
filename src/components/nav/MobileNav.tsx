"use client";

import type React from "react";
import { MOBILE_NAV_LINKS } from "../../config/navigation";
import NavItem from "./NavItem";
import { motion } from "framer-motion";

const MobileNav: React.FC = () => {
  const centralItem = MOBILE_NAV_LINKS.find((link) => link.isCentral);
  const regularItems = MOBILE_NAV_LINKS.filter((link) => !link.isCentral);

  return (
    <motion.div
      className="md:hidden fixed bottom-0 left-0 right-0 bg-black/20 backdrop-blur-xl border-t border-white/10 shadow-2xl z-50"
      style={{
        paddingBottom: "22px",
        paddingTop: "8px", // Added top padding for iOS home indicator spacing
      }}
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="flex items-center justify-around max-w-md mx-auto px-4">
        {regularItems.slice(0, 2).map((link) => (
          <NavItem key={link.href} {...link} />
        ))}
        {centralItem && (
          <div className="flex-shrink-0 mx-2">
            <NavItem {...centralItem} />
          </div>
        )}
        {regularItems.slice(2).map((link) => (
          <NavItem key={link.href} {...link} />
        ))}
      </div>
    </motion.div>
  );
};

export default MobileNav;
