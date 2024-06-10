import Image from "next/image";
import HeroTitle from "./HeroTitle";

export default function Hero() {
  return (
    <section className="relative z-10 flex justify-center items-center w-full min-h-[156px] aspect-[360/156] tablet:aspect-[768/240] laptop:aspect-[1280/280]">
      <div className="flex justify-center items-center w-full h-full bg-rentHeroGradient">
        <Image
          src={`/images/heroImages/heroRentMob.webp`}
          width="0"
          height="0"
          alt="building"
          sizes="100%"
          priority
          className={`tablet:hidden absolute top-0 left-0 z-[-10] w-full h-full`}
        />
        <Image
          src={`/images/heroImages/heroRentTab.webp`}
          width="0"
          height="0"
          alt="building"
          sizes="100%"
          priority
          className={`hidden tablet:block laptop:hidden absolute top-0 left-0 z-[-10] w-full h-full`}
        />
        <Image
          src={`/images/heroImages/heroRentLaptop.webp`}
          width="0"
          height="0"
          alt="building"
          sizes="100%"
          priority
          className={`hidden laptop:block absolute top-0 left-0 z-[-10] w-full h-full`}
        />
        <HeroTitle />
      </div>
    </section>
  );
}
