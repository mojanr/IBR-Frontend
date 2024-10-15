"use client"

import { cn } from "@/core/lib/util"
import { useKeyPress, useToggle } from "ahooks"
import { Button } from "antd"
import { LuChevronLeft, LuChevronRight } from "react-icons/lu"
import Navigation from "./Navigation"

type NavigationCollapseProps = {
  className?: string
}

const NavigationCollapse = ({ children, className }: React.PropsWithChildren<NavigationCollapseProps>) => {

  // toggle collapse state
  const [isCollapse, { toggle: toggleCollapse }] = useToggle(false)
  // toggle collaspse on key press ctrl + b
  useKeyPress('ctrl.b', () => toggleCollapse())

  return (
    <div className={cn("relative", { "flex-1": !isCollapse })}>
      <Button shape="circle" type="default" size="small" icon={isCollapse ? <LuChevronRight /> : <LuChevronLeft />} className="absolute -right-3 top-[17px] z-10" onClick={toggleCollapse} />
      <div className={cn("h-full flex-1 flex flex-col p-3 gap-y-2 border-r-2 border-slate-200 overflow-y-auto", className, { 'hidden': isCollapse })}>
        {children}
      </div>
    </div>
  );
}

export default NavigationCollapse