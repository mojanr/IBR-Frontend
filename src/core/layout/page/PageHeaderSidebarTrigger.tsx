import { Button } from "antd";
import DrawerSidebarTrigger from "../sidebar/DrawerSidebarTrigger";
import { LuMenu } from "react-icons/lu";
import { cn } from "@/core/lib/util";

type PageHeaderSidebarTrigger = {
  className?: string
}

const PageHeaderSidebarTrigger = ({ className }: PageHeaderSidebarTrigger) => {
  return (
    <DrawerSidebarTrigger className={cn(className)}>
      <Button type="text" icon={<LuMenu />} />
    </DrawerSidebarTrigger>
  );
}

export default PageHeaderSidebarTrigger;