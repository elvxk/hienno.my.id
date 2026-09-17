import HDecoTitle from "./HDecoTitle";

const HTitle = () => {
  return (
    <div className="text-center"
      data-aos="fade-up"
      data-aos-delay="150"
    >
      <h1 className="text-5xl text-dark font-semibold tracking-normal md:text-6xl lg:text-7xl md:tracking-wide">
        I'm{" "}<span className="text-primary">Enno</span>,
        <br />
        Marketing Strategist
      </h1>
      <HDecoTitle />
    </div>
  )
}

export default HTitle;
