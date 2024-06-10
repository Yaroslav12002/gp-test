import Container from "../../../shared/Container";
import FilterButtonsList from "./FilterButtonsList";
import FilterTitle from "./FilterTitle";
import { CategoryType } from "@/src/types/categoryType";

interface FilterCategoriesProps {
  currentCategory: string;
  setCurrentCategory: (
    value: CategoryType | ((prev: CategoryType) => CategoryType)
  ) => void;
}

export default function FilterCategories({
  currentCategory,
  setCurrentCategory,
}: FilterCategoriesProps) {
  return (
    <Container className="flex flex-col items-center w-full tablet:w-[70%] laptop:w-full py-10">
      <FilterTitle />
      <FilterButtonsList
        currentCategory={currentCategory}
        setCurrentCategory={setCurrentCategory}
      />
    </Container>
  );
}
