import { Button, Dropdown } from "antd";
import { type ItemType } from "antd/es/menu/interface";
import { IoEllipsisHorizontal } from "react-icons/io5";

type TableColumnActionProps = {
  items: ItemType[]
}

const TableColumnAction = ({ items }: TableColumnActionProps) => {
  return (
    <Dropdown menu={{ items }} trigger={['click']} overlayClassName="min-w-40">
      <Button type="text" icon={<IoEllipsisHorizontal />} />
    </Dropdown>
  );
}

export default TableColumnAction;