import { useTranslations } from "next-intl";
import EquipmentListItem from "./EquipmentListItem";

export default function EquipmentList() {
  const t = useTranslations("Equipment");
  const equipmentList = [
    {
      title: t("dieselGenerator"),
      icon: "dieselGenerator.svg",
      alt: "diesel generator",
    },
    { title: t("boilerHouse"), icon: "boilerHouse.svg", alt: "boiler" },
    { title: t("climate"), icon: "climate.svg", alt: "climate" },
    {
      title: t("monitoring"),
      icon: "videoMonitoring.svg",
      alt: "video monitoring",
    },
  ];
  return (
    <ul className="tablet:flex tablet:flex-wrap gap-4 laptop:flex-nowrap">
      {equipmentList.map((equipment, idx) => (
        <EquipmentListItem key={idx} equipment={equipment} />
      ))}
    </ul>
  );
}
