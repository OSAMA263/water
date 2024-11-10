import { Link } from "react-router-dom";
import { news_papper } from "../pages/about/data";
import Container from "../shared/Container";
import SlideElement from "./SlideElement";

export default function NewsPapper() {
  return (
    <Container className="py-28 bg-Abyss relative z-10 text-Gray">
      <SlideElement offset={.4}>
        <h1 className="text-4xl mb-4">NewsPapper</h1>
        <div className="grid lg:grid-cols-2 gap-8">
          {news_papper.map((blog, i) => (
            <Blog key={blog.title} {...blog} url={`/blog/${i + 1}`} />
          ))}
        </div>
      </SlideElement>
    </Container>
  );
}

const Blog = ({ title, img, date, type, url }) => {
  return (
    <Link aria-label="blog" to={url} className="space-y-4 font-semibold">
      <div className="overflow-hidden rounded-2xl ">
        <img loading="lazy" src={img} alt={title} className="w-full hover:scale-110" />
      </div>
      <div className="flex items-center gap-x-4 uppercase">
        <h1>{date}</h1>
        <div className="h-4 w-[1px] bg-Gray"></div>
        <h1>{type}</h1>
      </div>
      <p className="text-2xl">{title}</p>
    </Link>
  );
};
