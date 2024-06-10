import { useTranslations } from "next-intl";
import Container from "../../shared/Container";
import SectionTitle from "../../shared/SectionTitle";
import OfficesCategoryList from "./OfficesCategoryList";

export default function Offices() {
  const t = useTranslations("Offices");

  return (
    <section
      id="offices"
      className="py-10 tablet:py-5 tablet:mb-5 laptop:mb-[60px] scroll-mt-[72px] tablet:scroll-mt-20"
    >
      <Container>
        <SectionTitle>{t("title")}</SectionTitle>
        <div className="tablet:flex tablet:gap-x-4 laptop:w-[798px] laptop:mx-auto mb-5 laptop:mb-10 text-base laptop:text-lg">
          <p className="w-full">{t("descriptionPartOne")}</p>
          <p className="w-full">{t("descriptionPartTwo")}</p>
        </div>
        <OfficesCategoryList />
      </Container>
    </section>
  );
}
