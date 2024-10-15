import { Button, Popover } from "antd";
import { LuFilter } from "react-icons/lu";
import TableIndexUserSearchFilterContent from "./TableIndexUserSearchFilterContent";

const TableIndexUserSearchFilter = () => {
  return (
    <Popover content={<TableIndexUserSearchFilterContent />} placement="bottomLeft" trigger="click">
      <Button type="primary" icon={<LuFilter />} />
    </Popover>
  );
}

export default TableIndexUserSearchFilter;