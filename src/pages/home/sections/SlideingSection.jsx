import { Link } from "react-router-dom";
import tw from "tailwind-styled-components";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { MdArrowOutward, MdArrowForward, MdArrowBack } from "react-icons/md";
import { swiper_imgs_navigatoer } from "../data";

export default function SlideingSection(props) {
  const { active, i, setActive, content } = props;
  const { title, header_text, text } = content;

  const handleActiveSlide = (i) => {
    const newActiveState = active.map((status, ind) =>
      ind === i ? !status : status
    ); //changing only the ind 0 to true
    setActive(newActiveState);

    if (i === 0) {
      setActive([true]);
    } else if (i === 1) {
      setActive([true, true]);
    } else if (i === 2) {
      setActive([true, true, true]);
    } else {
      setActive([true, true, true, true]);
    }
  };

  return (
    <Slider
      $i={i}
      $active={active.length - 1}
      style={{ left: active[i] ? content.open : content.close }}
      onClick={() => handleActiveSlide(i)}
    >
      {/* left large title */}
      <div className="flex items-baseline font-semibold">
        <div className="text-[20vw] uppercase">{title.split("")[0]}</div>
        <div className="-ml-[2vw] text-[2vw]">{title.split("").slice(1)}</div>
      </div>
      {/* right sliders content */}
      <div className="space-y-8 text-pretty">
        <h1 className="text-[4.25rem] text-white leading-none">
          {header_text}
        </h1>
        <p className="text-Gray text-[1.25rem]">{text}</p>
        <Link className="font-semibold hover:text-Gray items-center flex [&>svg]:hover:ml-2 text-white">
          Discover Our Work <MdArrowOutward />
        </Link>
        {/* images swiper */}
        <ImagesSwiper />
      </div>
    </Slider>
  );
}
const ImagesSwiper = () => {
  const swiperProps = {
    slidesPerView: 2,
    loop: true,
    speed:500,
    grabCursor:true,
    navigation: { nextEl: "#next", prevEl: "#prev" },
    modules: [Navigation],
  };

  return (
    <>
      <Swiper  {...swiperProps} className="!z-0 [&>.swiper-wrapper]:gap-6">
        {swiper_imgs_navigatoer.map(({ highlight, text, img }, i) => (
          <SwiperSlide className="space-y-4" key={i}>
            <img className="rounded-2xl" src={img} alt={i + "img"} />
            <div>
              <span className="text-white font-bold">{highlight}</span>
              <span className="text-Gray"> {text}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex gap-4 items-center [&>button:hover]:text-white">
        <button id="prev">
          <MdArrowBack />
        </button>
        <button id="next">
          <MdArrowForward />
        </button>
      </div>
    </>
  );
};

const Slider = tw.div`
${({ $active, $i }) =>
  $active === $i ? "text-Ocean" : "text-Gray cursor-pointer"}
w-[85%]
hover:text-Ocean
border-l
border-l-gray-700
bg-Abyss
top-0
absolute
h-full
grid 
grid-cols-2
items-center
gap-10
pl-2
transition-all
duration-1000
`;
