import { useEffect, useState } from "react";
import Layout from "../../shared/Layout";
import { accordion_data } from "./data";
import SlideingSection from "./sections/SlideingSection";
import Sponsore from "./sections/Sponsore";
import WorkBlogs from "./sections/WorkBlogs";

export default function Home() {
  const [active, setActive] = useState([true]);

  return (
    <Layout className="text-white">
      <div className="h-dvh overflow-x-hidden relative">
        {accordion_data.map((content, i) => (
          <SlideingSection
            {...{ active, setActive, content, i }}
            key={i}
          />
        ))}
      </div>
      <WorkBlogs/>
      <Sponsore/>
    </Layout>
  );
}

// div width 60%
// inactive slides div:
// -right-10%,20%,30%
// default active div:left-0
// every active dive :
// left-10%,20%,30%
