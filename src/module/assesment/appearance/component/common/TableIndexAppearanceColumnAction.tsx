import TableColumnAction from "@/common/ui/component/table/TableColumnAction";
import { type MenuProps } from "antd";
import { LuFileEdit, LuPlus, LuShieldAlert, LuTrash2 } from "react-icons/lu";
import { useModalCreateAppearance } from "../create/ModalCreateAppearance";

type TableIndexAppearanceColumnAction = {
  id: number
  appearance: any
}

const TableIndexAppearanceColumnAction = ({ id, appearance }: TableIndexAppearanceColumnAction) => {

  // use add indicator
  const { open: openModalCreateAppearance } = useModalCreateAppearance()

  const items: MenuProps["items"] = [
    {
      key: 'appearance-edit',
      label: 'Edit',
      icon: <LuFileEdit className="text-orange" />,
      // onClick: () => openModalEditUser({ id })
    },
    appearance?.level == 1 ? ({
      key: 'appearance-add-child',
      label: 'Add Indicator',
      icon: <LuPlus className="text-orange" />,
      onClick: () => openModalCreateAppearance({ level: 2, order: 0 })
    }) : (null),
    // {
    //   key: 'appearance',
    //   label: "Change Password",
    //   icon: <LuShieldAlert className="text-orange" />,
    //   // onClick: () => openModalEditPasswordUser({ id })
    // },
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
      key: 'appearance-delete',
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

export default TableIndexAppearanceColumnAction;