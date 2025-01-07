// import Image from "next/image";

import LandingAbout from "@/components/landing/About";
import LandingHero from "@/components/landing/Hero";
import Navbar from "@/components/shared/navbar/Navbar";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <LandingHero />

      <LandingAbout />
    </div>
  );
};

export default LandingPage;
