import HCta from "./hero/HCta";
import HDesc from "./hero/HDesc";
import HExperience from "./hero/HExperience";
import HHello from "./hero/HHello";
import HPhoto from "./hero/HPhoto";
import HTitle from "./hero/HTitle";

const Hero = () => {
  return (
    <section id="home" className="relative h-dvh w-full overflow-hidden bg-white">
      <div className="mx-auto flex flex-col h-full max-w-7xl items-center px-5 pt-32 md:pt-52 lg:pt-68">

        {/* Helo */}
        <HHello />

        {/* Title */}
        <HTitle />

        {/* Photo */}
        <HPhoto />

        {/* Description */}
        <HDesc />
        <HExperience />

        {/* CTA */}
        <HCta />

      </div>
    </section>
  );
};

export default Hero;
