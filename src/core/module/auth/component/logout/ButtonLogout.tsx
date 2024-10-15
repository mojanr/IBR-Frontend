"use client"

import { Tooltip } from "antd";
import { LuLogOut } from "react-icons/lu";
import { logout } from "../../action/logout";

const ButtonLogout = () => {
  return (
    <Tooltip placement="right" title="Logout">
      <form action={logout}>
        <button type="submit" className="w-9 h-9 rounded-md text-white text-base hover:bg-slate-700/50 flex items-center justify-center">
          <LuLogOut />
        </button>
      </form>
    </Tooltip>
  );
}

export default ButtonLogout;