import About from "@/components/About";
import Contact from "@/components/Contact";
import Reviews from "@/components/Reviews";
import Services from "@/components/Services";
import UpBlock from "@/components/UpBlock";

export default function Home() {
  return (
    <div className="xl:space-y-[140px] space-y-[60px]">
      <UpBlock />
      <About />
      <Services />
      <Reviews />
      <Contact />
    </div>
  );
}
