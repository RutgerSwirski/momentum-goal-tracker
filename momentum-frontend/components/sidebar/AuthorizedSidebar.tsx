"use client";

// import NavbarLink from "./NavbarLink";
import Image from "next/image";
import Link from "next/link";
import NavbarLink from "../navbar/NavbarLink";
import { useAtom } from "jotai";
import { sidebarExpandedAtom } from "./sidebarAtoms";
import PrimaryButton from "../buttons/PrimaryButton";

const AuthorizedSidebar = () => {
  // create an atom to remember the user preference for the sidebar
  const [isExpanded, setExpanded] = useAtom(sidebarExpandedAtom);

  return (
    <aside
      className={` sticky top-4  px-8 py-8 bg-primary_teal flex flex-col gap-8 ml-4 mt-4 mb-4 rounded-md 
       h-[calc(100vh-2rem)]
        transition-all duration-300
        ${isExpanded ? "w-64" : "w-16"}`}
    >
      <Link href="/">
        <Image
          src="/images/logo.svg"
          alt="Momentum Logo"
          width={0}
          height={0}
          style={{ width: "auto", height: "auto" }}
        />
      </Link>

      <button
        className="text-white"
        onClick={() => setExpanded(!isExpanded)}
        aria-label="expand / collapse"
      >
        expand / collapse
      </button>
      <div className="flex flex-col justify-between h-full">
        <ul className="flex flex-col flex-shrink-0 text-white gap-6">
          <NavbarLink href="/dashboard">Dashboard</NavbarLink>
          <NavbarLink href="/my-goals">My Goals</NavbarLink>
          <NavbarLink href="/community">Community</NavbarLink>
          <NavbarLink href="/achievements">Achievements</NavbarLink>
          <NavbarLink href="/calendar">Calendar</NavbarLink>
        </ul>

        <ul className="flex flex-col flex-shrink-0 text-white gap-6">
          <NavbarLink href="/profile">Profile</NavbarLink>

          <NavbarLink href="/settings">Settings</NavbarLink>
          {/* help and support */}

          <NavbarLink href="/help">Help</NavbarLink>

          <NavbarLink href="/logout">Logout</NavbarLink>
        </ul>
      </div>
    </aside>
  );
};

export default AuthorizedSidebar;
