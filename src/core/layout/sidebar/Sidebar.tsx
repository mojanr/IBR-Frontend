import { cn } from "@/core/lib/util";

type SidebarProps = {
  className?: string
}

const Sidebar = ({ children, className }: React.PropsWithChildren<SidebarProps>) => {
  return (
    <div className={cn("h-full flex flex-row", className)}>
      {children}
    </div>
  );
}

export default Sidebar;