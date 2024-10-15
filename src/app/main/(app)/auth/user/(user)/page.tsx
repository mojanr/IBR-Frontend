import TableIndexUser from "@/core/module/user/component/common/TableIndexUser";
import TableIndexUserSearch from "@/core/module/user/component/common/TableIndexUserSearch";
import ModalDetailUser from "@/core/module/user/component/detail/ModalDetailUser";
import ModalEditPasswordUser from "@/core/module/user/component/password/ModalEditPasswordUser";
import ModalEditRoleUser from "@/core/module/user/component/role/ModalEditRoleUser";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "User",
  description: "User"
}

const Page = () => {
  return (
    <>
      {/* table index user filter */}
      <TableIndexUserSearch />
      {/* table index user */}
      <TableIndexUser />

      {/* modal detail */}
      <ModalDetailUser />
      {/* modal edit password */}
      <ModalEditPasswordUser />
      {/* modal edit role */}
      <ModalEditRoleUser />
    </>
  );
}

export default Page;