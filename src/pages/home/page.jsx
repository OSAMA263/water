import { useState } from "react";
import Layout from "../../shared/Layout";
import { accordion_data } from "./data";
import SlideingSection from "./sections/SlideingSection";
import Sponsore from "./sections/Sponsore";
import WorkBlogs from "./sections/WorkBlogs";
import WhoAreWe from "./sections/WhoAreWe";

export default function Home() {
  const [active, setActive] = useState([true, true, true, true]);

  return (
    <Layout
    className="!py-0"
      title="base"
      description="home Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius sit repellat itaque corporis impedit odit rerum, animi inventore rem provident iure ratione earum, debitis ex hic perspiciatis, ut doloremque in!"
    >
      <div className="h-dvh overflow-x-hidden relative border-b border-b-gray-700">
        {accordion_data.map((content, i) => (
          <SlideingSection {...{ active, setActive, content, i }} key={i} />
        ))}
      </div>
      <WorkBlogs />
      <Sponsore />
      <WhoAreWe />
    </Layout>
  );
}
