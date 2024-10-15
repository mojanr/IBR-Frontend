import Title from "@/common/ui/component/title/Title";
import { auth } from "@/core/module/auth/lib/auth";
import { Button, Divider } from "antd";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Onboarding",
  description: "Onboarding"
}

const Page = async () => {

  const session = await auth()

  return (
    <div className="py-3 px-5">
      <Title decorator={false} className="text-4xl mt-2 mb-5"> Welcome, {session?.user?.nama} </Title>
      {/* <pre>{JSON.stringify(session, null, 2)}</pre> */}

      <div className="w-full md:w-80 rounded-lg border-2 border-solid border-slate-200 p-5 flex flex-col gap-y-3">
        <Image
          src="https://avatar.iran.liara.run/public"
          alt="avatar"
          width={100}
          height={100}
          className="w-20 h-20 rounded-full"
        />

        <Title> Set up your profile </Title>
        <div className="text-subtle"> Set up with relevant information such as profile picture, phone number, etc </div>

        <Divider className="my-1 border-slate-200" />
        <Link href="main/profile" className="w-full">
          <Button type="primary" block> Settings </Button>
        </Link>
      </div>
    </div>
  );
}

export default Page;