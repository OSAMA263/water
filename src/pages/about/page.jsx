/* eslint-disable react/no-unescaped-entities */
import Layout from "../../shared/Layout";
import Container from "../../shared/Container";
import ZoomImg from "./sections/ZoomImg";
import Services from "./sections/Services";
import AutoSlider from "../../components/AutoSlider";
import { sponsor_logos } from "../home/data";
import NewsPapper from "../../components/NewsPapper";
import SectionHeader from "../../components/SectionHeader";
import SlideElement from "../../components/SlideElement";

export default function About() {
  return (
    <Layout
      className="text-Gray"
      title="about us"
      description="about Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius sit repellat itaque corporis impedit odit rerum, animi inventore rem provident iure ratione"
      href="https://osama263.github.io/water/#/about"
    >
      <Container className="space-y-28">
        {/* header */}
        <SectionHeader title="Commitment to Quality and Creativity" />
        {/* zoom out image */}
        <ZoomImg img="about/zoom-out-img.jpg" init_scale={1.3} />
        {/* sticky section */}
      </Container>
      {/* sticky section */}
      <Container className="py-32 font-semibold sticky top-0 grid grid-cols-2 text-balance">
        <SlideElement>
          <h1 className="font-bold text-5xl h-fit leading-none">
            We don't make deals, we make commitments.
          </h1>
        </SlideElement>
        <div className="space-y-10 text-xl">
          <SlideElement>
            <p>
              If you're aiming to stand out, you need to be outstanding. Embrace
              creativity with Atypical. Our design and development experts are
              here to make your digital vision come alive.
            </p>
            <p>
              Let's craft a masterpiece of pixels and code that leaves a lasting
              impression. Ready to be different? Join us on this exciting
              journey of innovation!
            </p>
            <p>
              Our Culture section offers a vibrant glimpse into our creative
              spirit, highlighting the values of collaboration, inclusivity, and
              growth that drive our dynamic team.
            </p>
          </SlideElement>
        </div>
      </Container>
      {/* ---------------after the sticky div------------------ */}
      <div className="relative bg-Abyss z-10">
        <div className="bg-Ocean relative py-32">
          <Container className="grid grid-cols-2 grid-rows-2">
            <SlideElement className="self-center justify-self-center">
              <h1 className="leading-none text-start text-5xl">
                Our approach combines innovative thinking with effective
                strategies to achieve outstanding outcomes.
              </h1>
              <div></div>
              {/*  */}
              <button aria-label="contact" className="main-btn w-full">Get In Touch</button>
            </SlideElement>
            <div className="space-y-10 text-2xl">
              <SlideElement>
                <p>
                  Unlock new opportunities and drive innovation with our expert
                  solutions. Whether you're looking to enhance your digital
                  presence or develop groundbreaking strategies.
                </p>
                <p>
                  Contact us today to explore how our creativity and strategic
                  insight can elevate your brand. Let’s collaborate to turn your
                  vision into reality and achieve exceptional results together.
                </p>
              </SlideElement>
            </div>
          </Container>
        </div>
        {/* zooming in image */}
        <ZoomImg img="about/zoom-in-img.jpg" scale={1.3} />
        {/* rotate img */}
        <Services />
        <div className="text-center py-28 space-y-20">
          <div className="w-1/2 mx-auto space-y-8">
            <SlideElement>
              <h1 className="text-6xl"> Unleash Your Brand’s Potential</h1>
              <p>
                Unlock new opportunities with strategies designed to propel your
                brand to its highest potential. Innovative solutions drive
                transformative results.
              </p>
            </SlideElement>
          </div>
          <AutoSlider stagger arr={sponsor_logos} slidesPerView={5} />
        </div>
      </div>
      <NewsPapper />
    </Layout>
  );
}
