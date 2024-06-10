import { useTranslations } from "next-intl";
import HeroInfoListLaptop from "./heroInfoLaptop/HeroInfoListLaptop";
import HeroInfoListMobTab from "./heroInfoMobTab/HeroInfoListMobTab";

export default function HeroInfo() {
  const t = useTranslations("Hero");

  const heroList = [
    { quantity: t("floorsQuantity"), description: t("floorsDescription") },
    { quantity: t("GLAQuantity"), description: t("GLADescription") },
    {
      quantity: t("parkingPlacesQuantity"),
      description: t("parkingPlacesDescription"),
    },
    { quantity: t("buildingQuantity"), description: t("buildingDescription") },
  ];
  return (
    <>
      <HeroInfoListMobTab heroList={heroList} />
      <HeroInfoListLaptop heroList={heroList} />
    </>
  );
}
