import { cn } from "@/core/lib/util";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

type LoaderProps = {
  className?: string
}

const Loader = ({ className }: LoaderProps) => {
  return (
    <div className={cn("w-full flex justify-center p-6", className)}>
      <AiOutlineLoading3Quarters className="animate-spin text-4xl" />
    </div>
  );
}

export default Loader;