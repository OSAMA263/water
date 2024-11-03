import Layout from "../../shared/Layout";
import Container from "../../shared/Container";
import SectionHeader from "../../components/SectionHeader";
import { blogs } from "./data";
import BlogCard from "../../components/BlogCard";

export default function Blog() {
  return (
    <Layout
      title="blogs"
      description="blogs Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius sit repellat itaque corporis impedit odit rerum, animi inventore rem provident iure ratione earum, debitis ex hic perspiciatis, ut doloremque in!"
    >
      <Container className="space-y-20">
        <SectionHeader title="Dive into Creative and Innovative Ideas"></SectionHeader>
        <div className="grid grid-cols-3 gap-y-20 gap-x-10">
          {blogs.map((blog, i) => (
            <BlogCard {...blog} url={`/blog/${i + 1}`} key={i} />
          ))}
        </div>
      </Container>
    </Layout>
  );
}