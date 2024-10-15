"use client"

import TableColumnAction from "@/common/ui/component/table/TableColumnAction";
import { type MenuProps } from "antd";
import { LuFileEdit } from "react-icons/lu";

type TableIndexMatchColumnActionProps = {
  id: number
}

const TableIndexMatchColumnAction = ({ id }: TableIndexMatchColumnActionProps) => {
  
  // open new window with fullscreen mode
  const onStart = () => {
    window.open("/main/match/1", "_blank", `width=${screen.width},height=${screen.height},location=no,status=no,toolbar=no,fullscreen=yes,menubar=no`);
  }
  
  const items: MenuProps["items"] = [
    {
      key: 'match-start',
      // label: "Start",
      label: (
        <a onClick={onStart}>
          Start
        </a>
      ),
      icon: <LuFileEdit className="text-orange" />,
      // onClick: () => openModalEditUser({ id })
    },
    // {
    //   key: 'user-password-change',
    //   label: "Change Password",
    //   icon: <LuShieldAlert className="text-orange" />,
    //   onClick: () => openModalEditPasswordUser({ id })
    // },
    // {
    //   key: 'user-role-change',
    //   label: "Change Role",
    //   icon: <LuUserCog2 className="text-orange" />,
    //   onClick: () => openModalEditRoleUser({ id })
    // },
    // // {
    // //   key: 'user-menu',
    // //   label: <Link href={`/main/auth/role/${roleId}/menu`}>Menu</Link>,
    // //   icon: <LuMenu className="text-orange-500" />
    // // },
    // // {
    // //   key: 'user-permission',
    // //   label: <Link href={`/main/auth/role/${roleId}/permission`}>Permission</Link>,
    // //   icon: <LuShield className="text-orange-500" />
    // // },
    // {
    //   type: 'divider',
    // },
    // {
    //   key: 'user-delete',
    //   label: 'Hapus',
    //   danger: true,
    //   icon: <LuTrash2 />,
    //   // onClick: onDelete
    // },
  ]

  return (
    <TableColumnAction items={items} />
  );
}

export default TableIndexMatchColumnAction;