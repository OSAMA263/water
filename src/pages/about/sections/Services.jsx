import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { services_data } from "../data";
import SlideElement from "../../../components/SlideElement";

export default function Services() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 0"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 90]);
  return (
    <div className="grid grid-cols-2 w-[60%] mx-auto py-40">
      <div className="sticky top-28 h-fit">
        <motion.img
          style={{ rotate }}
          className="w-[40%]"
          src="logo.svg"
          loading="lazy"
          alt="rotateing logo"
        />
      </div>
      <div ref={ref} className="space-y-20">
        {services_data.map((service, i) => (
          <SlideElement offset={.6} y={0} x={100} key={i}>
            <Service {...service} />
          </SlideElement>
        ))}
      </div>
    </div>
  );
}

const Service = ({ title, text, tags }) => {
  return (
    <div className="space-y-8 text-Gray font-semibold text-balance">
      <h1 className="text-4xl text-white">{title}</h1>
      <p className="text-lg">{text}</p>
      <div className="flex gap-3 flex-wrap">
        {tags.map((tag) => (
          <span
            key={tag}
            className="border inline-block border-Gray hover:bg-Ocean rounded-3xl transition-all py-2 px-4"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};
