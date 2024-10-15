import { cn } from "@/core/lib/util";
import PageHeaderSidebarTrigger from "./PageHeaderSidebarTrigger";
import PageHeaderBackTrigger from "./PageHeaderBackTrigger";

type PageHeaderProps = {
  className?: string
  withBackButton?: boolean
}

const PageHeader = ({ children, className, withBackButton = false }: React.PropsWithChildren<PageHeaderProps>) => {
  return (
    <div className={cn("flex flex-row items-center gap-x-3 md:gap-x-0", className)}>
      <div>
        <PageHeaderSidebarTrigger className="md:hidden" />
        {withBackButton ? <PageHeaderBackTrigger className="hidden md:block" /> : null}
      </div>
      {children}
    </div>
  );
}

export default PageHeader;