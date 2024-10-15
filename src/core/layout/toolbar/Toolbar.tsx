import { LuLogOut, LuSettings } from "react-icons/lu";
import Notification from "../notification/Notification";
import ToolbarItem from "./ToolbarItem";
import { cn } from "@/core/lib/util";
import DrawerNotificationTrigger from "../notification/DrawerNotificationTrigger";
import ButtonLogout from "@/core/module/auth/component/logout/ButtonLogout";

type ToolbarProps = {
  className?: string
}

const Toolbar = ({ className }: ToolbarProps) => {
  return (
    <div className={cn("flex flex-col items-center gap-y-1", className)}>
      {/* <Notification href="notification" /> */}
      <DrawerNotificationTrigger />
      {/* <ToolbarItem href="settings" tooltip="Settings" icon={<LuSettings />} /> */}
      {/* <ToolbarItem href="logout" tooltip="Logout" icon={<LuLogOut />} /> */}
      <ButtonLogout />
    </div>
  );
}

export default Toolbar;