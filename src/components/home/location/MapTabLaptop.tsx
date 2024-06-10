import Image from "next/image";
import { MAP_URL } from "@/src/constants/mapUrl";

export default function MapTabLaptop() {
  return (
    <>
      <div className="hidden tablet:block laptop:hidden relative z-10 w-full aspect-[373/305]">
        <Image
          src={`/images/locationImages/googleMapTab.webp`}
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
          className="absolute top-[13%] left-[41%] w-[23%] h-auto"
        />
        <a
          href={MAP_URL}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="block absolute top-[27%] right-[29%] w-[10.7%] outline-none"
        >
          <Image
            src={`/images/icons/locationLarge.svg`}
            width="0"
            height="0"
            sizes="100%"
            alt="location icon"
            className="w-full h-auto"
          />
        </a>
      </div>

      <div className="hidden laptop:block relative w-[52%] aspect-[626/404]">
        <Image
          src={`/images/locationImages/googleMapLaptop.webp`}
          width="0"
          height="0"
          sizes="100%"
          alt="map"
          className="absolute z-[-20] top-0 left-0 w-full h-auto"
        />
        <Image
          src={`/images/icons/logoDark.svg`}
          width="0"
          height="0"
          sizes="100%"
          alt="location icon"
          className="absolute top-[20%] left-[51%] w-[23%] h-auto"
        />
        <a
          href={MAP_URL}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="absolute z-10 top-[35%] right-[16%] w-[10.7%] outline-none"
        >
          <Image
            src={`/images/icons/locationLarge.svg`}
            width="0"
            height="0"
            sizes="100%"
            alt="location icon"
            className="w-full h-auto"
          />
        </a>
      </div>
    </>
  );
}
