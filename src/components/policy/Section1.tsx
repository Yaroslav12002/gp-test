import { useTranslations } from "next-intl";
import SectionTitle from "./SectionTitle";
import SectionSubTitle from "./SectionSubTitle";

export default function Section1() {
  const t = useTranslations("Policy");

  return (
    <li className="mb-4 laptop:mb-6">
      <SectionTitle>{t("terms")}</SectionTitle>
      <SectionSubTitle>{t("termsPartOne")}</SectionSubTitle>
      <ul className="mb-3 laptop:mb-4">
        <li>{t("goals")}</li>
        <li>{t("scope")}</li>
      </ul>
      <SectionSubTitle>{t("termsPartTwo")}</SectionSubTitle>
      <ul className="mb-3 laptop:mb-4">
        <li>{t("personalData")}</li>
        <li>{t("collection")}</li>
        <li>{t("usage")}</li>
        <li>{t("processing")}</li>
        <li>{t("cookiesDescription")}</li>
      </ul>
      <SectionSubTitle>{t("termsPartThree")}</SectionSubTitle>
      <ul>
        <li>{t("agreement")}</li>
        <li>{t("disagreement")}</li>
      </ul>
    </li>
  );
}
