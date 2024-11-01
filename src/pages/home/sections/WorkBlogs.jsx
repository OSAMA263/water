import { useRef } from "react";
import Container from "../../../shared/Container";
import { blog_cards } from "../data";
import { useScroll, useTransform, motion } from "framer-motion";

export default function WorkBlogs() {
  return (
    <Container className="space-y-40 py-20">
      <section>
        {/* large title */}
        <div className="flex flex-col items-center text-[4.6rem] leading-tight text-Gray">
          <div>Impact Innovators</div>
          <div>and</div>
          <div>Creative Solutions.</div>
        </div>
      </section>
      <section className="grid grid-cols-3 gap-x-10 gap-y-20">
        {blog_cards.map((blog, i) => (
          <BlogCard key={i} {...blog} img={blog.home_img} />
        ))}
      </section>
    </Container>
  );
}

export const BlogCard = ({ title, text, img ,animateScroll}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 0"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);
  return (
    <div
      ref={ref}
      className="font-semibold space-y-4 [&_img]:hover:scale-110 cursor-pointer"
    >
      <div className="rounded-xl overflow-hidden">
        <motion.img
          style={{ y:animateScroll?y:null }}
          src={img}
          alt={title}
          className="w-full h-full rounded-xl"
        />
      </div>
      <h1 className="text-white text-2xl">{title}</h1>
      <p className="text-Gray">{text}</p>
    </div>
  );
};
