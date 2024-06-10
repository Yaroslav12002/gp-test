import Image from "next/image";
import { MAP_URL } from "@/src/constants/mapUrl";

export default function MapMob() {
  return (
    <div className="tablet:hidden relative max-w-[560px] w-full mx-auto">
      <Image
        src={`/images/locationImages/googleMapMob.webp`}
        width="0"
        height="0"
        sizes="100%"
        alt="map"
        className="w-full h-auto"
      />
      <Image
        src={`/images/icons/logoDark.svg`}
        width="0"
        height="0"
        sizes="100%"
        alt="location icon"
        className="absolute top-[28%] left-[14%] w-[33.3%] h-auto"
      />
      <a
        href={MAP_URL}
        target="_blank"
        rel="noopener noreferrer nofollow"
        className="outline-none"
      >
        <Image
          src={`/images/icons/locationLarge.svg`}
          width="0"
          height="0"
          sizes="100%"
          alt="location icon"
          className="absolute top-[42%] right-[42%] w-[19%] h-auto"
        />
      </a>
    </div>
  );
}
