"use client"

import { Badge, Segmented } from "antd";
// import { useRouter } from "next-nprogress-bar";
import Link from "next/link";
import { usePathname } from "next/navigation";

const TableIndexUserSegment = () => {

  // const router = useRouter()
  const pathname = usePathname()

  // // route change
  // const routeChange = (url: string) => {
  //   router.push(url)
  // }
  return (
    <Segmented
      defaultValue={pathname || "/main/auth/user"}
      value={pathname}
      className="mb-3"
      // onChange={routeChange}
      options={[
        {
          label: (
            <Link href="/main/auth/user" className="flex flex-row items-center gap-x-2">
              <div className="text-black"> Verified </div>
            </Link>
          ),
          value: "/main/auth/user"
        },
        {
          label: (
            <Link href="/main/auth/user/approval" className="flex flex-row items-center justify-center gap-x-2">
              <div className="text-black"> Approval </div>
              <Badge count={25} />
            </Link>
          ),
          value: "/main/auth/user/approval"
        }
      ]}
    />
  );
}

export default TableIndexUserSegment;