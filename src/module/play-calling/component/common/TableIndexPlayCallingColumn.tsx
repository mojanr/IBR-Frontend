import { TableProps } from "antd";
import TableIndexPlayCallingColumnAction from "./TableIndexPlayCallingColumnAction";

export const TableIndexPlayCallingColumn: TableProps<any>["columns"] = [
  {
    title: "Nomor Event",
    dataIndex: "nomor_event",
    key: "nomor_event",
    width: 200,
    // render: (_, playCalling) => <ModalDetailEventTrigger id={event.id}> {event?.nomor_event} </ModalDetailEventTrigger>
  },
  {
    title: "Nama Event",
    dataIndex: "nama_event",
    key: "nama_event",
    // width: 200
  },
  {
    title: "Tanggal",
    dataIndex: "tanggal",
    key: "tanggal",
    width: 300,
    render: (_, playCalling) => `${playCalling?.tanggal_mulai} - ${playCalling?.tanggal_selesai}` 
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    width: 100,
    // render: (status, playCalling) => <StatusplayCalling status={status} />
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
    render: (_, playCalling) => <TableIndexPlayCallingColumnAction id={playCalling.id} />
  },
]