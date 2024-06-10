import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export default function Container({ children, className }: ContainerProps) {
  return (
    <div className={`container max-w-[560px] tablet:max-w-full ${className}`}>
      {children}
    </div>
  );
}
