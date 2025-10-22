import React, { useState, useEffect } from "react";
import { Sun, Moon, Globe, BookOpen, Gift, Bell, User } from "lucide-react";
import FluxCredits from "./FluxCredits";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUserGlobalData } from "../../store/dreamworldSlice";

const DesktopHeader: React.FC = () => {
  const [hasGift, setHasGift] = useState(false);
  const userGlobalData = useSelector(selectUserGlobalData);

 

  return (
    <>
      <header className="sticky top-0 z-50 hidden md:flex justify-between items-center p-4 bg-slate-900 text-white border-b border-slate-800">
        <div>
          {/* Placeholder for Logo or Branding */}
          <h1 className="text-xl font-bold">DreamWorld</h1>
        </div>
        <div className="flex items-center gap-4">
          <FluxCredits />
          <button

            className="flex items-center gap-2 text-sm font-medium text-white hover:text-gray-300"
          >
            <Gift size={20} className="text-yellow-400" />
            <span>{hasGift ? "Claim Gift" : "Gift"}</span>
          </button>
          <Link
            to="/onboarding"
            className="flex items-center gap-2 text-sm font-medium text-white hover:text-gray-300"
          >
            <BookOpen size={20} className="text-purple-400" />
            <span>Tutorial</span>
          </Link>
          <Link
            to="/notifications"
            className="flex items-center gap-2 text-sm font-medium text-white hover:text-gray-300"
          >
            <Bell size={20} className="text-purple-400" />
          </Link>
          <Link
            to="/profile"
            className="flex items-center gap-2 text-sm font-medium text-white hover:text-gray-300"
          >
            <User size={20} className="text-purple-400" />
          </Link>
        </div>
      </header>
    </>
  );
};

export default DesktopHeader;
