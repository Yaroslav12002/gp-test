"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Cookies from "js-cookie";
import { useTranslations, useLocale } from "next-intl";
import Button from "./buttons/Button";

export default function CookiesComponent() {
  const [isAccepted, setIsAccepted] = useState(true);
  const cookiesValue = Cookies.get("isAcceptedCookies");

  const t = useTranslations("");
  const locale = useLocale();

  useEffect(() => {
    if (cookiesValue) {
      setIsAccepted(true);
    } else {
      setIsAccepted(false);
    }
  }, [isAccepted, cookiesValue]);

  const handleClick = () => {
    setIsAccepted(true);
    Cookies.set("isAcceptedCookies", "true");
  };

  return (
    <div
      className={`fixed z-10 left-0 bottom-0 flex items-center justify-center w-full max-h-[286px] tablet:max-h-[223px] laptop:max-h-[180px]
       py-10 px-5 laptop:py-12 laptop:px-[100px] bg-blue text-white-text text-base laptop:text-lg ${
         isAccepted ? "translate-y-[101%]" : "translate-y-0"
       } 
       transition-[transform] duration-[1000ms] ease-out-quart`}
    >
      <div
        className="flex flex-col items-center gap-y-10 tablet:gap-y-6 tablet:items-start laptop:items-center laptop:flex-row laptop:justify-between 
      max-w-[560px] tablet:max-w-[632px] laptop:max-w-[1000px]"
      >
        <p className="laptop:w-[77%]">
          {t("Cookies.description")}
          <Link
            href="/policy"
            locale={locale}
            className="outline-none text-baseb laptop:text-lgb border-b border-white-text laptop:hover:text-accent laptop:hover:border-accent 
          laptop:focus-visible:text-accent laptop:focus-visible:border-accent transition-[color] duration-300 ease-out-quart"
          >
            {t("Cookies.policy")}
          </Link>
          .
        </p>

        <Button variant="secondary" onClick={handleClick}>
          {t("Buttons.ok")}
        </Button>
      </div>
    </div>
  );
}
