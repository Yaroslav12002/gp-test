import FilterButton from "../../shared/buttons/FilterButton";
import OfficesSlider from "../../shared/officesSlider/OfficesSlider";

interface OfficesCategoryProps {
  categoryName: string;
  sliderList: string[];
}

export default function OfficesCategory({
  sliderList,
  categoryName,
}: OfficesCategoryProps) {
  return (
    <div className="tablet:w-[48.9%] laptop:w-[32.5%] tablet:aspect-[356/320] laptop:aspect-[390/347]">
      <OfficesSlider sliderList={sliderList} />
      <div className="flex items-center justify-center h-10 tablet:h-[14.3%] laptop:h-10 mt-[3.43%] border border-primary text-primary text-baseb laptop:text-mdb">
        {categoryName}
      </div>
    </div>
  );
}
