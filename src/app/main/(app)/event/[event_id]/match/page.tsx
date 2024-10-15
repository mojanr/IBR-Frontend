import Title from "@/common/ui/component/title/Title";
import PageHeader from "@/core/layout/page/PageHeader";
import TableIndexMatch from "@/module/match/component/common/TableIndexMatch";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Match",
  description: "Match"
}

const Page = ({ params }: { params: { event_id: string } }) => {
  return (
    <div className="py-3 px-5">
      <PageHeader className="mb-3">
        <div className="w-full flex flex-row justify-between">
          <Title> {metadata.title as string} </Title>
          {/* <Link href="/main/auth/user/create">
          <Button type="primary" icon={<LuPlus />}> Create User </Button>
        </Link> */}
        </div>
      </PageHeader>

      {/* table index match */}
      <TableIndexMatch eventId={params.event_id} />
    </div>
  );
}

export default Page;