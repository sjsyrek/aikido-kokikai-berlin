import { ReactNode } from "react";

interface PageContainerProps {
  children: ReactNode;
  wide?: boolean;
}

export function PageContainer({ children, wide = false }: PageContainerProps) {
  return (
    <div
      className={`mx-auto px-4 py-12 md:py-16 ${wide ? "max-w-6xl" : "max-w-3xl"}`}
    >
      {children}
    </div>
  );
}
