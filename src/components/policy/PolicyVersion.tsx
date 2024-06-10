import { useTranslations } from "next-intl";

export default function PolicyVersion() {
  const t = useTranslations("Policy");

  return <p className="mb-5">{t("version")}</p>;
}
