import Title from "@/common/ui/component/title/Title";
import ErrorWrapper from "@/core/module/auth/component/login/ErrorWrapper";
import FormLogin from "@/core/module/auth/component/login/FormLogin";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Login",
  description: "Login"
}

export default function Home() {
  return (
    <div className="w-full h-full md:w-96 flex flex-col justify-center gap-y-5">
      <div>
        <Title className="mb-1 text-2xl"> Login </Title>
        <div className="font-subtle text-subtle"> Lakukan login untuk menggunakan aplikasi </div>
      </div>

      {/* form login */}
      <FormLogin />

      {/* login error wrapper */}
      <ErrorWrapper />

      {/* register link */}
      <Link href="/register" className="text-center hover:text-subtle"> Belum punya akun? Register </Link>
    </div>
  );
}
