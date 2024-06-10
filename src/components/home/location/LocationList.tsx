import { useTranslations } from "next-intl";
import LocationListItem from "./LocationListItem";

export default function LocationList() {
  const t = useTranslations("Location");

  const locationList = [
    {
      title: t("busStop"),
      icon: "bus.svg",
      alt: "bus",
    },
    {
      title: t("electicTrain"),
      icon: "train.svg",
      alt: "train",
    },
    {
      title: t("subway"),
      icon: "subway.svg",
      alt: "subway",
    },
  ];

  return (
    <ul className="flex flex-col gap-y-2 mb-5">
      {locationList.map((location, idx) => (
        <LocationListItem key={idx} location={location} />
      ))}
    </ul>
  );
}
