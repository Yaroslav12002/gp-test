"use client";
import { SwiperSlide } from "swiper/react";
import { useScreenSize } from "@/src/hooks/useScreenSize";
import { SCREEN_NAMES } from "@/src/constants/screenNames";
import SlideWrapper from "../../../shared/SlideWrapper";
import GallerySliderCard from "./GallerySliderCard";
import SliderWrapper from "./SliderWrapper";

const galleryListMob = [
  { image: "winterGarden.jpg", alt: "Winter Garden" },
  { image: "stairs.jpg", alt: "Stairs" },
  { image: "buildingTopView.jpg", alt: "Building Top View" },
  { image: "hall.jpg", alt: "Hall" },
  { image: "buildingFrontView.jpg", alt: "Building Front View" },
  { image: "restGardenArea.jpg", alt: "Rest Garden Area" },
  { image: "hammoks.jpg", alt: "Hammoks" },
  { image: "gardenPath.jpg", alt: "Garden Path" },
  { image: "gazebos.jpg", alt: "Gazebos" },
  { image: "sportSimulators.jpg", alt: "Sport Simulators" },
  { image: "barbeque.jpg", alt: "Barbeque" },
  { image: "cafe.jpg", alt: "Cafe" },
  { image: "cafeTerrace.jpg", alt: "Cafe Terrace" },
  { image: "kitchen.jpg", alt: "Kitchen" },
];

const galleryListTab = [
  { image: "winterGardenTab.webp", alt: "Winter Garden" },
  { image: "stairsTab.webp", alt: "Stairs" },
  { image: "buildingTopViewTab.webp", alt: "Building Top View" },
  { image: "hallTab.webp", alt: "Hall" },
  { image: "buildingFrontViewTab.webp", alt: "Building Front View" },
  { image: "restGardenAreaTab.webp", alt: "Rest Garden Area" },
  { image: "hammoksTab.webp", alt: "Hammoks" },
  { image: "gardenPathTab.webp", alt: "Garden Path" },
  { image: "gazebosTab.webp", alt: "Gazebos" },
  { image: "sportSimulatorsTab.webp", alt: "Sport Simulators" },
  { image: "barbequeTab.webp", alt: "Barbeque" },
  { image: "cafeTab.webp", alt: "Cafe" },
  { image: "cafeTerraceTab.webp", alt: "Cafe Terrace" },
  { image: "kitchenTab.webp", alt: "Kitchen" },
];

export default function GallerySlider() {
  const screenSizeName = useScreenSize();
  const { mobileName } = SCREEN_NAMES;

  const galleryList =
    screenSizeName === mobileName ? galleryListMob : galleryListTab;

  return (
    <SliderWrapper>
      {galleryList.map((galleryItem, idx) => (
        <SwiperSlide key={idx}>
          <div className="swiper-slide-transform">
            <SlideWrapper className="p-4 aspect-[262/262] tablet:aspect-[668/322]">
              <GallerySliderCard galleryItem={galleryItem} />
            </SlideWrapper>
          </div>
        </SwiperSlide>
      ))}
    </SliderWrapper>
  );
}
