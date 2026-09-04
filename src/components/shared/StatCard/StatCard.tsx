import { ReactNode } from "react";

import { Card, CardContent } from "@/components/ui/card";

interface StatCardProps {
  title: string;
  value: string | number;
  icon?: ReactNode;
  description?: string;
}

export default function StatCard({
  title,
  value,
  icon,
  description,
}: StatCardProps) {
  return (
    <Card>
      <CardContent className="flex items-start justify-between p-6">
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">
            {title}
          </p>

          <h2 className="text-3xl font-bold">
            {value}
          </h2>

          {description && (
            <p className="text-sm text-muted-foreground">
              {description}
            </p>
          )}
        </div>

        {icon && (
          <div className="text-muted-foreground">
            {icon}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
