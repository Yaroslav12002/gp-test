import { useTranslations } from "next-intl";
import { MAP_URL } from "@/src/constants/mapUrl";
import Container from "../../shared/Container";
import SectionTitle from "../../shared/SectionTitle";
import LocationList from "./LocationList";
import SectionHexagonBgImage from "../../shared/SectionHexagonBgImage";
import TextButton from "../../shared/buttons/TextButton";
import MapMob from "./MapMob";
import MapTabLaptop from "./MapTabLaptop";

export default function Location() {
  const t = useTranslations("");

  return (
    <section className="relative z-10 pt-20 tablet:pt-10 laptop:pt-[96px] mb-10 tablet:mb-[60px] scroll-mt-[72px] tablet:scroll-mt-20">
      <SectionHexagonBgImage />
      <SectionTitle className="w-[281px] mx-auto tablet:w-[430px]">
        {t("Location.title")}
      </SectionTitle>
      <div className="flex flex-col">
        <Container className="tablet:flex items-center justify-between">
          <div className="tablet:flex flex-col justify-between w-[95%] laptop:w-[48%] h-full">
            <p className="mb-5 laptop:mb-10 text-base laptop:text-lg">
              {t("Location.description")}
            </p>
            <LocationList />
            <a
              href={MAP_URL}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="flex items-center justify-center mb-5 tablet:mb-0 laptop:mt-10 laptop:mr-auto outline-none"
            >
              <TextButton>{t("Buttons.route")}</TextButton>
            </a>
          </div>
          <MapTabLaptop />
        </Container>
        <MapMob />
      </div>
    </section>
  );
}
