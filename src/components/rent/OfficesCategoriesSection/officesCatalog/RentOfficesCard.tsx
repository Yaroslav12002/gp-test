import OfficesSlider from "../../../shared/officesSlider/OfficesSlider";
import RentOfficesCardThumb from "./RentOfficesCardThumb";
import SlideWrapper from "../../../shared/SlideWrapper";

interface RentOfficesCardProps {
  office: {
    id: string;
    area: string;
    building: string;
    purpose: string;
    photos: string[];
  };
}

export default function RentOfficesCard({ office }: RentOfficesCardProps) {
  const { photos } = office;
  return (
    <SlideWrapper className="flex flex-col justify-between h-full p-3 laptop:p-5">
      <div className="w-full">
        <OfficesSlider sliderList={photos} />
      </div>
      <RentOfficesCardThumb office={office} />
    </SlideWrapper>
  );
}
