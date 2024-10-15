import { type TableProps } from "antd";
import TableIndexMatchColumnAction from "./TableIndexMatchColumnAction";

export const TableIndexMatchColumn: TableProps<any>["columns"] = [
  {
    title: "Nama Pertandingan",
    dataIndex: "nama_pertandingan",
    key: "nama_pertandingan",
    // render: (_, user) => <ModalDetailUserTrigger id={user.id}> {user?.nama} </ModalDetailUserTrigger>
  },
  {
    title: "Tanggal",
    dataIndex: "tanggal",
    key: "tanggal",
    width: 200
  },
  // {
  //   title: "Email",
  //   dataIndex: "email",
  //   key: "email",
  //   width: 300
  // },
  // {
  //   title: "Role",
  //   dataIndex: "role",
  //   key: "role",
  //   width: 200,
  //   render: (_, user) => user.name
  // },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    width: 100,
    // render: (_, user) => <SwitchStatusUser userId={user.id} status={user?.status == 1 ? true : false} />
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
  // {
  //   title: "",
  //   dataIndex: "id",
  //   key: "id",
  //   fixed: "right",
  //   width: 50,
  //   render: (_, event) => <TableIndexMatchColumnAction id={event.id} />
  // },
]