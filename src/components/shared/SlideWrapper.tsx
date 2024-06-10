import Image from "next/image";
import { ReactNode } from "react";

interface SlideWrapperProps {
  children: ReactNode;
  className?: string;
}

export default function SlideWrapper({
  children,
  className = "",
}: SlideWrapperProps) {
  return (
    <div
      className={`relative h-full laptop:p-5 border border-primary ${className}`}
    >
      <Image
        src={`/images/icons/corner.svg`}
        width="0"
        height="0"
        alt=""
        sizes="100%"
        className={`absolute top-0 left-0 w-16 h-16 laptop:w-20 laptop:h-20`}
      />
      <Image
        src={`/images/icons/corner.svg`}
        width="0"
        height="0"
        alt=""
        sizes="100%"
        className={`absolute bottom-0 right-0 w-16 h-16 laptop:w-20 laptop:h-20 rotate-180`}
      />
      {children}
    </div>
  );
}
