"use client";

import axiosInstance from "@/utils/axiosInstance";
import {
  ArrowLeftEndOnRectangleIcon,
  BellIcon,
  CalendarIcon,
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  Cog6ToothIcon,
  FlagIcon,
  QuestionMarkCircleIcon,
  Squares2X2Icon,
  TrophyIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import { useAtom } from "jotai";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { sidebarExpandedAtom } from "./sidebarAtoms";

// Sidebar Link Component with Tooltip
const SidebarLink = ({ href, icon: Icon, label, isExpanded }) => (
  <Link className="relative flex items-center gap-2 group" href={href}>
    <Icon className="h-5 w-5 text-white shrink-0" />
    <span
      className={`whitespace-nowrap overflow-hidden transition-all duration-300 ${
        isExpanded ? "opacity-100 max-w-xs" : "opacity-0 max-w-0"
      }`}
      style={{ display: isExpanded ? "inline" : "inline-block" }}
    >
      {label}
    </span>
    {/* Tooltip */}
    {!isExpanded && (
      <span className="absolute left-full ml-2 whitespace-nowrap bg-black text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {label}
      </span>
    )}
  </Link>
);

// Sidebar Section Component
const SidebarSection = ({ links, isExpanded }) => (
  <ul className="flex flex-col flex-shrink-0 text-white gap-6">
    {links.map(({ href, icon, label }) => (
      <SidebarLink
        key={href}
        href={href}
        icon={icon}
        label={label}
        isExpanded={isExpanded}
      />
    ))}
  </ul>
);

// Authorized Sidebar Component
const AuthorizedSidebar = () => {
  const [isExpanded, setExpanded] = useAtom(sidebarExpandedAtom);
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await axiosInstance.post("/auth/logout");
      router.push("/login");
    } catch (error) {
      console.error("Logout failed: ", error);
    }
  };

  const topLinks = [
    { href: "/dashboard", icon: Squares2X2Icon, label: "Dashboard" },
    { href: "/goals", icon: FlagIcon, label: "My Goals" },
    { href: "/network", icon: UsersIcon, label: "Network" },
    { href: "/milestones", icon: TrophyIcon, label: "Milestones" },
    { href: "/calendar", icon: CalendarIcon, label: "Calendar" },
  ];

  const bottomLinks = [
    { href: "/notifications", icon: BellIcon, label: "Notifications" },
    { href: "/account", icon: Cog6ToothIcon, label: "Account" },
    { href: "/help", icon: QuestionMarkCircleIcon, label: "Help" },
  ];

  return (
    <aside
      className={`sticky top-0 px-8 py-12 bg-primary_teal flex flex-col gap-8 h-screen transition-all duration-300 ${
        isExpanded ? "w-60" : "w-20"
      }`}
    >
      {/* Logo */}
      <Link href="/">
        {isExpanded ? (
          <Image
            src="/images/logo.svg"
            alt="Momentum Logo"
            width={150} // Set explicit width for the expanded logo
            height={64} // Set explicit height for the expanded logo
            className="object-contain" // Ensures the image scales properly within its dimensions
          />
        ) : (
          <Image
            src="/images/Logo.svg"
            alt="Momentum Logo"
            width={isExpanded ? 64 : 48} // Dynamically set size
            height={isExpanded ? 64 : 48}
            className={`object-contain transition-all duration-300 ${
              isExpanded ? "w-16 h-16" : "w-12 h-12"
            }`}
            style={{ flexShrink: 0 }} // Prevent shrink behavior
          />
        )}
      </Link>

      {/* Expand/Collapse Button */}
      <button
        className="text-white absolute top-20 right-0 p-2 rounded-l-full bg-primary_sky_blue"
        onClick={() => setExpanded(!isExpanded)}
        aria-label="expand / collapse"
      >
        {isExpanded ? (
          <ChevronDoubleLeftIcon className="h-6 w-6" />
        ) : (
          <ChevronDoubleRightIcon className="h-6 w-6" />
        )}
      </button>

      {/* Links */}
      <div className="flex flex-col justify-between h-full mt-12">
        <SidebarSection links={topLinks} isExpanded={isExpanded} />

        <div className={`flex flex-col gap-6`}>
          <SidebarSection links={bottomLinks} isExpanded={isExpanded} />

          <button
            className="text-white flex items-center gap-2"
            onClick={handleLogout}
          >
            <ArrowLeftEndOnRectangleIcon className="h-5 w-5" />
            {isExpanded ? "Logout" : ""}
            {!isExpanded && (
              <span className="absolute left-full ml-2 whitespace-nowrap bg-black text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Logout
              </span>
            )}
          </button>
        </div>
      </div>
    </aside>
  );
};

export default AuthorizedSidebar;
