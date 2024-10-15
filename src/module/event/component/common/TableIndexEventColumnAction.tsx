"use client"

import TableColumnAction from "@/common/ui/component/table/TableColumnAction";
import { MenuProps } from "antd";
import { LuCircleSlash2, LuFileEdit, LuShieldAlert, LuTrash2, LuUserCog2 } from "react-icons/lu";
import { useModalBatalEvent } from "../batal/ModalBatalEvent";
import Link from "next/link";
import { MdEventNote } from "react-icons/md";

type TableIndexEventColumnActionProps = {
  id: number
}

const TableIndexEventColumnAction = ({ id }: TableIndexEventColumnActionProps) => {

  // use modal pembatalan
  const { open: openModalPembatalanEvent} = useModalBatalEvent()

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
      key: 'match',
      label: <Link href={`/main/event/${id}/match`}>Match</Link>,
      icon: <MdEventNote className="text-orange-700" />,
      // onClick: () => openModalPembatalanEvent({ id })
    },
    {
      key: 'event-batal',
      label: "Pembatalan",
      icon: <LuCircleSlash2 className="text-red-700" />,
      onClick: () => openModalPembatalanEvent({ id })
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
      key: 'event-delete',
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

export default TableIndexEventColumnAction;