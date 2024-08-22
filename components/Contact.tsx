import Link from "next/link";
import Container from "./Container";
import Title from "./Title";
import Tel from "./Tel";
import { siteInfo } from "@/constants/siteInfo";

const Contact = () => {
  return (
    <section id="contact" className="xl:scroll-mt-28 scroll-mt-24">
      <Container className="flex flex-col xl:gap-[50px] gap-[30px] xl:items-start items-center">
        <Title>Контакты</Title>

        <div className="flex xl:gap-[60px] xl:flex-row flex-col gap-[30px] w-full">
          <ul className="space-y-6 listInfo xl:max-w-[354px] w-full flex-shrink-0">
            <li>
              <span className="title">Телефон</span>

              <Tel className="xl:text-[30px] text-2xl xl:leading-[39px] leading-[31.2px] font-semibold" />
            </li>

            <li>
              <span className="title">Электронная почта</span>

              <Link className="value" href={`mailto:${siteInfo.email}`}>
                {siteInfo.email}
              </Link>
            </li>

            <li>
              <span className="title">Адрес офиса</span>

              <address className="value">{siteInfo.address}</address>
            </li>

            <li>
              <span className="title">Время работы</span>

              <ul className="value">
                {Object.values(siteInfo.timeWork).map((value, idx) => {
                  return <li key={idx}>{value}</li>;
                })}
              </ul>
            </li>
          </ul>

          <iframe
            className="xl:h-[443px] h-[280px] w-full"
            src="https://yandex.ru/map-widget/v1/?um=constructor%3Af6209d33ce9c4fc22e38a049bbb6e46535b81cbe16f7995980d45b0237747176&amp;source=constructor"
          ></iframe>
        </div>
      </Container>
    </section>
  );
};
export default Contact;
