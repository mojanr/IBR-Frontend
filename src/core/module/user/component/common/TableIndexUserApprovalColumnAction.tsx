import TableColumnAction from "@/common/ui/component/table/TableColumnAction";
import { type MenuProps } from "antd";
import { LuCheckCircle, LuCircleSlash2 } from "react-icons/lu";
import { useModalEditRoleUser } from "../role/ModalEditRoleUser";

type TableIndexUserApprovalColumnActionProps = {
  id: number
}

const TableIndexUserApprovalColumnAction = ({ id }: TableIndexUserApprovalColumnActionProps) => {

  // use modal edit role
  const { open: openModalEditRoleUser } = useModalEditRoleUser()

  const items: MenuProps["items"] = [
    {
      key: 'user-approve',
      label: "Approve",
      icon: <LuCheckCircle className="text-green-700" />,
      onClick: () => openModalEditRoleUser({ id })
    },
    {
      key: 'user-reject',
      label: "Reject",
      danger: true,
      icon: <LuCircleSlash2 />,
      // onClick: () => openModalEditUser({ id })
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

export default TableIndexUserApprovalColumnAction;