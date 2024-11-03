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

export default function SingleBlog() {
  const { id } = useParams();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 .5", "1 0"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1.4, 1]);

  return (
    <Layout
      title={`blog ${id}`}
      description={`blog${id} Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores laborum commodi consequatur sunt, quia voluptatem deserunt repellendus cumque accusantium doloribus saepe. Commodi amet saepe eaque natus, illo esse quidem in?`}
      className="space-y-20"
    >
      <Container>
        <SectionHeader title={blogs[id - 1].title} text={blogs[id - 1].text} />
      </Container>
      <div ref={ref} className="overflow-hidden">
        <motion.img
          style={{ scale }}
          className="h-[80vh] w-full object-cover"
          src={blogs[id - 1].img}
          alt={blogs[id - 1].img}
        />
      </div>
      <Container>
        <BlogContent>
          {blog_content.map(({ title, text }, i) => (
            <Fragment key={i}>
              <h1>{title}</h1>
              {text.map((par, j) => (
                <p key={j}>{par}</p>
              ))}
            </Fragment>
          ))}
        </BlogContent>
      </Container>
      <NewsPapper />
    </Layout>
  );
}

const BlogContent = tw.div`
mx-auto
space-y-6
w-[60%]
font-semibold
text-Gray
[&>h1]:text-3xl
[&>h1]:text-white
`;
