import "swiper/css";
import "swiper/css/free-mode";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

export default function AutoSlider({ reverse = false, arr }) {
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
      speed={8000}
      slidesPerView={3}
      centeredSlides
      observer
      observeParents
      allowTouchMove={false}
      loop
      modules={[Autoplay]}
    >
      {arr.map((img, i) => (
        <SwiperSlide key={i}>
          <img className="rounded-2xl" src={img} alt={"img" + i} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
