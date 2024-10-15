"use client"

import TableColumnAction from "@/common/ui/component/table/TableColumnAction";
import { MenuProps } from "antd";
import { LuCircleSlash2, LuTrash2 } from "react-icons/lu";

type TableIndexPlayCallingColumnActionProps = {
  id: number
}

const TableIndexPlayCallingColumnAction = ({ id }: TableIndexPlayCallingColumnActionProps) => {

  // use modal pembatalan
  // const { open: openModalPembatalanEvent } = useModalBatalEvent()

  const items: MenuProps["items"] = [
    // {
    //   key: 'event-edit',
    //   label: "Edit",
    //   icon: <LuFileEdit className="text-orange" />,
    //   // onClick: () => openModalEditUser({ id })
    // },
    // {
    //   key: 'event-password-change',
    //   label: "Change Password",
    //   icon: <LuShieldAlert className="text-orange" />,
    //   // onClick: () => openModalEditPasswordUser({ id })
    // },
    // {
    //   key: 'event-role-change',
    //   label: "Change Role",
    //   icon: <LuUserCog2 className="text-orange" />,
    //   // onClick: () => openModalEditRoleUser({ id })
    // },
    {
      key: 'play-calling-batal',
      label: "Pembatalan",
      icon: <LuCircleSlash2 className="text-red-700" />,
      // onClick: () => openModalPembatalanEvent({ id })
    },
    // {
    //   key: 'user-menu',
    //   label: <Link href={`/main/auth/role/${roleId}/menu`}>Menu</Link>,
    //   icon: <LuMenu className="text-orange-500" />
    // },
    // {
    //   key: 'user-permission',
    //   label: <Link href={`/main/auth/role/${roleId}/permission`}>Permission</Link>,
    //   icon: <LuShield className="text-orange-500" />
    // },
    {
      type: 'divider',
    },
    {
      key: 'play-calling-delete',
      label: 'Hapus',
      danger: true,
      icon: <LuTrash2 />,
      // onClick: onDelete
    },
  ]

  return (
    <TableColumnAction items={items} />
  );
}

export default TableIndexPlayCallingColumnAction;