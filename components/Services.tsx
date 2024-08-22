import Image from "next/image";
import Container from "./Container";
import Title from "./Title";
import { services } from "@/constants/services";

const Services = () => {
  return (
    <main className="xl:py-[140px] py-[60px] relative xl:scroll-mt-28 scroll-mt-24" id="services">
      <Image
        alt="Фон"
        width={1920}
        height={1595}
        className="w-full h-full absolute inset-0 object-cover xl:block hidden"
        src={"/serviceBack.webp"}
      />

      <Image
        alt="Фон"
        width={360}
        height={3000}
        className="w-full h-full absolute inset-0 object-cover xl:hidden block"
        src={"/serviceBackMobile.webp"}
      />

      <Container className="relative z-[1] flex flex-col items-center xl:gap-[50px] gap-[30px]">
        <Title className="text-black-1d">Услуги</Title>

        <ul className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-x-6 md:gap-y-[50px] gap-y-6">
          {services.map(({ decs, id, img, title }) => (
            <li key={id} className="xl:space-y-6 space-y-3 group">
              <div className="xl:max-w-[384px] w-full xl:h-[290px] overflow-hidden rounded-md">
                <Image
                  src={img}
                  alt={title}
                  width={384}
                  height={290}
                  className="xl:h-auto xl:w-auto w-full group-hover:scale-110"
                />
              </div>

              <div className="space-y-2">
                <h2 className="xl:text-4xl text-[26px] xl:leading-[46.8px] leading-[33.8px] font-semibold">
                  {title}
                </h2>

                <div
                  className="text-lg leading-[23.4px] space-y-2.5"
                  dangerouslySetInnerHTML={{ __html: decs }}
                />
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </main>
  );
};
export default Services;
