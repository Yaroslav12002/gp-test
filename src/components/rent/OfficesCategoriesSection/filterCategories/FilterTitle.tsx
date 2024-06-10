import { useTranslations } from "next-intl";

export default function FilterTitle() {
  const t = useTranslations("Rent");

  return (
    <h2 className="w-full mb-3 tablet:mb-4 laptop:mb-8 text-black text-lgb tablet:text-xlsb laptop:text-2xlsb text-left">
      {t("chooseCategory")}
    </h2>
  );
}
