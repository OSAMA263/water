import "swiper/css";
import "swiper/css/free-mode";
import Container from "../../../shared/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

export default function Sponsore() {
  return (
    <Container>
      <section id="sponsors" className="space-y-8 py-20">
        <Carousel></Carousel>
        <Carousel reverse></Carousel>
      </section>
    </Container>
  );
}

const Carousel = ({ chidlren, reverse = false }) => {
// const swiper_props={
//   sliderPerView:3,loop:true,speed:2000,centeredSlides:true,allowTouchMove:false,
// }

  return (
    <Swiper
      autoplay={{
        delay: 1,
        disableOnInteraction: false,
        reverseDirection: reverse,
      }}
      speed={3000}
      slidesPerView={3}
      centeredSlides
      observer
      observeParents
      allowTouchMove= {false}
      loop
      modules={[Autoplay]}
      
    >
      {Array.from({ length: 7 }).map((_, i) => (
        <SwiperSlide key={i}>asssssssssss</SwiperSlide>
      ))}
    </Swiper>
  );
};
