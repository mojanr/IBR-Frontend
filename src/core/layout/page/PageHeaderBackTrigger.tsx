"use client"

import { cn } from "@/core/lib/util";
import { Button } from "antd";
import { useRouter } from "next/navigation";
import { LuArrowLeft } from "react-icons/lu";

type PageHeaderBackTrigger = {
  className?: string
}

const PageHeaderBackTrigger = ({ className }: PageHeaderBackTrigger) => {

  const router = useRouter()

  return (
    <div className={cn(className)}>
      <Button type="text" icon={<LuArrowLeft />} onClick={router.back} />
    </div>
  );
}

export default PageHeaderBackTrigger;