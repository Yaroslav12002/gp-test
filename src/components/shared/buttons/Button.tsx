interface ButtonProps {
  children: string;
  variant?: "primary" | "secondary";
  size?: "big" | "small";
  ariaLabel?: string;
  className?: string;
  type?: "submit" | "button";
  disabled?: boolean;
  onClick?: () => void;
}

export default function Button({
  children,
  variant = "primary",
  size = "big",
  ariaLabel = "",
  className = "",
  type = "button",
  disabled = false,
  onClick,
}: ButtonProps) {
  const primaryColor = "bg-accent disabled:bg-disabled";
  const secondaryColor =
    "bg-transparent border-solid border-[1px] border-white-bg disabled:border-disabled disabled:text-disabled";
  return (
    <button
      aria-label={ariaLabel}
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`group relative flex justify-center items-center ${
        variant === "primary" ? primaryColor : secondaryColor
      } ${
        size === "big"
          ? "w-[180px] h-[56px] laptop:w-[207px]"
          : "w-[162px] h-[40px]"
      }  outline-none text-baseb text-white-text ${className}`}
    >
      {children}
      <div
        data-label={children}
        className={`absolute z-10 flex justify-center items-center bg-white-bg 
         ${
           variant === "primary"
             ? "text-accent group-enabled:laptop:group-hover:border group-enabled:laptop:group-focus:border border-accent"
             : "text-primary"
         } overflow-hidden h-0 w-full group-enabled:laptop:group-focus:h-full 
         group-enabled:laptop:group-hover:h-full before:content-[attr(data-label)] transition-[height] duration-[300ms] ease-out-quart`}
      ></div>
    </button>
  );
}
