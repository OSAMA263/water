import { news_papper } from "../pages/about/data";
import Container from "../shared/Container";

export default function NewsPapper() {
  return (
    <Container className="space-y-10 py-28 bg-Abyss relative z-10">
      <h1 className="text-4xl">NewsPapper</h1>
      <div className="grid grid-cols-2 gap-8">
        {news_papper.map((blog) => (
          <Blog key={blog.title} {...blog} />
        ))}
      </div>
    </Container>
  );
}

const Blog = ({title,img,date,type}) => {

  return (
    <div className="space-y-4 font-semibold">
      <div className="overflow-hidden rounded-2xl ">
        <img src={img} alt={title} className="hover:scale-110" />
      </div>
      <div className="flex items-center gap-x-4 uppercase">
        <h1>{date}</h1>
        <div className="h-4 w-[1px] bg-Gray"></div>
        <h1>{type}</h1>
      </div>
      <p className="text-2xl">{title}</p>
    </div>
  );
};
