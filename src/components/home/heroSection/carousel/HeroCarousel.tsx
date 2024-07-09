import CarouselText from "./CarouselText";

const HeroCarousel = () => {
  return (
    <div className="relative">
      <div className="carousel w-full rounded-xl">
        <div id="slide1" className="carousel-item relative w-full ">
          <img
            src="https://img.freepik.com/free-photo/canvas-tent-forest-simple-shelter-adventurers_157027-4373.jpg?ga=GA1.1.1162881527.1690013272&semt=ais_hybrid"
            className="w-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://img.freepik.com/free-photo/tent-glamping-night_1268-20428.jpg?ga=GA1.1.1162881527.1690013272&semt=ais_hybrid"
            className="w-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://img.freepik.com/free-photo/miscellaneous-items-being-sold-yard-sale_23-2151216854.jpg?ga=GA1.1.1162881527.1690013272&semt=ais_hybrid"
            className="w-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://img.freepik.com/premium-photo/winter-cabin-retreat-with-ski-gear-generative-ai_742252-42745.jpg?ga=GA1.1.1162881527.1690013272&semt=ais_hybrid"
            className="w-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
        <CarouselText />
      </div>
    </div>
  );
};

export default HeroCarousel;
