import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export function PageContainer({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-content px-6 lg:px-10 xl:px-16 2xl:px-20",
        className
      )}
    >
      {children}
    </div>
  );
}
