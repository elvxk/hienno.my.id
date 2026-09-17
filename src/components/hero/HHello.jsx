import HDeco from "./HDeco";

const HHello = () => {
  return (
    <div className="relative mb-5"
      data-aos="fade-down"
    >
      <div className="rounded-full border-dark px-5 py-1 text-lg text-dark font-semibold border-2">
        Hello!
      </div>

      {/* Decoration */}
      <HDeco />
    </div>
  )
}

export default HHello;
