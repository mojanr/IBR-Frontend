import Title from "@/common/ui/component/title/Title";
import FormRegister from "@/core/module/auth/component/register/FormRegister";
import FormRegister1 from "@/core/module/auth/component/register/FormRegister1";
import { Steps } from "antd";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Register",
  description: "Register"
}

const Page = () => {
  return (
    <div className="w-full h-full md:w-96 flex flex-col justify-center gap-y-5">
      <div>
        <Title className="mb-1 text-2xl"> Register </Title>
        <div className="font-subtle text-subtle"> Registrasi akun untuk menggunakan aplikasi </div>
      </div>

      {/* form register */}
      <FormRegister />
      {/* <div className="flex">
        <Steps
          className="w-full md:-translate-x-5"
          progressDot
          direction="horizontal"
          responsive={false}
          current={0}
          items={[
            {
              title: 'Step 1',
              // description: 'This is a description.',
            },
            {
              title: 'Step 2',
              // description: 'This is a description.',
            },
            {
              title: 'Step 3',
              // description: 'This is a description.',
            },
          ]}
        />
      </div> */}

      {/* <FormRegister1 /> */}


      {/* login link */}
      <Link href="/" className="text-center hover:text-subtle"> Sudah punya akun? Login </Link>
    </div>
  );
}

export default Page;