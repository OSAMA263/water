/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Layout from "../../shared/Layout";
import Container from "../../shared/Container";

export default function About() {
  return (
    <Layout
      className="text-Gray space-y-20"
      title="about us"
      description="about Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius sit repellat itaque corporis impedit odit rerum, animi inventore rem provident iure ratione earum, debitis ex hic perspiciatis, ut doloremque in!"
    >
      <Container>
        {/* header */}
        <div className="font-semibold text-center space-y-10 text-Gray w-1/2 mx-auto">
          <img src="" alt="" />
          <h1 className="text-6xl leading-none">
            Commitment to Quality and Creativity
          </h1>
          <p>
            Merge visionary thinking with unparalleled excellence. Achieve
            extraordinary results through a seamless blend of creativity and
            strategic insight.
          </p>
        </div>
        {/* zoom out image */}

        {/* sticky section */}
      </Container>
      {/* sticky section */}
      <Container className="py-32 font-semibold sticky top-0 grid grid-cols-2 text-balance">
        <h1 className="font-bold text-5xl leading-none">
          We don't make deals, we make commitments.
        </h1>
        <div className="space-y-10 text-xl">
          <p>
            If you're aiming to stand out, you need to be outstanding. Embrace
            creativity with Atypical. Our design and development experts are
            here to make your digital vision come alive.
          </p>
          <p>
            Let's craft a masterpiece of pixels and code that leaves a lasting
            impression. Ready to be different? Join us on this exciting journey
            of innovation!
          </p>
          <p>
            Our Culture section offers a vibrant glimpse into our creative
            spirit, highlighting the values of collaboration, inclusivity, and
            growth that drive our dynamic team.
          </p>
        </div>
      </Container>
      {/* ---------------after the sticky div------------------ */}
      <div className="bg-Ocean relative py-32">
        <Container className="grid grid-cols-2 grid-rows-2">
          <h1 className="leading-none text-5xl">
            Our approach combines innovative thinking with effective strategies
            to achieve outstanding outcomes.
          </h1>
          <div></div>
          {/*  */}
          <button className="main-btn">hello</button>
          <div className="space-y-10 text-2xl">
            <p>
              Unlock new opportunities and drive innovation with our expert
              solutions. Whether you're looking to enhance your digital presence
              or develop groundbreaking strategies.
            </p>
            <p>
              Contact us today to explore how our creativity and strategic
              insight can elevate your brand. Let’s collaborate to turn your
              vision into reality and achieve exceptional results together.
            </p>
          </div>
        </Container>
      </div>
      {/* zooming in image */}
    </Layout>
  );
}
