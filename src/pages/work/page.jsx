import SectionHeader from "../../components/SectionHeader";
import Layout from "../../shared/Layout";
import Container from "../../shared/Container";
import { blog_cards } from "../home/data";
import BlogCard from "../../components/BlogCard";
import SlideElement from "../../components/SlideElement";

export default function Work() {
  return (
    <Layout
      title="work - services"
      description="work Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius sit repellat itaque corporis impedit odit rerum, animi inventore rem provident iure ratione"
      href="https://osama263.github.io/water/#/work"
    >
      <Container className="space-y-20">
        <SectionHeader title="Where Vision Meets Excellence" />
        <div className="grid md:grid-cols-2 xl:gap-32 gap-10 xl:w-[80%] mx-auto">
          {blog_cards.map((blog, i) => (
            <SlideElement offset={.3} className={i % 2 === 1 ? "mt-32" : ""} key={i}>
              <BlogCard
                animateScroll
                url={`/blog/${i + 1}`}
                {...blog}
                img={blog.work_img}
              />
            </SlideElement>
          ))}
        </div>
      </Container>
    </Layout>
  );
}
