import Link from "next/link";
import Container from "./Container";
import Image from "next/image";
import { siteInfo } from "@/constants/siteInfo";
import { menu } from "@/constants/menu";
import Tel from "./Tel";

const Footer = () => {
  return (
    <footer className="bg-brown-51 py-[30px] xl:mt-[140px] mt-[60px]">
      <Container className="flex flex-col xl:gap-[30px] gap-[50px] items-center">
        <div className="flex items-center xl:justify-between justify-center xl:flex-row flex-col xl:gap-0 gap-[30px]">
          <Link className="hover-opacity" href={"/"}>
            <Image
              alt="Логотип"
              src={siteInfo.logoFooter}
              width={216}
              height={71}
              className="w-auto h-auto object-contain"
            />
          </Link>

          <nav className="xl:order-none order-last">
            <ul className="xl:flex grid grid-cols-2 xl:items-center xl:gap-x-[50px] xl:gap-y-[50px] gap-y-[30px] gap-x-[75px]">
              {menu.map(({ id, link, title }) => (
                <li key={id}>
                  <Link
                    className="text-xl leading-[26px] text-white hover:text-main"
                    href={link}
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <Tel className="text-[26px] leading-[33.8px] text-white font-semibold" />
        </div>

        <div className="flex items-center xl:gap-0 gap-5 xl:justify-between justify-center xl:flex-row flex-col text-base leading-[20.8px] text-white">
          <span>© 2011–{new Date().getFullYear()} ИП Трус А.В.</span>

          <Link
            className="hover:text-main"
            target="_blank"
            href={"https://artcly.by/"}
          >
            Создание сайта: ArtCly.by
          </Link>
        </div>
      </Container>
    </footer>
  );
};
export default Footer;
