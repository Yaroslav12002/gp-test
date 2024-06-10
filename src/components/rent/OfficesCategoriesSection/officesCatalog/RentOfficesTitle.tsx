import { useTranslations } from "next-intl";
import { CategoryType } from "@/src/types/categoryType";

interface RentOfficesTitleProps {
  currentCategory: CategoryType;
}

export default function RentOfficesTitle({
  currentCategory,
}: RentOfficesTitleProps) {
  const t = useTranslations("Rent");

  return (
    <h3 className="w-full mb-5 laptop:mb-8 text-black text-left text-lgb">
      {t("offices")}
      {t(currentCategory)}
    </h3>
  );
}
