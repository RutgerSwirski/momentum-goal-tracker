// import Image from "next/image";

import LandingAbout from "@/components/landing/About";
import LandingHero from "@/components/landing/Hero";

const LandingPage = () => {
  return (
    <div>
      <LandingHero />

      <LandingAbout />
    </div>
  );
};

export default LandingPage;
