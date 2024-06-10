import React from "react";
import Image from "next/image";

interface HeroSliderListProps {
  imagesList: { image: string }[];
  className?: string;
}

export default function HeroSliderList({
  imagesList,
  className,
}: HeroSliderListProps) {
  return (
    <ul
      className={`absolute top-0 left-0 w-full h-full laptop:h-[738px] aspect-[360/508] mobileXl:aspect-[768/660] laptop:aspect-auto ${className}`}
    >
      {imagesList.map(({ image }, idx) => (
        <li
          key={idx}
          className={`absolute z[-10] w-full h-full ${
            idx === 0 ? "opacity-1" : "opacity-0"
          } animate-hero ${
            idx === 0
              ? "animate-delay-[0ms]"
              : idx === 1
              ? "animate-delay-[4000ms]"
              : "animate-delay-[8000ms]"
          }`}
        >
          <Image
            src={`/images/heroImages/${image}`}
            width="0"
            height="0"
            sizes="100%"
            alt="building"
            priority={idx === 0}
            className="absolute z[-10] w-full h-auto laptop:h-full object-cover"
          />
          <div className="absolute w-full h-full bg-heroGradient"></div>
        </li>
      ))}
    </ul>
  );
}
