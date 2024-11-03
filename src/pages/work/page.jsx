import SectionHeader from "../../components/SectionHeader";
import Layout from "../../shared/Layout";
import Container from "../../shared/Container";
import { blog_cards } from "../home/data";
import BlogCard from "../../components/BlogCard";

export default function Work() {
  return (
    <Layout
      title="work - services"
      description="work Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius sit repellat itaque corporis impedit odit rerum, animi inventore rem provident iure ratione earum, debitis ex hic perspiciatis, ut doloremque in!"
    >
      <Container className="space-y-20">
        <SectionHeader title="Where Vision Meets Excellence" />
        <div className="grid grid-cols-2 gap-32 w-[80%] mx-auto">
          {blog_cards.map((blog, i) => (
            <div className={i % 2 === 1 ? "mt-20" : ""} key={i}>
              <BlogCard
                animateScroll
                url={`/blog/${i + 1}`}
                {...blog}
                img={blog.work_img}
              />
            </div>
          ))}
        </div>
      </Container>
    </Layout>
  );
}
