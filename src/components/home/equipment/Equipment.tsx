import { useTranslations } from "next-intl";
import Container from "../../shared/Container";
import SectionTitle from "../../shared/SectionTitle";
import EquipmentList from "./EquipmentList";
import SectionHexagonBgImage from "../../shared/SectionHexagonBgImage";

export default function Equipment() {
  const t = useTranslations("Equipment");

  return (
    <section
      id="equipment"
      className="relative z-10 pt-20 tablet:pt-10 laptop:pt-[103px] pb-10 mb-10 laptop:mb-[60px] scroll-mt-[72px] tablet:scroll-mt-[86px]"
    >
      <SectionHexagonBgImage />
      <Container>
        <SectionTitle>{t("title")}</SectionTitle>
        <EquipmentList />
      </Container>
    </section>
  );
}
