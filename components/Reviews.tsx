import { reviews } from "@/constants/reviews";
import Container from "./Container";
import Title from "./Title";
import Image from "next/image";

const Reviews = () => {
  return (
    <section id="reviews" className="xl:scroll-mt-28 scroll-mt-24">
      <Container className="flex flex-col items-center xl:gap-[50px] gap-[30px]">
        <Title>Отзывы клиентов</Title>

        <ul className="grid md:grid-cols-2 grid-cols-1 xl:gap-6 gap-3 w-full">
          {reviews.map(({ id, img }) => (
            <li key={id}>
              <Image
                alt="Отзыв"
                src={img}
                width={588}
                height={238}
                className="xl:w-auto w-full xl:h-auto object-contain hover:scale-95"
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};
export default Reviews;
