const stats = [
  {
    value: "35%",
    label: "Market Reach Growth",
  },
  {
    value: "30K+",
    label: "Content Views",
  },
  {
    value: "25+",
    label: "Partnerships Secured",
  },
  {
    value: "94%",
    label: "Customer Satisfaction",
  },
];

const MyImpact = () => {
  return (
    <section
      id="about"
      className="
        bg-white
      "
    >
      <div
        className="
          mx-auto
          grid
          items-center
          gap-10
          overflow-hidden
          rounded-4xl
          bg-slate-100
          px-6
          py-12
          md:grid-cols-2
          md:px-12
          md:py-16
          lg:px-20
        "
      >
        {/* Image */}
        <div
          className="
            relative
            mx-auto
            flex
            h-90
            w-full
            max-w-sm
            items-end
            justify-center
            md:h-105
            lg:h-115
          "
          data-aos="fade-right"
        >
          {/* Orange Shape */}
          <div
            className="
              absolute
              bottom-0
              left-1/2
              h-[85%]
              w-[75%]
              -translate-x-1/2
              rounded-[45%_55%_40%_50%]
              bg-primary
            "
          />

          {/* Person */}
          <img
            src="/nonow.png"
            alt="Enno"
            className="
              relative
              z-10
              h-full
              w-auto
              object-contain
              object-bottom
            "
          />
        </div>

        {/* Content */}
        <div
          className="relative z-10"
          data-aos="fade-left"
        >
          {/* Heading */}
          <h2
            className="
              text-4xl
              font-medium
              tracking-tight
              text-text
              md:text-5xl
              lg:text-6xl
            "
          >
            My <span className="text-primary">Impact?</span>
          </h2>

          {/* Description */}
          <p
            className="
              mt-8
              max-w-xl
              text-sm
              leading-relaxed
              text-text
              md:text-base
            "
          >
            Driving growth through data-driven marketing strategies,
            engaging content, and meaningful partnerships.
          </p>

          {/* Stats */}
          <div
            className="
              mt-10
              grid
              grid-cols-2
              gap-x-6
              gap-y-8
              lg:grid-cols-4
              lg:gap-6
            "
          >
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div
                  className="
                    text-3xl
                    font-medium
                    leading-none
                    text-text
                    md:text-4xl
                  "
                >
                  {stat.value}
                </div>

                <p
                  className="
                    mt-3
                    max-w-32
                    text-sm
                    leading-relaxed
                    text-slate-500
                  "
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Button */}
          <a
            href="#contact"
            className="
              mt-10
              inline-flex
              items-center
              justify-center
              rounded-2xl
              border
              border-dark
              px-8
              py-4
              text-base
              font-semibold
              text-dark
              transition-all
              duration-300
              hover:bg-dark
              hover:text-white
            "
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Connect with me
          </a>
        </div>
      </div>
    </section>
  );
};

export default MyImpact;
