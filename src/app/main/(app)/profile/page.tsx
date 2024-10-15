import Title from "@/common/ui/component/title/Title";
import FormProfile from "@/core/module/auth/component/profile/FormProfile";
import { Button, Divider } from "antd";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile",
  description: "Profile"
}

const Page = () => {
  return (
    <div className="py-3 px-5">
      <Title className="mb-5"> {metadata.title as string} </Title>

      <FormProfile />
    </div>
  );
}

export default Page;