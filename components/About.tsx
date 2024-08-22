import Image from "next/image";
import Container from "./Container";
import Title from "./Title";

const About = () => {
  return (
    <section id="about" className="xl:scroll-mt-28 scroll-mt-24">
      <Container className="flex flex-col items-center xl:gap-[50px] gap-[30px]">
        <Title>О мастерской</Title>

        <div className="grid xl:grid-cols-2 grid-cols-1 gap-6">
          <div className="xl:space-y-3 space-y-2 text-lg leading-[23.4px]">
            <p>
              Мастерская специализируется на ремонте и восстановлении ювелирных
              изделий, придавая им новую жизнь с 2011 года. Мастера с опытом
              работы более 30 лет отремонтируют ваши изделия быстро
              и качественно.
            </p>
            <p>
              Выполняемые виды ремонтных работ: пайка цепей и браслетов,
              увеличение и уменьшение размеров колец, ремонт изломов в ювелирных
              изделиях, восстановление деформированного изделия, ремонт замков
              цепей и серёг, закрепка камней, полировка и мойка изделий
              в ультразвуке, определение драгоценного металла.
            </p>
            <p>
              Также в нашей мастерской вы можете отремонтировать ювелирные
              изделия с драгоценными камнями.
            </p>
            <p>
              Ремонт производится в присутствии заказчика. Все ювелирные изделия
              взвешиваются и измеряются до начала ремонта и после
              его завершения.
            </p>
            <p>
              Наша миссия — сделать так, чтобы ваши любимые украшения служили
              долго и радовали вас. Мы ценим доверие клиентов и предлагаем
              приятные цены и отличное обслуживание.
            </p>

            <p className="font-semibold">
              Присоединяйтесь к числу наших довольных клиентов!
            </p>
          </div>

          <div className="xl:h-[474px] w-full overflow-hidden rounded-md">
            <Image
              src={"/about.webp"}
              alt="Мастерская"
              width={588}
              height={474}
              className="xl:w-auto w-full xl:h-auto"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};
export default About;
