import { cn } from "@/core/lib/util";
import { HiCubeTransparent } from "react-icons/hi";

type LogoIconProps = {
  className?: string
}

const LogoIcon = ({ className }: LogoIconProps) => {
  return (
    <HiCubeTransparent className={cn("text-primary text-2xl", className)} />
  );
}

export default LogoIcon;