import { Tag } from "antd";
import { EventStatus } from "../../type/event";

type StatusEventProps = {
  status: any
}

const StatusEvent = ({ status }: StatusEventProps) => {
  switch (status) {
    case EventStatus.PENGAJUAN:
      return <Tag color="#334155"> Pengajuan </Tag>
      break;
    case EventStatus.APPROVE:
      return <Tag color="#1d4ed8"> Approve </Tag>
      break;
    case EventStatus.REJECT:
      return <Tag color="#b91c1c"> Reject </Tag>
      break;
    case EventStatus.START:
      return <Tag color="#4d7c0f"> Start </Tag>
      break;
    case EventStatus.END:
      return <Tag color="#4d7c0f"> Start </Tag>
      break;
    default:
      return null
      break;
  }
  // return (
  //   <div>
  //     Enter
  //   </div>
  // );
}

export default StatusEvent;