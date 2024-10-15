"use client"

import { Badge, Tooltip } from "antd";
import { LuBell } from "react-icons/lu";
import { useDrawerNotification } from "./DrawerNotification";

const DrawerNotificationTrigger = () => {

  // use drawer notification
  const { open } = useDrawerNotification()

  return (
    <Tooltip placement="right" title="Notification">
      <div onClick={open}>
        <Badge count={3} size="small" offset={[-10, 10]}>
          <div className="w-9 h-9 rounded-md text-white text-base hover:bg-slate-700/50 hover:cursor-pointer flex items-center justify-center">
            <LuBell />
          </div>
        </Badge>
      </div>
    </Tooltip>
  );
}

export default DrawerNotificationTrigger;