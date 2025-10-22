import {
  Home,
  Plus,
  Library,
  Compass,
  User,
  Settings,
  Award,
  Calendar,
  Star,
  ToolCase,
  UploadCloud,
  Users,
  MessageSquare,
  Bell,
  LogOut,
  Film,
  Briefcase,
} from "lucide-react";

export const NAV_LINKS = [
  { name: "Home", href: "/home", icon: Home },
  
];
export const MOBILE_NAV_LINKS = [
  { name: "Home", href: "/home", icon: Home, isCentral:false },
 
  
];

export const EXCLUDED_ROUTES = [
  "/login",
  "/register",
  "/onboarding",
  "/landing",
];
