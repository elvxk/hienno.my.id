const certificates = [
  {
    image: "/ser1.png",
    category: "EF SET English Certificate",
    date: "August 2025",
    title: "EF SET English Certificate 63/100 (C1 Advanced)",
  },
  {
    image: "/ser2.png",
    category: "Course Certificate",
    date: "March 2021",
    title:
      "Coursera x University of Illinois Urbana-Champaign. successful completion of Marketing in a Digital World",
  },
  {
    image: "/ser3.png",
    category: "App Design",
    date: "March 2021",
    title:
      "Coursera x University of Michigan. successful completion of Managing Talent",
  },
];

const Licenses = () => {
  return (
    <section
      id="licenses"
      className="bg-white px-5 py-16 md:px-8 md:py-20"
    >
      {/* CTA */}
      <div
        className="mx-auto max-w-3xl text-center"
        data-aos="fade-up"
      >
        <h2
          className="
            text-4xl
            font-medium
            leading-tight
            tracking-tight
            text-text
            md:text-5xl
            lg:text-6xl
          "
        >
          Have an Awsome Project
          <br />
          Idea?{" "}
          <span className="text-primary">
            Let’s Discuss
          </span>
        </h2>

        {/* Email */}
        <form
          className="
            mx-auto
            mt-6
            flex
            max-w-xl
            items-center
            rounded-full
            border
            border-slate-200
            bg-white
            p-1
            shadow-sm
          "
        >
          <div
            className="
              ml-1
              flex
              h-10
              w-10
              shrink-0
              items-center
              justify-center
              rounded-full
              bg-primary-bg
              text-primary
            "
          >
            ✉
          </div>

          <input
            type="email"
            placeholder="Enter Email Address"
            className="
              min-w-0
              flex-1
              bg-transparent
              px-4
              text-sm
              text-text
              outline-none
              placeholder:text-text
            "
          />

          <button
            type="submit"
            className="
              rounded-full
              bg-primary
              px-7
              py-3
              text-sm
              font-medium
              text-white
              transition-transform
              duration-300
              hover:scale-105
            "
          >
            Send
          </button>
        </form>
      </div>

      {/* Marquee */}
      <div
        className="
    relative
    mt-14
    overflow-hidden
    rounded-2xl
    bg-primary
    py-4
  "
        data-aos="fade-up"
      >
        <div className="-rotate-2">
          <div className="flex w-max animate-marquee whitespace-nowrap">
            {[1, 2].map((group) => (
              <div
                key={group}
                className="flex shrink-0"
                aria-hidden={group === 2}
              >
                {[
                  "Marketing",
                  "Sales",
                  "Business",
                  "Partnership",
                  "Communication",
                  "Development",
                ].map((item) => (
                  <span
                    key={`${group}-${item}`}
                    className="
                mx-2
                text-2xl
                font-medium
                text-dark
                md:text-3xl
              "
                  >
                    {item}
                    <span className="mx-3 text-white">✦</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Licenses */}
      <div className="mx-auto mt-14 max-w-7xl">

        {/* Header */}
        <div
          className="
            flex
            items-center
            justify-between
            gap-4
          "
          data-aos="fade-up"
        >
          <h2
            className="
              text-3xl
              font-semibold
              tracking-tight
              text-text
              md:text-4xl
            "
          >
            Licenses & Certifications
          </h2>

          <button
            type="button"
            className="
              shrink-0
              rounded-full
              bg-primary
              px-6
              py-3
              text-xs
              font-medium
              text-white
              transition-transform
              duration-300
              hover:scale-105
              md:px-8
              md:py-4
            "
          >
            See All
          </button>
        </div>

        {/* Cards */}
        <div
          className="
            mt-8
            grid
            grid-cols-1
            gap-8
            md:grid-cols-2
            lg:grid-cols-3
          "
        >
          {certificates.map((certificate, index) => (
            <div
              key={certificate.title}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Image */}
              <div className="group relative overflow-hidden rounded-3xl">
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="
                    aspect-[1.45/1]
                    w-full
                    object-cover
                    transition-transform
                    duration-500
                    group-hover:scale-105
                  "
                />

                {/* Arrow */}
                <button
                  type="button"
                  className="
                    absolute
                    bottom-0
                    right-0
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-full
                    bg-text
                    text-3xl
                    font-light
                    text-white
                    transition-transform
                    duration-300
                    group-hover:rotate-45
                    md:h-18
                    md:w-18
                  "
                  aria-label={`View ${certificate.title}`}
                >
                  ↗
                </button>
              </div>

              {/* Meta */}
              <div
                className="
                  mt-5
                  flex
                  flex-wrap
                  gap-x-6
                  gap-y-2
                  text-xs
                  text-text
                "
              >
                <span>
                  <span className="mr-2 text-primary">•</span>
                  Enno Nirmalasyah
                </span>

                <span>
                  <span className="mr-2 text-primary">•</span>
                  {certificate.date}
                </span>
              </div>

              {/* Category */}
              <div
                className="
                  mt-4
                  inline-flex
                  rounded-full
                  bg-slate-100
                  px-4
                  py-2
                  text-xs
                  text-text
                "
              >
                {certificate.category}
              </div>

              {/* Title */}
              <h3
                className="
                  mt-4
                  text-xl
                  leading-snug
                  text-text
                  md:text-2xl
                "
              >
                {certificate.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Licenses;
