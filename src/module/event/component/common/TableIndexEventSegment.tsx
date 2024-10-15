"use client"

import { Segmented } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";

const TableIndexEventSegment = () => {

  // const router = useRouter()
  const pathname = usePathname()

  // // route change
  // const routeChange = (url: string) => {
  //   router.push(url)
  // }
  return (
    <Segmented
      defaultValue={pathname || "/main/event"}
      value={pathname}
      className="mb-3"
      // onChange={routeChange}
      options={[
        {
          label: (
            <Link href="/main/event" className="flex flex-row items-center gap-x-2">
              <div className="text-black"> List </div>
            </Link>
          ),
          value: "/main/event"
        },
        {
          label: (
            <Link href="/main/event/approval" className="flex flex-row items-center justify-center gap-x-2">
              <div className="text-black"> Approval </div>
              {/* <Badge count={25} /> */}
            </Link>
          ),
          value: "/main/event/approval"
        }
      ]}
    />
  );
}

export default TableIndexEventSegment;