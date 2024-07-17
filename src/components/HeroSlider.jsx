import "./heroSlider.css";

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import 'swiper/css/autoplay';

// import rewired modules
import { EffectFade, Autoplay } from "swiper/modules";

// images
import slide1 from "../images/heroSlider/slide1.png";
import slide2 from "../images/heroSlider/slide2.jpg";
import slide3 from "../images/heroSlider/slide3.jpg";

const slides = [
  {
    title: "Luxury Hotel & Spa",
    sub: "...hospitality like no other",
    bg: slide1,
    btnText: "Rooms & Suites",
  },
  {
    title: "Luxury Hotel & Spa",
    sub: "...hospitality like no other",
    bg: slide2,
    btnText: "Rooms & Suites",
  },
  {
    title: "Luxury Hotel & Spa",
    sub: "...hospitality like no other",
    bg: slide3,
    btnText: "Rooms & Suites",
  },
];

const HeroSlider = () => {
  return (
    <Swiper
      modules={[EffectFade, Autoplay]}
      effect={"fade"}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      className="heroSlider"
    >
      {slides.map((slide, index) => {
        // destructure slide
        const { title, sub, bg, btnText } = slide;
        return (
          <SwiperSlide className="heroSlider__slide" key={index}>
            <div className="heroSlider__slide-text">
              <div className="dent">Just Enjoy and Relax</div>
              <h2>{title}</h2>
              <p className="italic">{sub}</p>
            </div>
            <div className="heroSlide__slide-img">
              <img className="heroSlide__slide-img-image" src={bg} alt="" />
            </div>

            {/* overlay */}
            <div className="heroSlider__slide-overlay"></div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default HeroSlider;
