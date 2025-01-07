import Image from "next/image";
import PrimaryButton from "../buttons/PrimaryButton";
import SecondaryButton from "../buttons/SecondaryButton";

const LandingHero = () => {
  return (
    <section className="relative overflow-hidden flex  items-center h-screen bg-gradient-to-br from-primary_teal to-primary_sky_blue justify-between px-24">
      <div className="flex-1">
        <div className="flex flex-col justify-center h-screen gap-12">
          <div className="flex gap-6 flex-col">
            <h1 className="text-headline text-secondary_navy">
              Start Small. Achieve Big. Keep the Momentum.
            </h1>

            <p className="text-subheadline text-neutral_light_grey ">
              Momentum helps you overcome procrastination, break down goals, and
              celebrate progress—one step at a time.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <PrimaryButton text="Get Started" />
            <SecondaryButton text="Learn More" />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 h-full  bg-[url('/images/wave.svg')] bg-no-repeat bg-cover pointer-events-none opacity-25 w-5/6" />

      <div className="relative flex-1 flex justify-end">
        <Image
          src="/images/step-up.svg"
          alt="Step Up"
          width={500}
          // height auto
          height={500}
        />
      </div>
    </section>
  );
};

export default LandingHero;
