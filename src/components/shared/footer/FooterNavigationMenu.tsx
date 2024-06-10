import { useTranslations } from "next-intl";
import NavigationMenu from "../navigationMenu/NavigationMenu";

export default function FooterNavigationMenu() {
  const t = useTranslations();
  const menuList = [
    { title: t("Hero.title"), id: "#about-us" },
    { title: t("Infrastructure.title"), id: "#infrastructure" },
    { title: t("Equipment.title"), id: "#equipment" },
    { title: t("Benefits.title"), id: "#benefits" },
    { title: t("Offices.title"), id: "/rent" },
    { title: t("Gallery.title"), id: "#gallery" },
    { title: t("WriteUs.title"), id: "#write-us" },
  ];

  return <NavigationMenu menuList={menuList} className="tablet:items-start" />;
}
