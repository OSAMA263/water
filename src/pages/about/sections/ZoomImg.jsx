import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ZoomImg({ img, scale = 1, init_scale = 1 }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 .8", "1 .7"],
  });

  const scaleStyle = useTransform(scrollYProgress, [0, 1], [init_scale, scale]);

  return (
    <div ref={ref} className="overflow-hidden h-full rounded-xl">
      <motion.img
        initial={{ scale: 1.5 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        viewport={{ once: true }}
        style={{ scale: scaleStyle }}
        className="object-cover w-full h-full transition-all duration-[1s] ease-out"
        alt={img}
        src={img}
      />
    </div>
  );
}
