import { useTranslations } from "next-intl";
import FilterButton from "../../../shared/buttons/FilterButton";
import { CategoryType } from "@/src/types/categoryType";

interface FilterButtonsListProps {
  currentCategory: string;
  setCurrentCategory: (
    value: CategoryType | ((prev: CategoryType) => CategoryType)
  ) => void;
}

interface FiltersList {
  id: CategoryType;
}

export default function FilterButtonsList({
  currentCategory,
  setCurrentCategory,
}: FilterButtonsListProps) {
  const t = useTranslations("Rent");

  const filtersList: FiltersList[] = [
    { id: "category1000" },
    { id: "category500" },
    { id: "category300" },
    { id: "category200" },
    { id: "category100" },
    { id: "categoryLess100" },
  ];

  return (
    <ul className="flex flex-wrap laptop:flex-nowrap laptop:justify-between gap-x-[13.1%] tablet:gap-x-[5%] laptop:gap-0 gap-y-4 w-full mx-auto">
      {filtersList.map(({ id }, idx) => (
        <li key={idx} className="w-[42.2%] tablet:w-[30%] laptop:w-[15.25%]">
          <FilterButton
            handleCLick={() => setCurrentCategory(id)}
            currentCategory={currentCategory}
          >
            {t(id)}
          </FilterButton>
        </li>
      ))}
    </ul>
  );
}
