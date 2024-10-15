import { type TableProps } from "antd";
import { type User } from "../../type/user";
import ModalDetailUserTrigger from "../detail/ModalDetailUserTrigger";
import SwitchStatusUser from "../status/SwitchStatusUser";
import TableIndexUserColumnAction from "./TableIndexUserColumnAction";

// type index user data
export type TableIndexUserData = Pick<User, 'id'> & Partial<Omit<User, 'id'>>

export const TableIndexUserColumn: TableProps<TableIndexUserData>["columns"] = [
  {
    title: "Nama",
    dataIndex: "nama",
    key: "nama",
    render: (_, user) => <ModalDetailUserTrigger id={user.id}> {user?.nama} </ModalDetailUserTrigger>
  },
  {
    title: "Username",
    dataIndex: "username",
    key: "username",
    width: 200
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
    width: 300
  },
  {
    title: "Role",
    dataIndex: "role",
    key: "role",
    width: 200,
    render: (_, user) => user.name
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    width: 100,
    render: (_, user) => <SwitchStatusUser userId={user.id} status={user?.status == 1 ? true : false} />
  },
  // {
  //   title: "No Lisensi",
  //   dataIndex: "no_licensi",
  //   key: "no_licensi",
  // },
  // {
  //   title: "Tempat Tanggal Lahir",
  //   dataIndex: "ttl",
  //   key: "ttl",
  //   render: (_, user) => <span> {user.tempat_lahir},{user.tanggal_lahir} </span>
  // },
  {
    title: "",
    dataIndex: "id",
    key: "id",
    fixed: "right",
    width: 50,
    render: (_, user) => <TableIndexUserColumnAction id={user.id} />
  },
]