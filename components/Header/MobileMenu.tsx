import { menu } from "@/constants/menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface IProps {
  isOpen: boolean;
  handleOpen: () => void;
}

const MobileMenu = ({ isOpen, handleOpen }: IProps) => {
  return (
    <section className={cn("mobileMenu", isOpen && "open")}>
      <nav className="pt-[186px]">
        <ul className="flex flex-col items-center gap-[30px]">
          {menu.map(({ id, link, title }) => (
            <li key={id}>
              <Link
                onClick={handleOpen}
                className="text-xl leading-[26px] font-semibold"
                href={link}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
};
export default MobileMenu;
