import { cn } from "@/core/lib/util";
import { Button, type ButtonProps } from "antd";

type ButtonResponsiveProps = Omit<ButtonProps, "icon" | "children"> & {
  icon: React.ReactNode
}

const ButtonResponsive = ({ children, className, ...props }: React.PropsWithChildren<ButtonResponsiveProps>) => {
  return (
    <>
      <Button {...props} className={cn("hidden md:flex", className)}> {children} </Button>
      <Button {...props} className={cn("flex md:hidden", className)} />
    </>
  );
}

export default ButtonResponsive;