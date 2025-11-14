"use client";

import { ChevronRight, Zap } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { NAV_LINKS } from "../../config/navigation";
import { selectUserGlobalData } from "../../store/dreamworldSlice";

const NavItemComponent: React.FC<{
  href: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  isActive: boolean;
  notificationCount?: number;
  onClick?: () => void;
}> = ({ href, name, icon: Icon, isActive, notificationCount, onClick }) => {
  return (
    <div>
      <Link
        to={href}
        onClick={onClick}
        className={`group flex items-center px-4 py-3 rounded-lg transition-all duration-200 
                   relative overflow-hidden border ${
                     isActive
                       ? "text-white bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-blue-400/30 shadow-lg"
                       : "text-slate-300 hover:text-white hover:bg-white/8 border-transparent hover:border-white/10"
                   }`}
      >
        <Icon
          className={`w-4 h-4 mr-3 transition-colors duration-200 ${
            isActive
              ? "text-blue-400"
              : "text-slate-400 group-hover:text-slate-300"
          }`}
        />

        <span className="font-medium text-sm flex-1">{name}</span>

        {notificationCount && notificationCount > 0 && (
          <div className="bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            {notificationCount}
          </div>
        )}

        <ChevronRight
          className={`w-4 h-4 transform transition-all duration-200 ${
            isActive
              ? "opacity-60 translate-x-1 text-blue-400"
              : "opacity-0 group-hover:opacity-50 group-hover:translate-x-1"
          }`}
        />

        {!isActive && (
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 transition-all duration-300 rounded-lg" />
        )}

        {isActive && (
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-gradient-to-b from-blue-400 to-purple-400 rounded-r-full" />
        )}
      </Link>
    </div>
  );
};

const DesktopNav: React.FC = () => {
  const location = useLocation();
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

  const maxVisibleItems = 99;
  const visibleLinks = NAV_LINKS.slice(0, maxVisibleItems);
  const overflowLinks = NAV_LINKS.slice(maxVisibleItems);
  const hasOverflow = NAV_LINKS.length > 99;

  return (
    <>
      <div
        className="hidden md:flex flex-col w-60 h-screen 
                 bg-gradient-to-b from-slate-900/95 via-slate-800/90 to-slate-900/95
                 text-white p-4 fixed z-30 backdrop-blur-xl 
                 border-r border-slate-700/30 shadow-xl"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/3 to-purple-600/3 pointer-events-none" />

        <div className="flex items-center mb-8 cursor-pointer p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-3 shadow-lg">
            <Zap className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Tokenize
            </h1>
            <p className="text-xs text-slate-300 font-medium">
              Pools, DEX, Tokenize
            </p>
          </div>
        </div>

        <nav className="flex flex-col flex-grow space-y-1 overflow-y-auto">
          {visibleLinks.map((link, index) => (
            <NavItemComponent
              key={link.href}
              href={link.href}
              name={link.name}
              icon={link.icon}
              isActive={location.pathname === link.href}
              notificationCount={
                link.name === "Notifications" ? unreadCount : undefined
              }
            />
          ))}

          {hasOverflow && (
            <div className="mt-4">
              <div className="px-4 py-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                More Options
              </div>
              <div className="space-y-1">
                {overflowLinks.map((link, index) => (
                  <NavItemComponent
                    key={link.href}
                    href={link.href}
                    name={link.name}
                    icon={link.icon}
                    isActive={location.pathname === link.href}
                  />
                ))}
              </div>
            </div>
          )}
        </nav>
      </div>
    </>
  );
};

export default DesktopNav;
