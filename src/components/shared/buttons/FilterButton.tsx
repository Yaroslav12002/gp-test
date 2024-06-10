import { useTranslations } from "next-intl";

interface FilterButtonProps {
  children: string;
  className?: string;
  currentCategory?: string;
  handleCLick?: () => void;
}

export default function FilterButton({
  children,
  className = "",
  handleCLick,
  currentCategory,
}: FilterButtonProps) {
  const t = useTranslations("Rent");

  return (
    <button
      type="button"
      onClick={handleCLick}
      className={`group relative flex items-center justify-center w-full h-10 text-baseb laptop:text-mdb outline-none border laptop:focus-visible:border-2 ${
        t(currentCategory) === children
          ? "text-white-bgSecondary bg-primary"
          : "text-primary border-primary bg-white-bgSecondary"
      } ${className}`}
    >
      {children}
      <div
        data-label={children}
        className={`absolute z-10 flex justify-center items-center bg-primary text-white-text overflow-hidden h-0 w-full 
        group-enabled:laptop:group-hover:h-full before:content-[attr(data-label)] transition-[height] duration-[300ms] ease-out-quart`}
      ></div>
    </button>
  );
}
