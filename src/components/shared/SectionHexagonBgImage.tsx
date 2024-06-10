import Image from "next/image";

export default function SectionHexagonBgImage() {
  return (
    <Image
      src={`/images/bgImages/hexagonsBg.svg`}
      width="0"
      height="0"
      alt="hexagons background"
      className="absolute top-0 tablet:top-[-30px] laptop:top-0 left-[calc((100%-313px)/2)] tablet:left-[calc((100%-313px-9px)/2)] laptop:left-[calc((100%-492px-9px)/2)] z-[-10] w-[313px] 
      laptop:w-[492px] h-auto"
    />
  );
}
