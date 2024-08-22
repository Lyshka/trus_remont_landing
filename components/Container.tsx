import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface IProps {
  className?: string;
  children: ReactNode;
}

const Container = ({ className, children }: IProps) => {
  return (
    <div
      className={cn(className, "max-w-[1200px] w-full mx-auto xl:px-0 px-2.5")}
    >
      {children}
    </div>
  );
};
export default Container;
