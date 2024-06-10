import { ReactNode } from "react";

interface TextButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function TextButton({
  children,
  className,
  onClick,
}: TextButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-[320px] h-10 outline-none border-y border-primary text-baseb laptop:text-mdsb text-black laptop:hover:text-accent 
      laptop:focus-visible:text-accent laptop:hover:border-accent laptop:focus-visible:border-accent transition-[color] duration-[300ms] ease-out-quart ${className}`}
    >
      {children}
    </button>
  );
}
