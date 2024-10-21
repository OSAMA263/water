import React from "react";
import Container from "../../../shared/Container";

export default function WorkBlogs() {
  return (
    <Container>
      <section>
        {/* large title */}
        <div className="flex flex-col items-center">
          <div>Impact Innovators</div>
          <div>and</div>
          <div>Creative Solutions.</div>
        </div>
      </section>
    </Container>
  );
}

const BlogCard = () => {
  return (
    <div className="space-y-4 [&_img]:hover:scale-125">
      <div className="rounded-lg overflow-hidden">
        <img src="" alt="" className="w-full h-full" />
      </div>
      <h1>title</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
        cupiditate maiores deleniti quam numquam repellendus!
      </p>
    </div>
  );
};
