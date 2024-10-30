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
          <BlogCard key={i} {...blog} />
        ))}
      </section>
    </Container>
  );
}

const BlogCard = ({ img, title, text, url }) => {
  return (
    <div className="font-semibold space-y-4 [&_img]:hover:scale-110 cursor-pointer">
      <div className="rounded-lg overflow-hidden">
        <img src={img} alt={title} className="w-full h-full" />
      </div>
      <h1 className="text-white text-[1.5rem]">{title}</h1>
      <p className="text-Gray">{text}</p>
    </div>
  );
};
