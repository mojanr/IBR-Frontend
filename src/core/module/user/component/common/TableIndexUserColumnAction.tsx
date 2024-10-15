"use client"

import TableColumnAction from "@/common/ui/component/table/TableColumnAction";
import { type MenuProps } from "antd";
import { LuFileEdit, LuShieldAlert, LuTrash2, LuUserCog2 } from "react-icons/lu";
import { useModalEditPasswordUser } from "../password/ModalEditPasswordUser";
import { useModalEditRoleUser } from "../role/ModalEditRoleUser";
import Link from "next/link";

type TableIndexUserColumnActionProps = {
  id: number
}

const TableIndexUserColumnAction = ({ id }: TableIndexUserColumnActionProps) => {

  // use modal form edit user
  // const { open: openModalEditUser } = useModalFormEditUser()
  // use modal edit password
  const { open: openModalEditPasswordUser } = useModalEditPasswordUser()
  // use modal edit role
  const { open: openModalEditRoleUser } = useModalEditRoleUser()

  const items: MenuProps["items"] = [
    {
      key: 'user-edit',
      label: <Link href={`/main/auth/user/${id}/edit`}> Edit </Link>,
      icon: <LuFileEdit className="text-orange" />,
      // onClick: () => openModalEditUser({ id })
    },
    {
      key: 'user-password-change',
      label: "Change Password",
      icon: <LuShieldAlert className="text-orange" />,
      onClick: () => openModalEditPasswordUser({ id })
    },
    // {
    //   key: 'user-role-change',
    //   label: "Change Role",
    //   icon: <LuUserCog2 className="text-orange" />,
    //   onClick: () => openModalEditRoleUser({ id })
    // },
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
      key: 'user-delete',
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

export default TableIndexUserColumnAction;