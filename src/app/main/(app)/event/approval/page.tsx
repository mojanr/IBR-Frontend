import TableIndexEventApproval from "@/module/event/component/common/TableIndexEventApproval";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Event",
  description: "Event"
}

const Page = () => {
  return (
    <>
      {/* table index event approval */}
      <TableIndexEventApproval />
    </>
  );
}

export default Page;