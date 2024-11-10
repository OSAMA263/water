/* eslint-disable react/no-unescaped-entities */
import { useParams } from "react-router";
import Layout from "../../../shared/Layout";
import Container from "../../../shared/Container";
import SectionHeader from "../../../components/SectionHeader";
import { blogs } from "../data";
import { Fragment, useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import tw from "tailwind-styled-components";
import { blog_content } from "./data";
import NewsPapper from "../../../components/NewsPapper";
import SlideElement from "../../../components/SlideElement";

export default function SingleBlog() {
  const { id } = useParams();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 .5", "1 0"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);

  return (
    <Layout
      title={`blog ${id}`}
      description={`blog${id} Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius sit repellat itaque corporis impedit odit rerum, animi inventore rem provident iure ratione`}
      className="space-y-20"
      href={`https://osama263.github.io/water/#/blog${id}`}
    >
      <Container>
        <SectionHeader className="py-10" title={blogs[id - 1].title} text={blogs[id - 1].text} />
      </Container>
      <div ref={ref} className="overflow-hidden relative">
        <SlidingCurtains
          initial={{ height: "100%" }}
          whileInView={{ height: "0%" }}
          transition={{ duration: 0.9, delay: 0.8 }}
          viewport={{once:true}}
        />
        <motion.img
          style={{ scale }}
          className="h-[80vh] w-full object-cover"
          src={blogs[id - 1].blog_img}
          alt={blogs[id - 1].blog_img}
        />
      </div>
      <Container>
        <BlogContent>
          <SlideElement className="space-y-6">
            {blog_content.map(({ title, text }, i) => (
              <Fragment key={i}>
                <h1>{title}</h1>
                {text.map((par, j) => (
                  <p key={j}>{par}</p>
                ))}
              </Fragment>
            ))}
          </SlideElement>
        </BlogContent>
      </Container>
      <NewsPapper />
    </Layout>
  );
}

const BlogContent = tw.div`
mx-auto
space-y-6
xl:w-[60%]
font-semibold
text-Gray
[&_h1]:text-3xl
[&_h1]:text-white
`;

const SlidingCurtains = tw(motion.div)`
absolute
w-full 
h-full
z-10
bg-Ocean
bottom-0
`;
