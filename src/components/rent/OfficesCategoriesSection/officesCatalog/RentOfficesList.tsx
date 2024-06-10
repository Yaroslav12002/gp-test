import { officesData } from "@/src/mockedData/officesData";
import RentOfficesCard from "./RentOfficesCard";
import { CategoryType } from "@/src/types/categoryType";

interface RentOfficesListProps {
  currentCategory: CategoryType;
}

export default function RentOfficesList({
  currentCategory,
}: RentOfficesListProps) {
  return (
    <ul className="flex flex-col tablet:flex-row flex-wrap gap-5 tablet:gap-4">
      {officesData[currentCategory].map((office) => (
        <li
          key={office.id}
          className="w-full tablet:w-[calc((100%-16px)/2)] tablet:max-w-[calc((100%-16px)/2)] laptop:w-[calc((100%-32px)/3)] laptop:max-w-[calc((100%-32px)/3)]"
        >
          <RentOfficesCard office={office} />
        </li>
      ))}
    </ul>
  );
}
