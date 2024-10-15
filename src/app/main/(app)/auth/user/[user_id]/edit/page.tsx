import Title from "@/common/ui/component/title/Title";
import PageHeader from "@/core/layout/page/PageHeader";
import FormEditUser from "@/core/module/user/component/edit/FormEditUser";
import FormEditUserWrapper from "@/core/module/user/component/edit/FormEditUserWrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Edit User",
  description: "Edit User"
}

const Page = ({ params }: { params: { user_id: string } }) => {
  return (
    <div className="py-3 px-5">
      <PageHeader className="mb-3">
        <Title> {metadata.title as string} </Title>
      </PageHeader>

      {/* form edit user */}
      {/* <FormEditUser id={params.user_id} /> */}
      <FormEditUserWrapper id={params.user_id} />
    </div>
  );
}

export default Page;