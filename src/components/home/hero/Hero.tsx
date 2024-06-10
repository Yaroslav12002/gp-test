import HeroSlider from "./heroSlider/HeroSlider";
import HeroTitle from "./HeroTitle";
import HeroInfo from "./heroInfo/HeroInfo";

export default function Hero() {
  return (
    <section
      id="about-us"
      className="relative w-full aspect-[360/508] mobileXl:aspect-[768/660] laptop:aspect-auto laptop:h-[738px] scroll-mt-[72px] tablet:scroll-mt-20 mb-10 bg-primary"
    >
      <div className="absolute z-10 w-full h-full py-[11.11%] mobileXl:py-[8%] tablet:py-[12.1%] laptop:py-[57px] px-5 laptop:px-[5.5%] text-white-text">
        <HeroTitle />
        <HeroInfo />
      </div>
      <HeroSlider />
    </section>
  );
}
