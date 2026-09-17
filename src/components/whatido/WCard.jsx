const WCard = ({ title, image }) => {
  return (
    <div
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/40
        bg-dark/20
        backdrop-blur-sm
        transition-transform
        duration-300
        hover:-translate-y-2
      "
      data-aos="fade-up"
    >
      {/* Title */}
      <div
        className="
          flex
          min-h-20
          items-center
          border-b
          border-white/30
          px-6
          py-5
          text-xl
          font-medium
          leading-tight
          text-white
        "
      >
        {title}
      </div>

      {/* Image */}
      <div className="relative mx-6 mt-6 mb-6">
        <img
          src={image}
          alt={title}
          className="
            block
            aspect-video
            w-full
            rounded-t-xl
            object-cover
            object-center
          "
        />

        {/* Arrow */}
        <button
          type="button"
          className="
            absolute
            -bottom-1
            -right-1
            z-10
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-full
            bg-dark
            text-3xl
            font-light
            text-white
            transition-transform
            duration-300
            group-hover:rotate-45
            md:h-18
            md:w-18
          "
          aria-label={`View ${title}`}
        >
          ↗
        </button>
      </div>
    </div>
  );
};

export default WCard;
