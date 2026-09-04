import { Skeleton } from "@/components/ui/skeleton";

interface LoadingStateProps {
  rows?: number;
}

export default function LoadingState({
  rows = 5,
}: LoadingStateProps) {
  return (
    <div className="space-y-4">
      <Skeleton className="h-8 w-56" />

      {Array.from({ length: rows }).map((_, index) => (
        <Skeleton
          key={index}
          className="h-16 w-full rounded-xl"
        />
      ))}
    </div>
  );
}
