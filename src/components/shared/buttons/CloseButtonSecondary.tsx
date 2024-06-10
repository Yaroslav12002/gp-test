import Image from "next/image";
import IconCloseSecondary from "../icons/IconCloseSecondary";

interface CloseButtonSecondaryProps {
  onClick?: () => void;
}

export default function CloseButtonSecondary({
  onClick,
}: CloseButtonSecondaryProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="close button"
      className="absolute top-2 right-2 flex justify-center items-center h-8 w-8 tablet:h-10 tablet:w-10 text-primary laptop:hover:text-accent 
      laptop:focus-visible:text-accent transition-[color] duration-[300ms] ease-out-quart"
    >
      <IconCloseSecondary className="w-full h-full" />
    </button>
  );
}
