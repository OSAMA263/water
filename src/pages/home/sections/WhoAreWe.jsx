import Container from "../../../shared/Container";
import AutoSlider from "../../../components/AutoSlider";
import { auto_slider_images } from "../data";
import { motion } from "framer-motion";
import SlideElement from "../../../components/SlideElement";

export default function WhoAreWe() {
  return (
    <div className="space-y-40 py-20">
      <Container className="space-y-40">
        <div className="flex justify-between items-center">
          <h1 className="uppercase text-Gray font-semibold text-[1.2rem]">
            who are we
          </h1>

          <motion.div
            initial={{ width: "0%" }}
            whileInView={{ width: "80%" }}
            transition={{ duration: 0.9, delay: 0.2 }}
            viewport={{ once: true }}
            className="h-[1px] bg-Ocean ms-auto"
          ></motion.div>
        </div>
        {/* end pf header */}
        <div className="w-1/2 text-Gray space-y-10 ms-auto me-[10%]">
          <SlideElement>
            <p className="text-[2rem]">
              Founded in 2023, a branding agency is a firm that specializes in
              creating and launching brands, and rebranding. The role of a
              branding agency is to create, plan, measure and manage branding
              strategies for clients, including support in advertising and other
              forms of promotion.
            </p>
          </SlideElement>
          <div className="font-semibold flex [&_h1]:text-[5.6rem] justify-between items-center">
            <SlideElement i={0}>
              <div>
                <h1>3+</h1>
                <p>Years of experience</p>
              </div>
            </SlideElement>
            <SlideElement i={1}>
              <div>
                <h1>40+</h1>
                <p>Satisfied clients</p>
              </div>
            </SlideElement>
            <SlideElement i={2}>
              <div>
                <h1>100+</h1>
                <p>Projects delivered</p>
              </div>
            </SlideElement>
          </div>
        </div>
        {/* end of history */}
      </Container>
      <AutoSlider  arr={auto_slider_images} />
      {/* auto slider */}
    </div>
  );
}
