import { ReactNode } from "react";

import { Button } from "@/components/ui/button";

interface EmptyStateProps {
  icon?: ReactNode;
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
}

export default function EmptyState({
  icon,
  title,
  description,
  actionLabel,
  onAction,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl border border-dashed p-12 text-center">
      {icon && (
        <div className="mb-6 text-primary">
          {icon}
        </div>
      )}

      <h2 className="text-xl font-semibold">
        {title}
      </h2>

      <p className="mt-2 max-w-md text-muted-foreground">
        {description}
      </p>

      {actionLabel && onAction && (
        <Button
          className="mt-8"
          onClick={onAction}
        >
          {actionLabel}
        </Button>
      )}
    </div>
  );
}
