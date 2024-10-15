import { cn } from "@/core/lib/util";

type NavigationProps = {
  className?: string
}

const Navigation = ({ children, className }: React.PropsWithChildren<NavigationProps>) => {
  return (
    <div className={cn("h-full flex-1 flex flex-col p-3 gap-y-2 border-r-2 border-slate-200 overflow-y-auto", className)}>
      {children}
    </div>
  );
}

export default Navigation;