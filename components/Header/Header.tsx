"use client";

import Link from "next/link";
import Container from "../Container";
import Image from "next/image";
import { siteInfo } from "@/constants/siteInfo";
import { menu } from "@/constants/menu";
import Tel from "../Tel";
import { useState } from "react";
import { cn } from "@/lib/utils";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen((prv) => !prv);
  };

  return (
    <>
      <header className="bg-white/80 backdrop-blur-md z-[4] sticky top-0 xl:h-24 h-20 flex justify-center items-center">
        <Container className="flex justify-between items-center">
          <Link href={"/"} className="hover-opacity flex-shrink-0 xl:w-[216px] xl:h-[71px]">
            <Image
              alt="Логотип"
              width={216}
              height={71}
              className="xl:w-full w-[156px] xl:h-auto h-full"
              src={siteInfo.logoHeader}
            />
          </Link>

          <address className="max-w-[139px] xl:block hidden text-base leading-[20.8px] font-semibold">
            {siteInfo.address}
          </address>

          <nav className="xl:block hidden">
            <ul className="flex items-center gap-10">
              {menu.map(({ id, link, title }) => (
                <li key={id}>
                  <Link
                    className="text-xl leading-[26px] hover:text-main"
                    href={link}
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <Tel className="text-[26px] xl:block hidden leading-[33.8px] font-bold text-brown-77" />

          <div className="xl:hidden flex items-center gap-4">
            <Link href={`tel:${siteInfo.telFormat}`}>
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.8628 8.80806C13.5421 7.73846 13.3217 6.64136 13.2042 5.53094C13.0868 4.42386 12.1203 3.6001 11.0072 3.6001H5.84338C4.51504 3.6001 3.49243 4.74754 3.60904 6.0699C4.78639 19.3974 15.4027 30.0129 28.7302 31.191C30.0533 31.3076 31.2 30.2887 31.2 28.9604V24.3557C31.2 22.6753 30.3762 21.7125 29.2691 21.5951C28.1587 21.4779 27.0616 21.2577 25.992 20.9373C25.3578 20.7493 24.6846 20.7363 24.0437 20.8999C23.4028 21.0635 22.8181 21.3975 22.3516 21.8665L20.1412 24.0769C16.155 21.9173 12.8828 18.6451 10.7232 14.6589L12.9336 12.4485C13.4027 11.9821 13.7368 11.3974 13.9005 10.7565C14.0643 10.1156 14.0507 9.44229 13.8628 8.80806Z"
                  fill="#774619"
                />
              </svg>
            </Link>

            <button
              onClick={handleOpen}
              id="handleMobileMenu"
              className={cn(
                "h-[30px] relative w-[30px] flex justify-center items-center handleMobileTelMenu",
                isOpen && "active"
              )}
            >
              <svg
                className="burgerIcon"
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.5 28.5H34.5M1.5 7.5H34.5M1.5 18H34.5"
                  stroke="#774619"
                  strokeWidth="4"
                />
              </svg>

              <svg
                className="closeIcon"
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 5L31 31M5 31L31 5"
                  stroke="#774619"
                  strokeWidth="4"
                />
              </svg>
            </button>
          </div>
        </Container>
      </header>

      <address className="xl:hidden px-2.5 text-brown-77 h-[66px] w-full bg-white/80 backdrop-blur-md block text-xl z-[3] leading-[26px] font-semibold">
        {siteInfo.address}
      </address>

      <MobileMenu isOpen={isOpen} handleOpen={handleOpen}/>
    </>
  );
};
export default Header;
