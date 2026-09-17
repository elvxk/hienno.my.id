const experiences = [
  {
    company: "Freelancer",
    period: "Feb 2023 - August 2023",
    position: "Freelancer Content Creator | Digital Strategist",
    description:
      "Created high-performing social media content for multiple brands, achieving 35% reach growth and videos up to 30K views.",
    active: true,
  },
  {
    company: "PT Garuda Indonesia (Persero)",
    period: "Aug 2023 - Jan 2024",
    position: "Sales & Marketing Internship",
    description:
      "Supported 30 company visits, helping secure 25 partnerships, while assisting proposal preparation and cross-department collaboration.",
    active: false,
  },
  {
    company: "PT Paragon Technology and Innovation",
    period: "Jan 2024 - August 2024",
    position: "Leader of Paragon English Club (Contract)",
    description:
      "Led an English Club for 80+ participants, developing 10+ interactive modules and achieving 95% positive feedback.",
    active: true,
  },
  {
    company: "Cleopatra Extra Wijaya",
    period: "Jan 2025 - Jul 2025",
    position: "Marketing Event",
    description:
      "Planned and executed marketing for corporate and government events, managing 500+ participant events and delivering services for institutions including Kejaksaan RI.",
    active: false,
  },
  {
    company: "PT Jagoan Hosting Indonesia",
    period: "Oct 2025 - Present",
    position: "Customer Billing & Provisioning",
    description:
      "Handled service activation and sales, achieving 98.10% satisfaction while ensuring smooth onboarding for hosting, domain, and VPS services.",
    active: true,
  },
];

const WorkExperience = () => {
  return (
    <section
      id="resume"
      className="bg-white px-6 py-20 md:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">

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
          My <span className="text-primary">Work Experience</span>
        </h2>

        {/* Timeline */}
        <div className="relative mt-16">

          {/* Mobile Timeline Line */}
          <div
            className="
              absolute
              left-4
              top-4
              bottom-4
              border-l-2
              border-dashed
              border-slate-400
              md:hidden
            "
          />

          {experiences.map((experience, index) => (
            <div
              key={experience.company}
              className="
                relative
                grid
                grid-cols-1
                md:grid-cols-[1fr_4rem_1.7fr]
              "
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >

              {/* Company */}
              <div
                className="
                  pb-5
                  pl-12
                  md:pr-10
                  md:pb-14
                  md:pl-0
                "
              >
                <h3
                  className="
                    text-2xl
                    font-semibold
                    leading-tight
                    text-text
                    md:text-3xl
                  "
                >
                  {experience.company}
                </h3>

                <p
                  className="
                    mt-2
                    text-base
                    text-slate-400
                    md:text-lg
                  "
                >
                  {experience.period}
                </p>
              </div>

              {/* Timeline Dot */}
              <div
                className="
                  absolute
                  left-0
                  top-0
                  flex
                  justify-center
                  md:relative
                  md:left-auto
                  md:top-auto
                "
              >
                <div
                  className="
                    relative
                    z-10
                    h-8
                    w-8
                    rounded-full
                    border-2
                    border-dashed
                    border-text
                    bg-white
                    p-1
                    md:h-10
                    md:w-10
                  "
                >
                  <div
                    className={`
                      h-full
                      w-full
                      rounded-full
                      ${experience.active
                        ? "bg-primary"
                        : "bg-text"
                      }
                    `}
                  />
                </div>

                {/* Desktop Line */}
                {index !== experiences.length - 1 && (
                  <div
                    className="
                      absolute
                      top-10
                      h-full
                      border-l-2
                      border-dashed
                      border-slate-400
                      md:block
                    "
                  />
                )}
              </div>

              {/* Position */}
              <div
                className="
                  pb-12
                  pl-12
                  md:pl-4
                  md:pb-14
                "
              >
                <h3
                  className="
                    text-2xl
                    font-semibold
                    leading-tight
                    text-text
                    md:text-3xl
                  "
                >
                  {experience.position}
                </h3>

                <p
                  className="
                    mt-3
                    max-w-2xl
                    text-sm
                    leading-relaxed
                    text-text
                    md:text-base
                  "
                >
                  {experience.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WorkExperience;
