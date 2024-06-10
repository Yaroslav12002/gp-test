import { useTranslations } from "next-intl";
import Container from "../../shared/Container";
import SectionTitle from "../../shared/SectionTitle";
import InfrastructureSlider from "./infrastructureSlider/InfrastructureSlider";
import MapSchemeModal from "./MapSchemeModal";

export default function Infrastructure() {
  const t = useTranslations();

  return (
    <section
      id="infrastructure"
      className="pt-10 mb-10 tablet:mb-[60px] scroll-mt-[72px] tablet:scroll-mt-20"
    >
      <Container>
        <SectionTitle>{t("Infrastructure.title")}</SectionTitle>
        <div className="tablet:w-[553px] laptop:w-[713px] mb-5 laptop:mb-12 tablet:mx-auto text-base laptop:text-lg">
          <span>{t("Infrastructure.descriptionPartOne")}</span>
          <span>{t("Infrastructure.descriptionPartTwo")}</span>
        </div>
      </Container>
      <InfrastructureSlider />
      <Container className="flex justify-center">
        <MapSchemeModal />
      </Container>
    </section>
  );
}
