import { siteInfo } from "@/constants/siteInfo";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface Iprops {
  className?: string;
}

const Tel = ({ className }: Iprops) => {
  return (
    <Link
      className={cn("hover:text-main", className)}
      href={`tel:${siteInfo.telFormat}`}
    >
      {siteInfo.tel}
    </Link>
  );
};
export default Tel;
