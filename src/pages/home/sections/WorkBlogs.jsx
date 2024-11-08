import tw from "tailwind-styled-components";
import BlogCard from "../../../components/BlogCard";
import Container from "../../../shared/Container";
import { blog_cards } from "../data";
import SlideElement from "../../../components/SlideElement";

export default function WorkBlogs() {
  return (
    <Container className="space-y-40 py-20">
      <section>
        {/* large title */}
        <HeaderTitle>
          <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full opacity-25">
            <img src="logo.svg" loading="lazy" className="w-[10%]" alt="logo" />
          </div>
          <SlideElement y={0} x={-200}>
            <div>Impact Innovators</div>
          </SlideElement>
          <SlideElement y={0} x={200}>
            <div>and</div>
          </SlideElement>
          <SlideElement y={0} x={-200}>
            <div>Creative Solutions.</div>
          </SlideElement>
        </HeaderTitle>
      </section>
      {/* blog cards */}
      <section className="grid grid-cols-3 gap-x-10 gap-y-20">
        {blog_cards.map((blog, i) => (
          <SlideElement offset={0.4} key={i}>
            <BlogCard url={`/blog/${i + 1}`} {...blog} img={blog.home_img} />
          </SlideElement>
        ))}
      </section>
    </Container>
  );
}

const HeaderTitle = tw.div`
flex relative
leading-none
flex-col
items-center
text-6xl
text-Gray
`;
