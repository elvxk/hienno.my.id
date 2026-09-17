const achievements = [
  {
    title: "KMI EXPO XIV - National Representative",
    meta: "Kementerian Pendidikan dan Kebudayaan Republik Indonesia · 2023",
    description:
      "Represented Universitas Negeri Malang and connected with 3,000+ students nationwide, building networks and collaboration opportunities.",
    active: true,
  },
  {
    title:
      "P2MW (Program Pembinaan Mahasiswa Wirausaha) — National Grant Recipient",
    meta: "Kementerian Pendidikan dan Kebudayaan Republik Indonesia · 2023",
    description:
      "Secured Rp 15,000,000 funding to develop a student-led business initiative.",
    active: false,
  },
  {
    title: "PMW (Program Mahasiswa Wirausaha)",
    meta: "Universitas Negeri Malang · 2023",
    description:
      "Won entrepreneurship competition and received Rp 3,000,000 grant for business development.",
    active: true,
  },
  {
    title: "Festival Film Yogyakarta — 1st Place Short Movie",
    meta: "Festival Film Yogyakarta · Jun 2020",
    description:
      "Won 1st place (Grabag Award) for the short film “Angen”.",
    active: false,
  },
  {
    title:
      "Asian International Children's Film Festival — International Nominee",
    meta: "Hesynes Children's Film Festival · Sep 2019",
    description:
      "Short film nominated at the 12th Asian International Children's Film Festival in Hokkaido, Japan.",
    active: true,
  },
];

const Achievements = () => {
  return (
    <section
      id="achievements"
      className="bg-white"
    >
      <div
        className="
          relative
          mx-auto
          overflow-hidden
          rounded-4xl
          bg-cover
          bg-center
          bg-no-repeat
          px-6
          py-10
          md:px-16
          md:py-12
        "
        style={{
          backgroundImage: "url('/frame77.png')",
        }}
      >
        {/* Header */}
        <div
          className="
            relative
            z-10
            mx-auto
            max-w-2xl
            text-center
          "
          data-aos="fade-down"
        >
          <h2
            className="
              text-3xl
              font-medium
              tracking-tight
              text-white
              md:text-4xl
              lg:text-5xl
            "
          >
            Achievements &{" "}
            <span className="text-primary">
              Awards
            </span>
          </h2>

          <p
            className="
              mt-4
              text-xs
              leading-relaxed
              text-white
              md:text-sm
            "
          >
            Some highlights of the awards, recognitions, and milestones I
            have achieved along my journey.
          </p>
        </div>

        {/* Timeline */}
        <div
          className="
            relative
            z-10
            mx-auto
            mt-10
            max-w-6xl
            md:mt-8
          "
        >
          {/* Mobile Timeline */}
          <div
            className="
              absolute
              bottom-4
              left-4
              top-4
              border-l-2
              border-dashed
              border-white
              md:hidden
            "
          />

          {achievements.map((achievement, index) => (
            <div
              key={achievement.title}
              className="
                relative
                grid
                grid-cols-[2rem_1fr]
                gap-4
                pb-8
                last:pb-0
                md:grid-cols-[3rem_1fr]
                md:gap-5
                md:pb-6
              "
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Dot */}
              <div className="relative flex justify-center">
                {/* Desktop line */}
                {index !== achievements.length - 1 && (
                  <div
                    className="
                      absolute
                      left-1/2
                      top-8
                      h-[calc(100%+1.5rem)]
                      -translate-x-1/2
                      border-l-2
                      border-dashed
                      border-white
                      md:block
                    "
                  />
                )}

                <div
                  className="
                    relative
                    z-10
                    flex
                    h-7
                    w-7
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border-2
                    border-white
                    bg-dark
                    md:h-8
                    md:w-8
                  "
                >
                  <div
                    className={`
                      h-5
                      w-5
                      rounded-full
                      ${achievement.active
                        ? "bg-primary"
                        : "bg-dark"
                      }
                    `}
                  />
                </div>
              </div>

              {/* Content */}
              <div className="text-white">
                <h3
                  className="
                    text-base
                    font-medium
                    leading-tight
                    md:text-lg
                  "
                >
                  {achievement.title}
                </h3>

                <p
                  className="
                    mt-1
                    text-[8px]
                    leading-relaxed
                    text-white/60
                    md:text-[9px]
                  "
                >
                  {achievement.meta}
                </p>

                <p
                  className="
                    mt-2
                    max-w-4xl
                    text-[10px]
                    leading-relaxed
                    text-white
                    md:text-xs
                  "
                >
                  {achievement.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
