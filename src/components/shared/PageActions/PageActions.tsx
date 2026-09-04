import { ReactNode } from "react";

interface PageActionsProps {
  children: ReactNode;
}

export default function PageActions({
  children,
}: PageActionsProps) {
  return (
    <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      {children}
    </div>
  );
}
