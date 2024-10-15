import Title from "@/common/ui/component/title/Title";
import PageHeader from "@/core/layout/page/PageHeader";
import TableIndexEventSegment from "@/module/event/component/common/TableIndexEventSegment";
import DrawerFormCreateEvent from "@/module/event/component/create/DrawerFormCreateEvent";
import DrawerFormCreateEventTrigger from "@/module/event/component/create/DrawerFormCreateEventTrigger";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Event",
  description: "Event"
}

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="py-3 px-5">
      <PageHeader className="mb-3">
        <div className="w-full flex flex-row justify-between">
          <Title> {metadata.title as string} </Title>
          {/* <Link href="/main/auth/user/create">
          <Button type="primary" icon={<LuPlus />}> Create User </Button>
        </Link> */}
          <DrawerFormCreateEventTrigger />
        </div>
      </PageHeader>

      {/* segment page */}
      <TableIndexEventSegment />

      {/* drawer form create event */}
      <DrawerFormCreateEvent />

      {children}
    </div>
  );
}

export default Layout;