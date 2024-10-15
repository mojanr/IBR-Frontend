import TableIndexUserSearchFilter from "./TableIndexUserSearchFilter";
import TableIndexUserSearchInput from "./TableIndexUserSearchInput";

const TableIndexUserSearch = () => {
  return (
    <div className="flex flex-row gap-x-3 mb-3">
      <TableIndexUserSearchFilter />
      <TableIndexUserSearchInput />
    </div>
  );
}

export default TableIndexUserSearch;