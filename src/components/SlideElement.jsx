import { motion } from "framer-motion";
import { Children, cloneElement } from "react";
import { useInView } from "react-intersection-observer";

export default function SlideElement(props) {
  const { children, ...rest } = props;

  return (
    <>
      {Children.map(children, (child, j) => (
        <Element key={j} {...rest}>
          {child}
        </Element>
      ))}
    </>
  );
}

// separated function so every element get its own pov ref
const Element = (props) => {
  const { children, y = 20, x = 0, offset = 0.8, i, ...rest } = props;

  const { ref, inView } = useInView({ threshold: offset, triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      initial={{ y, x, opacity: 0 }}
      animate={{
        y: inView ? 0 : y,
        x: inView ? 0 : x,
        opacity: inView ? 1 : 0,
      }}
      transition={{ duration: 0.4, delay: i ? 0.1 * i : 0 }}
      {...rest}
    >
      {children && cloneElement(children)}
    </motion.div>
  );
};
