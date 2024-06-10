"use client";
import { ReactNode } from "react";
import { NextUIProvider } from "@nextui-org/react";

interface ProvidersProps {
  children: ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <NextUIProvider className="flex flex-col min-h-[100vh]">
      {children}
    </NextUIProvider>
  );
}
