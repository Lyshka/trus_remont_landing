import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface IProps {
  className?: string;
  children: ReactNode;
}

const Title = ({ children, className }: IProps) => {
  return <h3 className={cn("xl:text-[40px] text-[28px] xl:leading-[52px] leading-[36.4px] font-bold text-main uppercase", className)}>{children}</h3>;
};
export default Title;
