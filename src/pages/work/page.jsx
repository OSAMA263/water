import SectionHeader from "../../components/SectionHeader";
import Layout from "../../shared/Layout";
import Container from "../../shared/Container";
import { blog_cards } from "../home/data";
import { BlogCard } from "../home/sections/WorkBlogs";

export default function Work() {
  return (
    <Layout>
      <Container className="space-y-20">
        <SectionHeader title="Where Vision Meets Excellence" />
        <div className="grid grid-cols-2 gap-40 w-[80%] mx-auto">
          <div className="space-y-40">
            {blog_cards.slice(0, 3).map((blog, i) => (
              <BlogCard key={i} animateScroll {...blog} img={blog.work_img} />
            ))}
          </div>
          <div className="space-y-40 mt-40">
            {blog_cards.slice(3, 6).map((blog, i) => (
              <BlogCard key={i} {...blog} animateScroll img={blog.work_img} />
            ))}
          </div>
        </div>
      </Container>
    </Layout>
  );
}

// BlogCard
