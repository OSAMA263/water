import BlogCard from "../../../components/BlogCard";
import Container from "../../../shared/Container";
import { blog_cards } from "../data";

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
          <BlogCard
            key={i}
            url={`/blog/${i + 1}`}
            {...blog}
            img={blog.home_img}
          />
        ))}
      </section>
    </Container>
  );
}
