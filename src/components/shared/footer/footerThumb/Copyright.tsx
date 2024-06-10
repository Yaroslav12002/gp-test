import { useTranslations } from "next-intl";

export default function Copyright() {
  const t = useTranslations("Footer");

  return <p className="text-2xs text-white-text">{t("copyright")}</p>;
}
