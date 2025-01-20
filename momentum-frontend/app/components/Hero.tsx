import Image from "next/image";
import PrimaryButton from "../../components/common/buttons/PrimaryButton";
import SecondaryButton from "../../components/common/buttons/SecondaryButton";

const LandingHero = () => {
  return (
    <section className="relative overflow-hidden flex flex-col md:flex-row items-center h-screen bg-gradient-to-br from-primary_teal to-primary_sky_blue justify-between px-8 md:px-24">
      {/* Left Content */}
      <div className="flex-1 flex-wrap">
        <div className="flex flex-col justify-center h-full gap-6 md:gap-12">
          {/* Headline and Description */}
          <div className="flex flex-col gap-4 md:gap-6">
            <h1 className="text-2xl md:text-4xl lg:text-6xl text-secondary_navy font-bold leading-tight">
              Start Small. Achieve Big. Keep the Momentum.
            </h1>
            <p className="text-sm md:text-base lg:text-lg text-neutral_light_grey">
              Momentum helps you overcome procrastination, break down goals, and
              celebrate progress—one step at a time.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
            <PrimaryButton>Get Started</PrimaryButton>
            <SecondaryButton text="Learn More" />
          </div>
        </div>
      </div>

      {/* Decorative Background */}
      <div className="absolute bottom-0 right-0 h-full bg-[url('/images/wave.svg')] bg-no-repeat bg-cover pointer-events-none opacity-25 w-full md:w-5/6 hidden sm:block" />

      {/* Right Image */}
      <div className="relative flex-1 flex justify-center md:justify-end mt-8 md:mt-0">
        <Image
          src="/images/step-up.svg"
          alt="Step Up"
          width={300} // Smaller image for mobile
          height={300}
          className="md:w-[500px] md:h-[500px]" // Adjust size for larger screens
        />
      </div>
    </section>
  );
};

export default LandingHero;
