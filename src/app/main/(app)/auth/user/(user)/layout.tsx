import Title from "@/common/ui/component/title/Title";
import PageHeader from "@/core/layout/page/PageHeader";
import TableIndexUserSegment from "@/core/module/user/component/common/TableIndexUserSegment";
import { Button } from "antd";
import { Metadata } from "next";
import Link from "next/link";
import { LuPlus } from "react-icons/lu";

export const metadata: Metadata = {
  title: "User"
}

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="py-3 px-5">
      <PageHeader className="mb-3">
        <div className="w-full flex flex-row justify-between">
          <Title> {metadata.title as string} </Title>
          <Link href="/main/auth/user/create">
            <Button type="primary" icon={<LuPlus />}> Create User </Button>
          </Link>
        </div>
      </PageHeader>

      {/* segment page */}
      <TableIndexUserSegment />

      {children}
    </div>
  );
}

export default Layout;