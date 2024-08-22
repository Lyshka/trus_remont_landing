import Image from "next/image";
import Container from "./Container";

const UpBlock = () => {
  return (
    <section className="xl:-mt-24 -mt-20 xl:h-[800px] xl:pt-0 pt-[196px] xl:pb-0 pb-[216px] relative">
      <Image
        className="object-cover w-full h-full absolute inset-0 xl:block hidden"
        width={1920}
        height={800}
        alt="Работа мастера"
        src={"/upBlock.webp"}
      />

      <Image
        className="object-cover w-full h-full absolute inset-0 xl:hidden block"
        width={360}
        height={580}
        alt="Работа мастера"
        src={"/upBlockMobile.webp"}
      />

      <Container className="relative z-[1] xl:h-full xl:flex xl:items-center">
        <h1 className="xl:max-w-[705px] w-full font-semibold xl:text-[60px] text-[32px] xl:leading-[78px] leading-[41.6px] text-white uppercase">
          Качественный и быстрый ремонт ювелирных изделий в Гродно
        </h1>
      </Container>
    </section>
  );
};
export default UpBlock;
