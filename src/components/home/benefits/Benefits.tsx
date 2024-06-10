import { useTranslations } from "next-intl";
import Container from "../../shared/Container";
import SectionTitle from "../../shared/SectionTitle";
import BenefitsList from "./BenefitsList";

export default function Benefits() {
  const t = useTranslations("Benefits");

  return (
    <section
      id="benefits"
      className="py-10 mb-10 tablet:mb-[60px] scroll-mt-[72px] tablet:scroll-mt-20 bg-primary"
    >
      <Container>
        <SectionTitle className="text-white-text">{t("title")}</SectionTitle>
        <BenefitsList />
      </Container>
    </section>
  );
}
