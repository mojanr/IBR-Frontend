import { type TableProps } from "antd";
import TableIndexEventColumnAction from "./TableIndexEventColumnAction";
import StatusEvent from "../status/StatusEvent";
import ModalDetailEventTrigger from "../detail/ModalDetailEventTrigger";

export const TableIndexEventColumn: TableProps<any>["columns"] = [
  {
    title: "Nomor Event",
    dataIndex: "nomor_event",
    key: "nomor_event",
    width: 200,
    render: (_, event) => <ModalDetailEventTrigger id={event.id}> {event?.nomor_event} </ModalDetailEventTrigger>
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
    render: (_, event) => `${event?.tanggal_mulai} - ${event?.tanggal_selesai}` 
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    width: 100,
    render: (status, event) => <StatusEvent status={status} />
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
    render: (_, event) => <TableIndexEventColumnAction id={event.id} />
  },
]