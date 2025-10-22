import { AnimatePresence, motion } from "framer-motion";
import {
  Calendar,
  FileText,
  Info,
  LogOut,
  Palette,
  Shield,
  Star,
  UploadCloud,
  X,
  Film,
  Briefcase,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectUserGlobalData } from "../../store/dreamworldSlice";

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const drawerVariants = {
  hidden: { x: "-100%" },
  visible: { x: 0 },
};

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const MobileDrawer: React.FC<MobileDrawerProps> = ({ isOpen, onClose }) => {
  const user = useSelector(selectUserGlobalData);
  const [unreadCount, setUnreadCount] = useState(0);

  useEffect(() => {
    // if (!user) return;

    // const unsubscribe = dreamWorldProvider.onUnreadNotificationsCountChange(
    //   user.userData?.uid,
    //   (count) => {
    //     setUnreadCount(count);
    //   }
    // );

    // return () => unsubscribe();
  }, [user]);

  const navItems = [
    { name: "Uploads", icon: UploadCloud, href: "/uploads" },
    { name: "Events", icon: Calendar, href: "/events" },
    // { name: "Notifications", icon: Bell, href: "/notifications", notificationCount: unreadCount },
    { name: "DreamWorld Pro", icon: Star, href: "/pro" },
    { name: "Film director", href: "/film-director", icon: Film },
    { name: "Brand & Marketing", href: "/brand-marketing", icon: Briefcase },
    { name: "Onboarding & Tutorials", icon: Palette, href: "/onboarding" },
    { name: "About Us", icon: Info, href: "/about" },
    { name: "Privacy Policy", icon: Shield, href: "/privacy" },
    { name: "Terms of Service", icon: FileText, href: "/terms" },
    { name: "Logout", icon: LogOut, href: "/login" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[999]"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={onClose}
          />
          <motion.div
            className="fixed top-0 left-0 h-full w-64 bg-gray-900 shadow-lg z-[1000] p-6"
            variants={drawerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="flex items-center justify-between mb-8">
              <img
                src="https://i.imgur.com/2xHSjvB.jpeg"
                alt="Logo"
                style={{ borderRadius: "500px" }}
                className="w-8 h-8"
              />
              <button
                onClick={onClose}
                className="p-1 rounded-full hover:bg-gray-800"
              >
                <X className="w-6 h-6 text-white" />
              </button>
            </div>
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => {
                    // if (item.name === "DreamWorld Pro") {
                    //   eventBus.emit("fullscreen:enter");
                    // }
                    onClose();
                  }}
                  className="flex items-center space-x-4 p-3 rounded-lg text-white hover:bg-gray-800 transition-colors"
                >
                  <item.icon className="w-5 h-5" />
                  <span className="flex-1">{item.name}</span>
                  {/* {item.notificationCount && item.notificationCount > 0 && (
                    <div className="bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {item.notificationCount}
                    </div>
                  )} */}
                </Link>
              ))}
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileDrawer;
