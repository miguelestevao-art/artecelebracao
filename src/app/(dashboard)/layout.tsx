import { ReactNode } from "react";

import AppShell from "@/components/layout/AppShell";
import PageContainer from "@/components/layout/PageContainer";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  return (
    <AppShell>
      <PageContainer>
        {children}
      </PageContainer>
    </AppShell>
  );
}
