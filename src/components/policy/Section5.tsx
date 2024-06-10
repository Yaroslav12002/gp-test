import { useTranslations } from "next-intl";
import SectionTitle from "./SectionTitle";

export default function Section5() {
  const t = useTranslations("Policy");

  return (
    <li className="mb-4 laptop:mb-6">
      <SectionTitle>{t("userRights")}</SectionTitle>
      <ul>
        <li>{t("userRightsDescription")}</li>
      </ul>
    </li>
  );
}
