import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import heroImg from "../../assets/hero.png"
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./HeroSlider.scss"
import { slides } from "./data";
import { useState } from "react";
 
const HeroSlider = () => {
  const [activeSlide, setActiveSlide] = useState(1);
  return (
    <div className="hero-slider">
    <Swiper
      modules={[Pagination, Autoplay]}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay:2200,
        disableOnInteraction:false
      }}
      pagination={{
        clickable: true,
        renderBullet: (_, className) => {
          return `<span class="${className}"></span>`;
        },
      }}
      navigation
      onSlideChange={(swiper) => {
        setActiveSlide(swiper.realIndex + 1);
      }}
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div className="hero-slide" style={{backgroundImage: `url(${heroImg})`}}>
            <div className="hero-content">
              <h1>{slide.title}</h1>
              <p>{slide.description}</p>
 
              <button>
                Подробнее
              </button>
            </div>
 
            
          </div>
        </SwiperSlide>
      ))}
    </Swiper>

    <div className="hero-counter">
        {String(activeSlide).padStart(2, "0")} /
        {String(slides.length).padStart(2)}
      </div>
    </div>
  );
};
 
export default HeroSlider;