const HPhoto = () => {
  return (
    <>
      {/* Photo Background */}
      <div className="absolute -bottom-92 left-1/2 h-[95%] w-[80%] -translate-x-1/2 rounded-full bg-primary-bg md:-bottom-120 md:h-230 md:w-240"
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-anchor-placement="top-bottom"
      />

      {/* Photo */}
      <div
        className="absolute bottom-[0.2rem] left-1/2 -translate-x-1/2 translate-y-[0.2rem] z-10"
      >
        <img
          src="/enno1.webp"
          alt="Enno"
          className="block h-auto w-40 md:w-68 object-contain"
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-anchor-placement="top-bottom"
        />
      </div>
    </>
  )
}

export default HPhoto;
