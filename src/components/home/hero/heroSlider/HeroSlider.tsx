import HeroSliderList from "./HeroSliderList";

const heroImagesMob = [
  { image: "heroFirstMob.webp" },
  { image: "heroSecondMob.webp" },
  { image: "heroThirdMob.webp" },
];

const heroImagesTab = [
  { image: "heroFirstTab.webp" },
  { image: "heroSecondTab.webp" },
  { image: "heroThirdTab.webp" },
];

const heroImagesLaptop = [
  { image: "heroFirstLaptop.webp" },
  { image: "heroSecondLaptop.webp" },
  { image: "heroThirdLaptop.webp" },
];

export default function HeroSlider() {
  return (
    <>
      <HeroSliderList imagesList={heroImagesMob} className="mobileXl:hidden" />
      <HeroSliderList
        imagesList={heroImagesTab}
        className="hidden mobileXl:block laptop:hidden"
      />
      <HeroSliderList
        imagesList={heroImagesLaptop}
        className="hidden laptop:block"
      />
    </>
  );
}
