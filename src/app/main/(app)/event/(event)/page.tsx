import ModalBatalEvent from "@/module/event/component/batal/ModalBatalEvent";
import TableIndexEvent from "@/module/event/component/common/TableIndexEvent";
import ModalDetailEvent from "@/module/event/component/detail/ModalDetailEvent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Event",
  description: "Event"
}

const Page = () => {
  return (
    // <div className="py-3 px-5">
    //   <PageHeader className="mb-3">
    //     <div className="w-full flex flex-row justify-between">
    //       <Title> {metadata.title as string} </Title>
    //       {/* <Link href="/main/auth/user/create">
    //         <Button type="primary" icon={<LuPlus />}> Create User </Button>
    //       </Link> */}
    //       <DrawerFormCreateEventTrigger />
    //     </div>
    //   </PageHeader>

    //   {/* table index event */}
    //   <TableIndexEvent />

    //   {/* drawer form create event */}
    //   <DrawerFormCreateEvent />

    //   {/* modal detail event */}
    //   <ModalDetailEvent />
    // </div>

    <>
      {/* table index event */}
      <TableIndexEvent />

      {/* modal batal event */}
      <ModalBatalEvent />

      {/* modal detail event */}
      < ModalDetailEvent />
    </>
  );
}

export default Page;