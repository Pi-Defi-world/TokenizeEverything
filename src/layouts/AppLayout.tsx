import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import DesktopNav from "../components/nav/DesktopNav";
import MobileNav from "../components/nav/MobileNav";
import useMediaQuery from "../hooks/useMediaQuery";
import DesktopHeader from "../components/nav/DesktopHeader";
import { EXCLUDED_ROUTES } from "../config/navigation";
import MobileTopNav from "../components/nav/MobileTopNav";

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {

  }, [location, dispatch]);



  const mobileFullscreen = !isDesktop && isFullscreen; // ✅ fullscreen only for mobile
  const shouldShowNav = !EXCLUDED_ROUTES.includes(location.pathname);

  if (!shouldShowNav) return <>{children}</>;

  return (
    <div
      className={`flex bg-gray-950 text-white min-h-screen ${
        mobileFullscreen ? "overflow-hidden" : ""
      }`}
    >
      {/* Desktop sidebar (only shown when desktop & not fullscreen) */}
      {isDesktop && (
        <aside className="w-60 flex-shrink-0 hidden md:block">
          <DesktopNav />
        </aside>
      )}

      {/* MAIN: flexible, fills remaining space */}
      <main
        className={`flex-1 flex flex-col min-h-screen w-full ${
          !isDesktop && !mobileFullscreen ? "pt-16 pb-28" : ""
        }`}
      >
        {isDesktop && <DesktopHeader />}
        <div className="w-full h-full min-h-screen">{children}</div>
      </main>

      {/* Mobile navs (hidden on desktop or fullscreen mobile) */}
      {!isDesktop && !mobileFullscreen && (
        <div className="md:hidden">
          <MobileTopNav />
          <MobileNav />
        </div>
      )}
    </div>
  );
};

export default AppLayout;
