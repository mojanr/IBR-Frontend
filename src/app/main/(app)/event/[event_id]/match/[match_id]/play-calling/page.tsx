import Title from "@/common/ui/component/title/Title";
import PageHeader from "@/core/layout/page/PageHeader";
import TableIndexPlayCalling from "@/module/play-calling/component/common/TableIndexPlayCalling";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Play Calling",
  description: "Play Calling"
}

const Page = () => {
  return (
    <div className="py-3 px-5">
      <PageHeader className="mb-3">
        <div className="w-full flex flex-row justify-between">
          <Title> {metadata.title as string} </Title>
          {/* <Link href="/main/auth/user/create">
          <Button type="primary" icon={<LuPlus />}> Create User </Button>
        </Link> */}
          {/* <DrawerFormCreateEventTrigger /> */}
        </div>
      </PageHeader>
      
      {/* table index play calling */}
      <TableIndexPlayCalling />
    </div>
  );
}

export default Page;