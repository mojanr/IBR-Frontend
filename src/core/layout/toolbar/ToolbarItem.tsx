import { Tooltip } from "antd";
import Link from "next/link";

type ToolbarItemProps = {
  href: string
  tooltip: string
  icon: React.ReactNode
}

const ToolbarItem = ({ href, icon, tooltip }: ToolbarItemProps) => {
  return (
    <Tooltip placement="right" title={tooltip}>
      <Link href={href} className="w-9 h-9 rounded-md text-white text-base hover:bg-slate-700/50 flex items-center justify-center">
        {icon}
      </Link>
    </Tooltip>
  );
}

export default ToolbarItem;