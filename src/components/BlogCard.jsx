import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

export default function BlogCard(props) {
  const { title, text, img, animateScroll = false, url } = props;

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 1"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-5%", "1%"]);
  return (
    <Link
      ref={ref}
      to={url}
      className="font-semibold inline-block space-y-4 [&_img]:hover:scale-110 cursor-pointer"
    >
      <div className="rounded-xl overflow-hidden">
        <motion.img
          style={{ y: animateScroll ? y : null }}
          src={img}
          alt={title}
          className="w-full h-full rounded-xl"
        />
      </div>
      <h1 className="text-Gray text-xl">{title}</h1>
      <p className="text-Sky">{text}</p>
    </Link>
  );
}
