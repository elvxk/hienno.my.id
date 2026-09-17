import WCard from "./whatido/WCard";

const WhatIDo = () => {
  return (
    <section id="service">
      <div
        className="
          relative
          min-h-dvh
          overflow-hidden
          rounded-4xl
          bg-cover
          bg-center
          bg-no-repeat
          px-6
          py-12
          md:px-28
          md:py-16
        "
        style={{
          backgroundImage: "url('/frame327.png')",
        }}
      >
        {/* Overlay */}
        <div
          className="
            absolute
            inset-x-0
            top-0
            h-72
            bg-linear-to-b
            from-dark/50
            via-dark/20
            to-transparent
          "
        />

        {/* Header */}
        <div
          className="
            relative
            z-10
            flex
            flex-col
            gap-6
            md:flex-row
            md:items-start
            md:justify-between
          "
        >
          {/* Heading */}
          <h2
            className="
              mt-5
              text-4xl
              font-medium
              tracking-tight
              text-white
              md:mt-10
              md:text-5xl
            "
          >
            What <span className="text-primary">I Do</span>
          </h2>

          {/* Description */}
          <p
            className="
              mt-5
              max-w-lg
              text-sm
              leading-relaxed
              text-white
              md:mt-10
              md:text-base
            "
            data-aos="fade-left"
          >
            I focus on developing marketing strategies, building
            partnerships, and creating impactful campaigns that help
            brands grow and connect with their audience.
          </p>
        </div>
        {/* Cards */}
        <div
          className="
    relative
    z-10
    mt-12
    grid
    grid-cols-1
    gap-5
          md:mt-38
    md:grid-cols-2
    lg:grid-cols-3
  "
        >
          <WCard
            title="Marketing Strategy"
            image="/service1.png"
          />

          <WCard
            title="Partnership Development"
            image="/service2.png"
          />

          <WCard
            title="Customer Experience"
            image="/service3.png"
          />
        </div>

      </div>
    </section>
  );
};

export default WhatIDo;
