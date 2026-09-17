const HCta = () => {
  return (
    <div
      className="absolute bottom-12 left-1/2 z-20 flex -translate-x-1/2 translate-y-8 md:translate-y-2 items-center rounded-full border border-white/60 bg-white/20 p-1 backdrop-blur-md"
      data-aos="fade-up"
      data-aos-delay="500"
    >
      {/* Portfolio */}
      <a
        href="#portfolio"
        className="flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-base font-semibold text-white transition hover:scale-105"
      >
        Portfolio
        <span className="text-xl leading-none">↗</span>
      </a>

      {/* Detail */}
      <a
        href="#detail"
        className="rounded-full px-7 py-3 text-base text-white font-semibold" >
        Detail
      </a>
    </div>
  )
}

export default HCta;
