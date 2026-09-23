import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="
        bg-white
      "
    >
      <div
        className="
          mx-auto
          rounded-t-4xl
          bg-dark
          px-8
          py-10
          text-white
          md:py-12
          lg:px-10
        "
      >
        {/* Top */}
        <div
          className="
            flex
            flex-col
            gap-6
            md:flex-row
            md:items-center
            md:justify-between
          "
          data-aos="fade-up"
        >
          <h2
            className="
              text-3xl
              font-medium
              tracking-tight
              md:text-4xl
            "
          >
            Lets Connect there
          </h2>

          <a
            href="https://linkedin.com/in/enno-nirmalasyah-0732321b9"
            target="_blank"
            rel="noreferrer"
            className="
              inline-flex
              w-fit
              items-center
              gap-2
              rounded-full
              bg-primary
              px-6
              py-3
              text-sm
              font-medium
              text-white
              transition-transform
              duration-300
              hover:scale-105
            "
          >
            LinkedIn
            <span className="text-lg leading-none">
              ↗
            </span>
          </a>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-slate-600" />

        {/* Content */}
        <div
          className="
            grid
            grid-cols-1
            gap-10
            md:grid-cols-[1.5fr_1fr_1fr]
            md:gap-8
          "
        >
          {/* Brand */}
          <div data-aos="fade-right">
            <img
              src="/enlogo.png"
              alt="Enno Nirmalasyah"
              className="w-auto object-contain"
            />

            <p
              className="
                mt-6
                max-w-md
                text-sm
                leading-relaxed
                text-white/90
              "
            >
              Interested in working together or discussing new
              opportunities? Feel free to reach out, I’d love to connect.
            </p>

            {/* Social */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://linkedin.com/in/enno-nirmalasyah-0732321b9"
                target="_blank"
                aria-label="LinkedIn"
                className="text-sm transition-opacity hover:opacity-60"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://www.instagram.com/enonirmalasyh/"
                target="_blank"
                aria-label="instagram"
                className="text-sm transition-opacity hover:opacity-60"
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.facebook.com/enno.nirmala"
                target="_blank"
                aria-label="Facebook"
                className="text-sm transition-opacity hover:opacity-60"
              >
                <FaFacebook />
              </a>

            </div>
          </div>

          {/* Navigation */}
          <div data-aos="fade-up">
            <h3
              className="
                text-sm
                font-medium
                text-primary
              "
            >
              Navigation
            </h3>

            <nav className="mt-4 flex flex-col gap-3 text-xs">
              <a href="#home" className="transition-opacity hover:opacity-60">
                Home
              </a>

              <a href="#about" className="transition-opacity hover:opacity-60">
                About
              </a>

              <a href="#service" className="transition-opacity hover:opacity-60">
                Service
              </a>

              <a href="#resume" className="transition-opacity hover:opacity-60">
                Resume
              </a>

              <a href="#project" className="transition-opacity hover:opacity-60">
                Project
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div data-aos="fade-up">
            <h3
              className="
                text-sm
                font-medium
                text-primary
              "
            >
              Contact
            </h3>

            <div className="mt-4 flex flex-col gap-3 text-xs">
              <a
                href="mailto:ennonirmala18@gmail.com"
                className="transition-opacity hover:opacity-60"
              >
                ennonirmala18@gmail.com
              </a>

              <a
                href="https://hienno.my.id"
                target="_blank"
                rel="noreferrer"
                className="transition-opacity hover:opacity-60"
              >
                hienno.my.id
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-slate-600" />

        {/* Copyright */}
        <div
          className="
            text-xs
            text-white/90
            md:text-sm
          "
          data-aos="fade-up"
        >
          Copyright© {currentYear} Enno Nirmalasyah. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
