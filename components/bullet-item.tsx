import { ReactNode } from "react";

interface BulletItemProps {
  children: ReactNode;
}

export function BulletItem({ children }: BulletItemProps) {
  return (
    <li className="flex items-start gap-2">
      <span
        className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-brand-red"
        aria-hidden="true"
      />
      {children}
    </li>
  );
}
