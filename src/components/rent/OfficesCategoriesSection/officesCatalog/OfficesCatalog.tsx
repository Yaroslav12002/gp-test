import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import Container from "../../../shared/Container";
import TextButton from "../../../shared/buttons/TextButton";
import RentOfficesList from "./RentOfficesList";
import RentOfficesTitle from "./RentOfficesTitle";
import { CategoryType } from "@/src/types/categoryType";

interface OfficesCatalogProps {
  currentCategory: CategoryType;
}

export default function OfficesCatalog({
  currentCategory,
}: OfficesCatalogProps) {
  const t = useTranslations("Rent");
  const locale = useLocale();

  return (
    <div className="py-10 laptop:mb-5 scroll-mt-[72px] tablet:scroll-mt-20 bg-white-bgSecondary">
      <Container>
        <RentOfficesTitle currentCategory={currentCategory} />
        <RentOfficesList currentCategory={currentCategory} />
        <Link
          href={`/${locale}/rent#categories`}
          className="block w-[320px] h-10 mt-8 laptop:mt-9 mx-auto outline-none"
        >
          <TextButton>{t("chooseAnotherCategory")}</TextButton>
        </Link>
      </Container>
    </div>
  );
}
