import { ReactNode } from "react";

interface PageContainerProps {
  children: ReactNode;
}

export default function PageContainer({
  children,
}: PageContainerProps) {
  return (
    <main className="flex-1 p-6 bg-background">
      <div className="mx-auto w-full max-w-7xl">
        {children}
      </div>
    </main>
  );
}
