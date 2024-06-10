import { useTranslations } from "next-intl";
import SectionTitle from "./SectionTitle";
import SectionSubTitle from "./SectionSubTitle";

export default function Section2() {
  const t = useTranslations("Policy");

  return (
    <li className="mb-4 laptop:mb-6">
      <SectionTitle>{t("collectionPersonalData")}</SectionTitle>
      <SectionSubTitle>{t("types")}</SectionSubTitle>
      <ul className="mb-3 laptop:mb-4">
        <li>{t("names")}</li>
        <li>{t("technicalInformation")}</li>
      </ul>
      <SectionSubTitle>{t("collectionGoals")}</SectionSubTitle>
      <ul className="mb-3 laptop:mb-4">
        <li>{t("services")}</li>
        <li>{t("improvements")}</li>
        <li>{t("marketing")}</li>
      </ul>
      <SectionSubTitle>{t("cookiesUsage")}</SectionSubTitle>
      <ul className="mb-3 laptop:mb-4">
        <li>{t("cookies")}</li>
      </ul>
      <SectionSubTitle>{t("period")}</SectionSubTitle>
      <ul className="mb-3 laptop:mb-4">
        <li>{t("periodDescription")}</li>
      </ul>
      <SectionSubTitle>{t("legalGrounds")}</SectionSubTitle>
      <ul>
        <li>{t("legalDescription")}</li>
      </ul>
    </li>
  );
}
