"use client";
import Marquee from "react-fast-marquee";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";

export default function MarqueeLine() {
  const t = useTranslations("NotFound");
  const locale = useLocale();

  return (
    <Link href={`/`} locale={locale}>
      <Marquee
        autoFill={true}
        pauseOnHover={true}
        className="h-[64px] laptop:h-[72px] bg-accent"
      >
        <h2 className="flex items-center text-lgb tablet:text-xlsb laptop:text-2xlsb text-white-text">
          {t("pageNotFound")}
          <span className="text-3xs tablet:text-xs">
            &nbsp; &nbsp; ⬢ &nbsp; &nbsp;
          </span>
          {t("returnToHome")}
          <span className="text-3xs tablet:text-xs">
            &nbsp; &nbsp; ⬢ &nbsp; &nbsp;
          </span>
        </h2>
      </Marquee>
    </Link>
  );
}
