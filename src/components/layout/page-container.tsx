import { cn } from "@/lib/utils";

export interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function PageContainer({ children, className }: PageContainerProps) {
  return (
   <div className="content-wrapper">
        <div className={cn("content", className)}>
          {children}
        </div>
      </div>
  );
}


