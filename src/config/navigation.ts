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
  LucideSquircleDashed,
  CreditCard,
  Zap,
} from "lucide-react";

export const NAV_LINKS = [
  { name: "Home", href: "/home", icon: Home },
    { name: "Liquidity Pools", href: "/liquidity_pools", icon: LucideSquircleDashed },
  { name: "Dex", href: "/dex", icon: CreditCard },
  { name: "Tokenize", href: "/tokenize", icon: Zap },
  { name: "Settings", href: "/settings", icon: Settings },

];
export const MOBILE_NAV_LINKS = [
  { name: "Home", href: "/home", icon: Home, isCentral:false },
    { name: "Pools", href: "/liquidity_pools", icon: LucideSquircleDashed },
  { name: "Dex", href: "/dex", icon: CreditCard },
  { name: "Tokenize", href: "/tokenize", icon: Zap },
  { name: "Settings", href: "/settings", icon: Settings },
  
];

export const EXCLUDED_ROUTES = [
  "/login",
  "/register",
  "/onboarding",
  "/landing",
];
