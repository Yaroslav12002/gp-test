"use client";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import Marquee from "react-fast-marquee";

export default function Offers() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <section className="mb-10">
      <Link href={`/${locale}#write-us`}>
        <Marquee
          autoFill={true}
          pauseOnHover={true}
          className="h-[64px] tablet:h-[72px] bg-accent"
        >
          <h2 className="flex items-center text-lgb text-white-text">
            {t("Offers.title")}
            <span className="text-3xs">
              &nbsp; &nbsp; &nbsp; ⬢ &nbsp; &nbsp; &nbsp;
            </span>
          </h2>
        </Marquee>
      </Link>
    </section>
  );
}
