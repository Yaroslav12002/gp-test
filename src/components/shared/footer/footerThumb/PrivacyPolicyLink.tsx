import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

export default function PrivacyPolicyLink() {
  const locale = useLocale();
  const t = useTranslations("Footer");
  return (
    <Link
      href={`/${locale}/policy`}
      className="inline-block mb-2 tablet:mb-0 outline-none text-2xs text-white-text laptop:hover:text-accent laptop:focus-visible:text-accent 
    transition-[color] duration-[300ms] ease-out-quart"
    >
      {t("policy")}
    </Link>
  );
}
