import Title from "@/common/ui/component/title/Title";
import PageHeader from "@/core/layout/page/PageHeader";
import FormCreateUser from "@/core/module/user/component/create/FormCreateUser";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create User",
  description: "Create User"
}

const Page = () => {
  return (
    <div className="py-3 px-5">
      <PageHeader className="mb-3">
        <Title> {metadata.title as string} </Title>
      </PageHeader>

      {/* form create user */}
      <FormCreateUser />
    </div>
  );
}

export default Page;