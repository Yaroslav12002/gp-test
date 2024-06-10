"use client";
import { useState } from "react";
import FilterCategories from "./filterCategories/FilterCategories";
import OfficesCatalog from "./officesCatalog/OfficesCatalog";
import { CategoryType } from "@/src/types/categoryType";

export default function OfficesCategoriesSection() {
  const [currentCategory, setCurrentCategory] =
    useState<CategoryType>("category1000");

  return (
    <section id="categories" className="scroll-mt-[72px] tablet:scroll-mt-20">
      <FilterCategories
        currentCategory={currentCategory}
        setCurrentCategory={setCurrentCategory}
      />
      <OfficesCatalog currentCategory={currentCategory} />
    </section>
  );
}
