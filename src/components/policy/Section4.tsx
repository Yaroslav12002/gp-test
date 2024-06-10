import { useTranslations } from "next-intl";
import SectionTitle from "./SectionTitle";

export default function Section4() {
  const t = useTranslations("Policy");

  return (
    <li className="mb-4 laptop:mb-6">
      <SectionTitle>{t("protectionData")}</SectionTitle>
      <ul>
        <li>{t("protectionDataPartOne")}</li>
        <li>{t("protectionDataPartTwo")}</li>
      </ul>
    </li>
  );
}
