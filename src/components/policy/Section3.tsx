import { useTranslations } from "next-intl";
import SectionTitle from "./SectionTitle";
import SectionSubTitle from "./SectionSubTitle";

export default function Section3() {
  const t = useTranslations("Policy");

  return (
    <li className="mb-4 laptop:mb-6">
      <SectionTitle>{t("cookiesTechnologies")}</SectionTitle>
      <SectionSubTitle>{t("cookiesTypes")}</SectionSubTitle>
      <ul className="mb-3 laptop:mb-4">
        <p>{t("cookiesTypesDescription")}</p>
        <li>{t("sessionCookie")}</li>
        <li>{t("permanentCookies")}</li>
        <li>{t("thirdPartyCookies")}</li>
      </ul>
      <SectionSubTitle>{t("cookiesControl")}</SectionSubTitle>
      <ul>
        <li>{t("cookiesControlDescription")}</li>
      </ul>
    </li>
  );
}
