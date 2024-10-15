import { Badge, Tooltip } from "antd";
import Link from "next/link";
import { LuBell } from "react-icons/lu";

type ToolbarItemProps = {
  href: string
}

const Notification = ({ href }: ToolbarItemProps) => {
  return (
    <Tooltip placement="right" title="Notification">
      {/* <div> */}
        {/* <Badge count={3} size="small" offset={[-10, 10]}> */}
          <Link href={href} className="w-9 h-9 rounded-md text-white text-base hover:bg-slate-700/50 flex items-center justify-center">
            <LuBell />
          </Link>
        {/* </Badge> */}
      {/* </div> */}
    </Tooltip>
  );
}

export default Notification;