import LogoIcon from "@/common/ui/component/logo/LogoIcon";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-dvh flex flex-row">
      {/* left content */}
      <div className="flex-1 flex flex-col py-5 pl-5 pr-5 md:pr-0">
        {/* header */}
        <div className="flex">
          <LogoIcon className="text-3xl" />
        </div>

        {/* content, form login */}
        <div className="flex-1 flex flex-col items-center">
          {children}
        </div>

        {/* foonter */}
        <div className="w-full text-subtle text-center font-semibold"> Built with.... </div>
      </div>
      {/* right content */}
      <div className="flex-1 hidden md:flex p-5">
        <div className="w-full h-full bg-slate rounded-2xl">

        </div>
      </div>
    </div>
  );
}

export default Layout;