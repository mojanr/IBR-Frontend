"use client"

import InputSearch from "@/common/ui/component/input/InputSearch";
import { useTableIndexUser } from "../../hook/user";

const TableIndexUserSearchInput = () => {
  // use table index user
  const { params, changeSearch } = useTableIndexUser(false)

  // on change
  const onChange = (filter: any) => {
    changeSearch({ username: filter, nama: filter })
  }

  return (
    <InputSearch defaultValue={params?.search?.username || params?.search?.nama} onChange={onChange} />
  );
}

export default TableIndexUserSearchInput;