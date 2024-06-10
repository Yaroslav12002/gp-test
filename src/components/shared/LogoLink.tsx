import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";

interface LogoLinkProps {
  className?: string;
}

export default function LogoLink({ className }: LogoLinkProps) {
  const locale = useLocale();

  return (
    <Link
      href={`/`}
      locale={locale}
      className={`block relative group outline-none ${className}`}
    >
      <Image
        src={`/images/icons/logoWhite.svg`}
        width="0"
        height="0"
        alt="logo"
        className={`w-full h-auto`}
      />
      <div className="hidden laptop:flex items-center justify-center absolute top-[-9px] left-[-11px] z-[-10] w-[72px] h-[72px]">
        <Image
          src={`/images/icons/logoHover.svg`}
          width="0"
          height="0"
          alt="logo hover effect"
          className={`laptop:group-hover:w-[72px] laptop:group-focus-visible:w-[72px] h-auto transition-[width] duration-[600ms] ease-out-in`}
        />
      </div>
    </Link>
  );
}
