import MarqueeLine from "./MarqueeLine";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Container from "../shared/Container";
import NotFoundImage from "./NotFoundImage";

export default function NotFoundPage() {
  const t = useTranslations("NotFound");

  return (
    <section
      className="relative z-10 min-h-[605px] tablet:min-h-[798px] laptop:min-h-[720px] pt-[132px] tablet:mt-20 tablet:pt-8 pb-[102px] 
    tablet:pb-[74px] laptop:pb-[68px]"
    >
      <Image
        src={`/images/bgImages/notFoundBgMobile.webp`}
        width="0"
        height="0"
        alt="building background"
        sizes="100%"
        priority
        className="tablet:hidden absolute z-[-10] bottom-0 left-0 min-h-[605px] w-full h-auto object-cover object-center"
      />
      <Image
        src={`/images/bgImages/notFoundBgTablet.webp`}
        width="0"
        height="0"
        alt="building background"
        sizes="100%"
        priority
        className="hidden tablet:block laptop:hidden absolute z-[-10] bottom-0 left-0 min-h-[798px] w-full h-auto object-cover object-center"
      />
      <Image
        src={`/images/bgImages/notFoundBgTablet.webp`}
        width="0"
        height="0"
        alt="building background"
        sizes="100%"
        priority
        className="hidden laptop:block absolute z-[-10] bottom-0 left-0 aspect-[1920/1080] min-h-[720px] w-full h-auto object-cover object-center"
      />
      <div className="flex flex-col justify-between h-full">
        <Container>
          <p className="w-[236px] tablet:w-[307px] mb-[100px] tablet:mb-[114px] laptop:mb-[76px] text-base tablet:text-md laptop:text-lg">
            {t("notFounDescription")}
          </p>
          <NotFoundImage />
        </Container>
        <MarqueeLine />
      </div>
    </section>
  );
}
