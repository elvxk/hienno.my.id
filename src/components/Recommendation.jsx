const Recommendation = () => {
  return (
    <section
      id="recommendation"
      className="
        bg-white
        px-6
        py-16
        md:px-10
        md:py-20
        lg:px-16
      "
    >
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <h2
          className="
            text-center
            text-4xl
            font-medium
            tracking-tight
            text-text
            md:text-5xl
            lg:text-6xl
          "
          data-aos="fade-up"
        >
          Professional{" "}
          <span className="text-primary">
            Recommendation
          </span>
        </h2>

        {/* Recommendation */}
        <div
          className="relative mt-8"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          <img
            src="/recommendation.png"
            alt="Professional Recommendation"
            className="
              block
              h-auto
              w-full
              object-contain
            "
          />

          {/* Quote Decoration */}
          <div
            className="
              absolute
              -right-2
              -top-5
              flex
              gap-1
              text-7xl
              font-bold
              leading-none
              text-text
              md:-right-4
              md:-top-8
              md:text-8xl
            "
            aria-hidden="true"
          >
            <span>”</span>
            <span>”</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Recommendation;
