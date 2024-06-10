import IconClose from "../icons/IconClose";

interface CloseButtonProps {
  onClick?: () => void;
}

export default function CloseButton({ onClick }: CloseButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="close button"
      className="absolute top-2 right-2 flex justify-center items-center h-10 w-10 laptop:w-[52px] laptop:h-[52px] p-2 laptop:hover:text-accent 
      laptop:focus-visible:text-accent transition-[color] duration-300 ease-out-quart outline-none"
    >
      <IconClose />
    </button>
  );
}
