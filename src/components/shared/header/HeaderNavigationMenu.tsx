import { useTranslations } from "next-intl";
import NavigationMenu from "../navigationMenu/NavigationMenu";

interface HeaderNavigationMenuProps {
  onClick?: () => void;
}

export default function HeaderNavigationMenu({
  onClick,
}: HeaderNavigationMenuProps) {
  const t = useTranslations();

  const menuList = [
    { title: t("Hero.title"), id: "#about-us" },
    { title: t("Infrastructure.title"), id: "#infrastructure" },
    { title: t("Equipment.title"), id: "#equipment" },
    { title: t("Benefits.title"), id: "#benefits" },
    { title: t("Offices.title"), id: "/rent" },
    { title: t("Gallery.title"), id: "#gallery" },
    { title: t("WriteUs.title"), id: "#write-us" },
    { title: t("Footer.contacts"), id: "#contacts" },
  ];

  return (
    <NavigationMenu
      menuList={menuList}
      className="text-baseb laptop:text-mdb"
      onClick={onClick}
    />
  );
}
