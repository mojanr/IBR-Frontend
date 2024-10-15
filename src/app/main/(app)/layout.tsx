import Dock from "@/core/layout/dock/Dock";
import Navigation from "@/core/layout/navigation/Navigation";
import NavigationCollapse from "@/core/layout/navigation/NavigationCollapse";
import Sidebar from "@/core/layout/sidebar/Sidebar";
import DrawerSidebar from "@/core/layout/sidebar/DrawerSidebar";
import { App } from "antd";
import DrawerNotification from "@/core/layout/notification/DrawerNotification";
import Menu from "@/core/layout/menu/Menu";
import { auth } from "@/core/module/auth/lib/auth";
import AxiosProvider from "@/core/provider/AxiosProvider";

const Layout = async ({ children }: { children: React.ReactNode }) => {

  // session
  const session = await auth()

  return (
    <AxiosProvider token={session?.user.token as string} baseApiUrl={process.env.PUBLIC_API_URL as string}>
      <App>
        <div className="w-full h-dvh flex flex-row">
          {/* sidebar */}
          <Sidebar className="hidden md:flex md:flex-row">
            <Dock className="w-[56px] bg-primary text-white" />
            <NavigationCollapse className="w-[224px] py-3 px-0">
              <Menu />
            </NavigationCollapse>
          </Sidebar>
          {/* content */}
          <div className="flex-1 overflow-y-auto py-3-px-5">
            {children}
          </div>
        </div>

        {/* drawer sidebar */}
        <DrawerSidebar width={280}>
          <Sidebar className="w-full">
            <Dock className="w-[56px] bg-primary text-white" />
            <Navigation className="py-3 px-0">
              <Menu />
            </Navigation>
          </Sidebar>
        </DrawerSidebar>

        {/* drawer notification */}
        <DrawerNotification width={320}>
          {/* test */}
        </DrawerNotification>
      </App>
    </AxiosProvider>
  );
}

export default Layout;