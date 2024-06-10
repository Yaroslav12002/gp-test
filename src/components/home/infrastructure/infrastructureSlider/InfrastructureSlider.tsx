"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Parallax } from "swiper/modules";
import SlideWrapper from "../../../shared/SlideWrapper";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/effect-coverflow";
import "./infrastructureSlider.css";

export default function InfrastructureSlider() {
  const t = useTranslations("Infrastructure");

  const infrastructureList = [
    {
      image: "greenZone.jpg",
      alt: "Rest Zone",
      title: t("restZoneTitle"),
      description: t("restZoneDescription"),
    },
    {
      image: "sportSimulators.jpg",
      alt: "Sport Simulators",
      title: t("sportSimulatorsTitle"),
      description: t("sportSimulatorsDescription"),
    },
    {
      image: "cafe.jpg",
      alt: "Cafe",
      title: t("cafeTitle"),
      description: t("cafeDescription"),
    },
    {
      image: "parking.jpg",
      alt: "Parking",
      title: t("parkingTitle"),
      description: t("parkingDescription"),
    },
    {
      image: "warehouses.jpg",
      alt: "Warehouses",
      title: t("warehousesTitle"),
      description: t("warehousesDescription"),
    },
    {
      image: "atm.jpg",
      alt: "ATM",
      title: t("atmTitle"),
      description: t("atmDescription"),
    },
    {
      image: "post.jpg",
      alt: "Post",
      title: t("postTitle"),
      description: t("postDescription"),
    },
    {
      image: "bank.jpg",
      alt: "Bank",
      title: t("bankTitle"),
      description: t("bankDescription"),
    },
  ];

  return (
    <Swiper
      modules={[Scrollbar, Parallax]}
      parallax={true}
      spaceBetween={22}
      slidesPerView={1.1}
      breakpoints={{
        768: { slidesPerView: 2.1, parallax: false },
        1280: { slidesPerView: 3.1, spaceBetween: 20, parallax: false },
      }}
      scrollbar={true}
      grabCursor={true}
      speed={1000}
      loop={true}
      className="infrastructure-slider"
    >
      {infrastructureList.map(({ image, alt, title, description }, idx) => (
        <SwiperSlide key={idx}>
          <div className="swiper-slide-transform">
            <SlideWrapper className="p-4 w-full">
              <div className="relative z-10 flex items-end w-full aspect-[1/1]">
                <Image
                  src={`/images/infrastructureImages/${image}`}
                  width="0"
                  height="0"
                  alt={alt}
                  sizes="100%"
                  className={`absolute top-0 left-0 z-[-10] w-full h-full`}
                />
                <div className="w-full min-h-[88px] p-3 bg-cardGradient text-white-text">
                  <h3
                    data-swiper-parallax-x="-35%"
                    data-swiper-parallax-opacity="0"
                    className="text-mdb mb-1"
                  >
                    {title}
                  </h3>
                  <p
                    data-swiper-parallax-x="-35%"
                    data-swiper-parallax-opacity="0"
                    className="text-xs laptop:text-base"
                  >
                    {description}
                  </p>
                </div>
              </div>
            </SlideWrapper>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
