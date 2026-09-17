const HExperience = () => {
  return (
    <div
      className="absolute bottom-58 right-[8%] z-20 text-center md:bottom-98 md:right-[10%]"
      data-aos="fade-left"
      data-aos-delay="400"
    >
      {/* Stars */}
      <div className="flex justify-center gap-1 text-primary text-xl md:text-4xl">
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
      </div>

      {/* Experience */}
      <div className="mt-2">
        <div className="text-xl font-semibold leading-none text-dark md:text-4xl">
          1 Year
        </div>

        <div className="mt-1 text-xs text-text md:text-sm">
          Experince
        </div>
      </div>
    </div>
  );
};

export default HExperience;
