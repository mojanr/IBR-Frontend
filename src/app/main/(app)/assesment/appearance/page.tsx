import Title from "@/common/ui/component/title/Title";
import PageHeader from "@/core/layout/page/PageHeader";
import { auth } from "@/core/module/auth/lib/auth";
import TableIndexAppearance from "@/module/assesment/appearance/component/common/TableIndexAppearance";
import ModalCreateAppearance from "@/module/assesment/appearance/component/create/ModalCreateAppearance";
// import ModalCreateAppearanceTrigger from "@/module/assesment/appearance/component/create/ModalCreateAppearanceTrigger";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Assesment - Appearance",
  description: "Assesment - Appeararance"
}

const Page = async () => {

  const session = await auth()

  return (
    <div className="py-3 px-5">
      <PageHeader className="mb-3">
        <div className="w-full flex flex-row justify-between">
          <Title> {metadata.title as string} </Title>
          {/* <Link href="/main/auth/user/create">
            <Button type="primary" icon={<LuPlus />}> Create User </Button>
          </Link> */}
          {/* <ModalCreateAppearanceTrigger /> */}
        </div>
      </PageHeader>

      {/* table tree appearance indicator */}
      <TableIndexAppearance />

      {/* modal create appearance */}
      <ModalCreateAppearance userId={session?.user.id as string} />
    </div>
  );
}

export default Page;