import { useTranslations } from "next-intl";
import { MAP_URL } from "@/src/constants/mapUrl";
import ContactInfoItem from "./ContactInfoItem";
import IconPhone from "../../icons/IconPhone";
import IconEmail from "../../icons/IconEmail";
import IconLocationSmall from "../../icons/IconLocationSmall";

export default function ContactInfo() {
  const t = useTranslations("Footer");

  // TODO change google map link when is ready

  const contactsList = [
    {
      icon: <IconPhone />,
      url: `tel:+${t("phoneFirst").replace(/\D/g, "")}`,
      name: t("phoneFirst"),
    },
    {
      icon: <IconPhone />,
      url: `tel:+${t("phoneSecond").replace(/\D/g, "")}`,
      name: t("phoneSecond"),
    },
    { icon: <IconEmail />, url: `mailto:${t("email")}`, name: t("email") },
    {
      icon: <IconLocationSmall />,
      url: MAP_URL,
      name: t("address"),
    },
  ];

  return (
    <ul
      id="contacts"
      className="flex flex-col items-center tablet:items-start tablet:gap-y-3"
    >
      {contactsList.map((contact, idx) => (
        <ContactInfoItem key={idx} contact={contact} />
      ))}
    </ul>
  );
}
