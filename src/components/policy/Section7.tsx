import { useTranslations } from "next-intl";
import SectionTitle from "./SectionTitle";

export default function Section7() {
  const t = useTranslations("Policy");

  return (
    <li>
      <SectionTitle>{t("additionalConditions")}</SectionTitle>
      <ul>
        <li>{t("additionalConditionsPartOne")}</li>
        <li>
          {t("additionalConditionsPartTwo")}
          <a
            href={`mailto:${t("email")}`}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="outline-none laptop:hover:text-accent laptop:focus-visible:text-accent transition-[color] duration-300 ease-out-quart"
          >
            {t("email")}
          </a>
          .
        </li>
      </ul>
    </li>
  );
}
