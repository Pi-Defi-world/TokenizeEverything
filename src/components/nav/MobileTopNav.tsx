import { motion } from "framer-motion";
import { Bell, Flame, Gift, Menu } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectUserGlobalData } from "../../store/dreamworldSlice";
import MobileDrawer from "./MobileDrawer";

const MobileTopNav: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [hasGift, setHasGift] = useState(false);
  const user = useSelector(selectUserGlobalData);
  const [unreadCount, setUnreadCount] = useState(0);
  const userGlobalData = useSelector(selectUserGlobalData);
  

  

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

  useEffect(() => {
    const lastClaimedTimestamp = localStorage.getItem("lastClaimedTimestamp");
    if (lastClaimedTimestamp) {
      const lastClaimedDate = new Date(parseInt(lastClaimedTimestamp, 10));
      const now = new Date();
      const diffInHours =
        (now.getTime() - lastClaimedDate.getTime()) / (1000 * 60 * 60);
      if (diffInHours < 24) {
        setHasGift(false);
      } else {
        setHasGift(true);
      }
    } else {
      setHasGift(true);
    }
  }, []);

  return (
    <>
      <motion.div
        className="md:hidden fixed top-0 left-0 right-0 h-16 bg-gray-900 shadow-md z-50 flex items-center justify-between px-4"
        initial={{ y: -64 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="flex items-center space-x-4">
          <button onClick={() => setIsDrawerOpen(true)}>
            <Menu className="w-6 h-6 text-white" strokeWidth={1.5} />
          </button>
          <h1 className="text-lg font-bold text-white">TokenFlow</h1>
        </div>
        <div className="flex items-center space-x-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Gift
              className={`w-6 h-6 ${
                hasGift ? "text-yellow-400" : "text-white"
              }`}
              strokeWidth={1.5}
            />
          </motion.button>
          <Link
            to="/buy"
            className="flex items-center bg-gray-800 rounded-full px-3 py-1"
          >
            <Flame className="w-5 h-5 text-orange-500 mr-1" strokeWidth={1.5} />
            <span className="text-white font-semibold text-sm">
              {0}
            </span>
          </Link>
          <Link to="/notifications">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <div className="relative">
                <Bell className="w-6 h-6 text-white" strokeWidth={1.5} />
                {unreadCount > 0 && (
                  <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                    {unreadCount}
                  </div>
                )}
              </div>
            </motion.button>
          </Link>
        </div>
      </motion.div>
      <MobileDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />
    </>
  );
};

export default MobileTopNav;
