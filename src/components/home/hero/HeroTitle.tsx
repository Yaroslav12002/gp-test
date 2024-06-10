import { useTranslations } from "next-intl";

export default function HeroTitle() {
  const t = useTranslations("Hero");

  return (
    <div className="laptop:w-[500px] laptop:px-[94px] laptop:mb-8">
      <h1 className="text-base laptop:text-md text-center">
        {t("pageTitle1")}
        <p className="text-3xlb mobileXl:text-4xlb laptop:text-5xlb">
          {t("pageTitle2").toUpperCase()}
        </p>
      </h1>
      <p className="laptop:text-lg laptop:mt-2 text-center">
        {t("description").toUpperCase()}
      </p>
    </div>
  );
}
