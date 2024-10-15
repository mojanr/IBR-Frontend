import LogoIcon from "@/common/ui/component/logo/LogoIcon";
import { cn } from "@/core/lib/util";
import Profile from "../profile/Profile";
import Toolbar from "../toolbar/Toolbar";
import ToolbarItem from "../toolbar/ToolbarItem";
import { LuLogOut } from "react-icons/lu";
import Link from "next/link";

type DockProps = {
  className?: string
}

const Dock = ({ className }: DockProps) => {
  return (
    <div className={cn("w-14 h-full flex flex-col items-center justify-between py-3 gap-y-1 border-r-2 border-slate-200", className)}>
      <div className="flex flex-col items-center gap-y-3">
        {/* logo icon */}
        <Link href="/main">
          <LogoIcon className="text-white text-4xl" />
        </Link>
        {/* profile, avatar and popup content */}
        <Profile />
        {/* toolbar */}
        <Toolbar />
      </div>
      <div className="flex flex-col items-center gap-y-1">
        {/* setting */}
        {/* info */}
        {/* about */}
        {/* logout */}
        <ToolbarItem href="logout" tooltip="Logout" icon={<LuLogOut />} />
      </div>
    </div>
  );
}

export default Dock;