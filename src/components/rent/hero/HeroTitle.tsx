import { useTranslations } from "next-intl";

export default function HeroTitle() {
  const t = useTranslations("Offices");
  return (
    <h1 className="text-xlsb tablet:text-2xlsb laptop:text-3xlsb text-white-text">
      {t("title")}
    </h1>
  );
}
