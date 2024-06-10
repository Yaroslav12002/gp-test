import { useTranslations } from "next-intl";
import SectionTitle from "./SectionTitle";

export default function Section6() {
  const t = useTranslations("Policy");

  return (
    <li className="mb-4 laptop:mb-6">
      <SectionTitle>{t("policyChanges")}</SectionTitle>
      <ul>
        <li>
          {t("policyChangesDescription")}
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
