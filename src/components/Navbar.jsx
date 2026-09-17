import { useState } from "react";

const navItems = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Service",
    href: "#service",
  },
  {
    label: "Resume",
    href: "#resume",
  },
  {
    label: "Project",
    href: "#licenses",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="absolute left-0 top-0 z-50 w-full px-4 pt-4 sm:px-6 md:px-8 md:pt-12 lg:px-10">
      <nav className="mx-auto max-w-7xl">
        {/* Navbar */}
        <div
          data-aos="fade-down"
          data-aos-duration="1000"
          className="flex h-14 items-center justify-between rounded-full bg-[#171717] px-4 text-white shadow-lg sm:h-16 sm:px-5 md:h-15 md:px-2"
        >
          {/* Mobile Logo */}
          <a
            href="#home"
            className="md:hidden flex-1 items-center justify-center mt-6"
          >
            <img
              src="/enlogo.png"
              alt="Enno Nirmalasyah"
              className="object-contain h-36 w-auto"
            />
          </a>

          {/* Desktop Left Navigation */}
          <div className="hidden flex-1 items-center md:flex">
            {navItems.slice(0, 3).map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                className={`
                  rounded-full px-5 py-3 text-sm
                  transition-all duration-300
                  lg:px-7
                  ${index === 0
                    ? "bg-[#ff843d] font-medium"
                    : "hover:text-[#ff843d]"
                  }
                `}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Logo */}
          <a
            href="#home"
            className="hidden flex-1 items-center justify-center md:flex mt-6"
          >
            <img
              src="/enlogo.png"
              alt="Enno Nirmalasyah"
              className="object-contain"
            />
          </a>

          {/* Desktop Right Navigation */}
          <div className="hidden flex-1 items-center justify-end md:flex">
            {navItems.slice(3).map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="rounded-full px-4 py-3 text-sm transition-all duration-300 hover:text-[#ff843d] lg:px-6"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20 md:hidden"
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <svg
                width="19"
                height="19"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  d="M6 6L18 18M18 6L6 18"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg
                width="19"
                height="19"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  d="M4 7H20M4 12H20M4 17H20"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`
            overflow-hidden transition-all duration-300 md:hidden
            ${isOpen
              ? "mt-2 max-h-125 opacity-100"
              : "max-h-0 opacity-0"
            }
          `}
        >
          <div className="rounded-3xl bg-[#171717] p-3 shadow-xl">
            {navItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                onClick={closeMenu}
                className={`
                  block rounded-2xl px-5 py-3.5 text-sm
                  transition-all duration-300
                  ${index === 0
                    ? "bg-[#ff843d] text-white"
                    : "text-white hover:bg-white/10"
                  }
                `}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
