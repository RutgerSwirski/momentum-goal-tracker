"use client";

import PrimaryButton from "@/components/buttons/PrimaryButton";
import NavbarLink from "./NavbarLink";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

const Navbar = () => {
  const navbarRef = useRef(null);

  // initially we need no BG set on the navbar, when the user scrolls, we need to add a bg color to the navbar
  // we can do this by adding a scroll event listener to the window object

  useEffect(() => {
    const handleScroll = () => {
      if (!navbarRef.current) return;

      if (window.scrollY > 0) {
        navbarRef.current.classList.add("bg-neutral_light_grey");
      } else {
        navbarRef.current.classList.remove("bg-neutral_light_grey");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      ref={navbarRef}
      className="fixed top-0 left-0 w-full z-10 bg-opacity-10 duration-150 transition-colors ease-in-out text-white flex justify-between items-center px-8 py-4"
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
      <ul className="flex items-center flex-shrink-0 text-white gap-12">
        <NavbarLink href="/about">About</NavbarLink>
        <NavbarLink href="/features">Features</NavbarLink>
        <NavbarLink href="/community">Community</NavbarLink>
        <NavbarLink href="/login">Login</NavbarLink>

        <NavbarLink href="/signup">
          <PrimaryButton>Sign Up</PrimaryButton>
        </NavbarLink>
      </ul>
    </nav>
  );
};

export default Navbar;
