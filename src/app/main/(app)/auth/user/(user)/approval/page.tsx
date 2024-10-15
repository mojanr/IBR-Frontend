import TableIndexUserApproval from "@/core/module/user/component/common/TableIndexUserApproval";
import { Input } from "antd";
import { Metadata } from "next";
import { LuSearch } from "react-icons/lu";

export const metadata: Metadata = {
  title: "User",
  description: "User"
}

const Page = () => {
  return (
    <>
      {/* table filter */}
      <div className="mb-3">
        <Input prefix={<LuSearch />} placeholder="Cari data..." />
      </div>

       {/* table index approval user */}
       <TableIndexUserApproval />
    </>
  );
}

export default Page;