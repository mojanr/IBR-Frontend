import { cn } from "@/core/lib/util";

type TitleProps = {
  className?: string
  decorator?: boolean
}

const Title = ({ children, className, decorator = true }: React.PropsWithChildren<TitleProps>) => {
  return (
    <div className={cn("text-xl font-bold ", className, { "app-decorator-underline": decorator })} >
      {children}
    </div >
  );
}

export default Title;