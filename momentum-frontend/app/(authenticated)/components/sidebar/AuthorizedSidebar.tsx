"use client";

// import NavbarLink from "./NavbarLink";
import axiosInstance from "@/utils/axiosInstance";
import { useAtom } from "jotai";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { sidebarExpandedAtom } from "./sidebarAtoms";
import NavbarLink from "@/components/navbar/NavbarLink";

const AuthorizedSidebar = () => {
  // create an atom to remember the user preference for the sidebar
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

  return (
    <aside
      className={` sticky top-0  px-8 py-8 bg-primary_teal flex flex-col gap-8 h-screen transition-all duration-300 ${
        isExpanded ? "w-64" : "w-16"
      }`}
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
          <NavbarLink href="/goals">My Goals</NavbarLink>
          <NavbarLink href="/community">Community</NavbarLink>
          <NavbarLink href="/achievements">Achievements</NavbarLink>
          <NavbarLink href="/calendar">Calendar</NavbarLink>
        </ul>

        <ul className="flex flex-col flex-shrink-0 text-white gap-6">
          <NavbarLink href="/profile">Profile</NavbarLink>

          <NavbarLink href="/settings">Settings</NavbarLink>
          {/* help and support */}

          <NavbarLink href="/help">Help</NavbarLink>

          <button className="text-white" onClick={handleLogout}>
            Logout
          </button>
        </ul>
      </div>
    </aside>
  );
};

export default AuthorizedSidebar;
