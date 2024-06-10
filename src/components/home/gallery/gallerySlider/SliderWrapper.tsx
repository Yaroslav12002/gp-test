import { ReactNode } from "react";
import { Swiper } from "swiper/react";
import { Navigation, Scrollbar, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/effect-coverflow";
import "./gallerySlider.css";

interface SliderWrapperProps {
  children: ReactNode;
}

export default function SliderWrapper({ children }: SliderWrapperProps) {
  return (
    <Swiper
      modules={[Navigation, Scrollbar, EffectCoverflow]}
      navigation
      slidesPerView={1.3}
      scrollbar={true}
      grabCursor={true}
      centeredSlides={true}
      effect={"coverflow"}
      coverflowEffect={{
        rotate: 0,
        scale: 0.7,
        stretch: 32,
        depth: 0,
        modifier: 1,
        slideShadows: false,
      }}
      breakpoints={{
        320: { navigation: { enabled: false } },
        768: {
          slidesPerView: 1.16,
          coverflowEffect: { scale: 0.75, stretch: 72 },
          navigation: { enabled: false },
        },
        1280: {
          slidesPerView: 1.35,
          coverflowEffect: { scale: 0.75, stretch: 96 },
          navigation: { enabled: true },
        },
      }}
      speed={1000}
      loop={true}
      className="gallery-slider"
    >
      {children}
    </Swiper>
  );
}
