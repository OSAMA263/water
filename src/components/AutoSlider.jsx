import "swiper/css";
import "swiper/css/free-mode";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import SlideElement from "./SlideElement";

export default function AutoSlider(props) {
  const { stagger = false, reverse = false, slidesPerView = 3, arr } = props;

  return (
    <Swiper
      autoplay={{
        delay: 1,
        disableOnInteraction: false,
        reverseDirection: reverse,
      }}
      speed={8000}
      slidesPerView={slidesPerView}
      centeredSlides
      observer
      observeParents
      allowTouchMove={false}
      loop
      modules={[Autoplay]}
    >
      {arr.map((img, i) => (
        <SwiperSlide key={i}>
          <SlideElement y={!stagger && 0} i={stagger && i}>
            <img
              loading="lazy"
              className={`rounded-2xl ${
                slidesPerView > 3 ? "brightness-50 hover:brightness-100" : ""
              }`}
              src={img}
              alt={"img" + i}
            />
          </SlideElement>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
