// import Image from "next/image";

import LandingAbout from "@/app/components/About";
import LandingHero from "@/app/components/Hero";
import Navbar from "@/components/navbar/Navbar";

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
