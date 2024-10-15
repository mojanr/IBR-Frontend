"use client"

import { cn } from "@/core/lib/util";
import { useDrawerSidebar } from "./DrawerSidebar";

type DrawerSidebarTriggerProps = {
  className?: string
}

const DrawerSidebarTrigger = ({ children, className }: React.PropsWithChildren<DrawerSidebarTriggerProps>) => {

  // use drawer sidebar
  const { open } = useDrawerSidebar()

  return (
    <div onClick={open} className={cn(className)}>
      {children}
    </div>
  );
}

export default DrawerSidebarTrigger;